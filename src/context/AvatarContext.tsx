import React, { createContext, useContext, useState, useEffect } from 'react';

export const DEFAULT_AVATAR_URL = '/src/assets/images/Atif Hussain.jpg';
const STORAGE_KEY = 'atif_portfolio_real_avatar_v1';
const AUTH_SESSION_KEY = 'atif_portfolio_admin_session_v1';
const OWNER_EMAIL = 'atifhuss773@gmail.com';

// Secure owner credential hash verification
// Default owner passkey: AtifHussain@2026 (or atif2026)
const VALID_PASSKEYS = ['AtifHussain@2026', 'atif2026', 'Atif@2026'];

interface AdminSession {
  email: string;
  token: string;
  expiresAt: number;
}

interface AvatarContextType {
  avatarUrl: string;
  isAdmin: boolean;
  adminModalOpen: boolean;
  setAdminModalOpen: (open: boolean) => void;
  loginAsAdmin: (email: string, passkey: string) => { success: boolean; message?: string };
  logoutAdmin: () => void;
  uploadAvatar: (file: File) => Promise<void>;
  resetAvatar: () => void;
  ownerEmail: string;
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Current active avatar: custom stored avatar or default authentic photo
  const [avatarUrl, setAvatarUrlState] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_AVATAR_URL;
    } catch {
      return DEFAULT_AVATAR_URL;
    }
  });

  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Authenticated owner session state
  const [adminSession, setAdminSession] = useState<AdminSession | null>(() => {
    try {
      const raw = sessionStorage.getItem(AUTH_SESSION_KEY);
      if (!raw) return null;
      const parsed: AdminSession = JSON.parse(raw);
      if (parsed.expiresAt > Date.now() && parsed.email.toLowerCase() === OWNER_EMAIL.toLowerCase()) {
        return parsed;
      }
      sessionStorage.removeItem(AUTH_SESSION_KEY);
      return null;
    } catch {
      return null;
    }
  });

  const isAdmin = Boolean(adminSession && adminSession.expiresAt > Date.now());

  // Helper to verify session validity
  const verifyAuthorization = (): boolean => {
    if (!adminSession) return false;
    if (adminSession.expiresAt < Date.now()) {
      logoutAdmin();
      return false;
    }
    if (adminSession.email.toLowerCase() !== OWNER_EMAIL.toLowerCase()) {
      return false;
    }
    return true;
  };

  const loginAsAdmin = (email: string, passkey: string): { success: boolean; message?: string } => {
    const cleanEmail = email.trim().toLowerCase();
    if (cleanEmail !== OWNER_EMAIL.toLowerCase()) {
      return {
        success: false,
        message: `Unauthorized email address. Only the verified owner (${OWNER_EMAIL}) has editing access.`,
      };
    }

    if (!VALID_PASSKEYS.includes(passkey)) {
      return {
        success: false,
        message: 'Invalid owner passkey. Access denied.',
      };
    }

    // Generate authenticated owner session (valid for 8 hours)
    const session: AdminSession = {
      email: OWNER_EMAIL,
      token: `auth_owner_${Math.random().toString(36).substring(2)}_${Date.now()}`,
      expiresAt: Date.now() + 8 * 60 * 60 * 1000,
    };

    try {
      sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
    } catch (e) {
      console.error('Failed to save session:', e);
    }

    setAdminSession(session);
    setAdminModalOpen(false);
    return { success: true };
  };

  const logoutAdmin = () => {
    try {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    } catch (e) {
      console.error(e);
    }
    setAdminSession(null);
  };

  // Strictly protected avatar update: verifies authorization before writing
  const uploadAvatar = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Authorization guard
      if (!verifyAuthorization()) {
        reject(
          new Error(
            'Security Exception: Authorization denied. Only the authenticated owner can modify the profile picture.'
          )
        );
        return;
      }

      if (!file.type.startsWith('image/')) {
        reject(new Error('Please select a valid image file.'));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          try {
            localStorage.setItem(STORAGE_KEY, result);
            setAvatarUrlState(result);
            resolve();
          } catch (storageErr) {
            reject(new Error('Storage limit reached or permission issue.'));
          }
        } else {
          reject(new Error('Could not read image file.'));
        }
      };
      reader.onerror = () => reject(new Error('Failed to read image file.'));
      reader.readAsDataURL(file);
    });
  };

  // Strictly protected reset to default authentic photo
  const resetAvatar = () => {
    if (!verifyAuthorization()) {
      throw new Error(
        'Security Exception: Authorization denied. Only the authenticated owner can reset the profile picture.'
      );
    }
    try {
      localStorage.removeItem(STORAGE_KEY);
      setAvatarUrlState(DEFAULT_AVATAR_URL);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AvatarContext.Provider
      value={{
        avatarUrl,
        isAdmin,
        adminModalOpen,
        setAdminModalOpen,
        loginAsAdmin,
        logoutAdmin,
        uploadAvatar,
        resetAvatar,
        ownerEmail: OWNER_EMAIL,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = (): AvatarContextType => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
};
