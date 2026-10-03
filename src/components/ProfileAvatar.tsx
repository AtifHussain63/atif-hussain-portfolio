import React, { useRef, useState } from 'react';
import { Camera, Upload, Trash2, CheckCircle2, ShieldCheck, RefreshCw, Edit3 } from 'lucide-react';
import { useAvatar } from '../context/AvatarContext.tsx';

interface ProfileAvatarProps {
  size?: 'hero' | 'about' | 'cv' | 'nav';
  className?: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  size = 'hero',
  className = '',
}) => {
  const { avatarUrl, isAdmin, uploadAvatar, resetAvatar, setAdminModalOpen } = useAvatar();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [showEditOptions, setShowEditOptions] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // Extra security verification check
    if (!isAdmin) {
      alert('Security Exception: You must be authenticated as the owner to modify the profile picture.');
      return;
    }

    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      await uploadAvatar(file);
      setUploadMessage('Profile picture updated successfully!');
      setShowEditOptions(false);
      setTimeout(() => setUploadMessage(null), 3000);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to update photo');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleResetPhoto = () => {
    if (!isAdmin) return;
    if (confirm('Reset profile picture back to default authentic photo?')) {
      resetAvatar();
      setShowEditOptions(false);
    }
  };

  // 1. Navigation bar thumbnail
  if (size === 'nav') {
    return (
      <div className="relative inline-flex items-center">
        <img
          src={avatarUrl}
          alt="Atif Hussain"
          className="w-8 h-8 rounded-full object-cover object-top border border-cyan-400/50 shadow-sm"
        />
      </div>
    );
  }

  // 2. CV Modal Avatar
  if (size === 'cv') {
    return (
      <div className="relative shrink-0">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-md bg-slate-950 flex items-center justify-center">
          <img
            src={avatarUrl}
            alt="Atif Hussain - Real Profile Photo"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Edit button ONLY visible to authenticated Owner/Admin */}
        {isAdmin && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Owner Edit: Upload replacement photo"
            className="absolute bottom-1 right-1 p-1.5 rounded-lg bg-cyan-400 text-slate-900 shadow-md hover:bg-cyan-300 transition-colors"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>
        )}

        {isAdmin && (
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            aria-label="Upload profile picture"
          />
        )}
      </div>
    );
  }

  // 3. About Section Avatar
  if (size === 'about') {
    return (
      <div className={`relative ${className}`}>
        {/* Strictly hidden from normal visitors: File input only mounts if owner is verified */}
        {isAdmin && (
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            aria-label="Owner upload profile photo"
          />
        )}

        <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl group">
          <img
            src={avatarUrl}
            alt="Atif Hussain - Real Profile Photo"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
          />

          {/* Owner/Admin ONLY Controls: completely absent for normal visitors */}
          {isAdmin && (
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 gap-2 backdrop-blur-xs">
              <span className="text-[11px] font-mono text-cyan-300">
                Owner Controls Active
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg flex items-center gap-1.5 shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Replace Photo</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetPhoto}
                  title="Reset to default photo"
                  className="p-1.5 text-slate-300 hover:text-rose-400 bg-slate-900/90 border border-slate-700 rounded-lg"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 4. Hero Section Avatar (Default public view has zero edit controls; Owner sees Edit Profile Picture button)
  return (
    <div className={`relative w-full max-w-sm ${className}`}>
      {/* File input strictly only in DOM for authenticated owner */}
      {isAdmin && (
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          aria-label="Upload profile photo"
        />
      )}

      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-indigo-500/20 rounded-2xl blur-lg opacity-75"
      />

      <div className="relative bg-slate-900/85 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-4 shadow-2xl overflow-hidden">
        {/* Photo Container */}
        <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-800">
          <img
            src={avatarUrl}
            alt="Atif Hussain - Real Profile Photo"
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-103"
          />

          {/* Academic badge pinned at bottom left */}
          <div className="absolute bottom-3 left-3 bg-[#090D16]/85 backdrop-blur-md border border-slate-700/60 rounded-md px-2.5 py-1 text-xs text-slate-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>KIU Gilgit · Class of 2028</span>
          </div>

          {/* Owner/Admin Status indicator */}
          {isAdmin && (
            <div className="absolute top-3 right-3 bg-cyan-950/90 backdrop-blur-md border border-cyan-800/80 rounded-md px-2 py-1 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Owner Mode</span>
            </div>
          )}
        </div>

        {uploadMessage && (
          <div className="mb-3 p-2 rounded-lg bg-emerald-950/70 border border-emerald-800/80 text-center text-xs text-emerald-300 font-mono animate-in fade-in">
            {uploadMessage}
          </div>
        )}

        {/* OWNER/ADMIN ONLY CONTROLS - Hidden completely for normal visitors */}
        {isAdmin && (
          <div className="mb-4 p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
              <span className="flex items-center gap-1 font-semibold">
                <Edit3 className="w-3 h-3" />
                <span>Photo Management</span>
              </span>
              <span className="text-[10px] text-slate-400">Owner Authenticated</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-sm"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{isUploading ? 'Updating...' : 'Upload / Replace Photo'}</span>
              </button>

              <button
                type="button"
                onClick={handleResetPhoto}
                title="Reset to default photo"
                className="p-1.5 text-slate-400 hover:text-rose-400 bg-slate-900 border border-slate-700/80 rounded-lg transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Card summary info (shown to everyone) */}
        <div className="space-y-2 px-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Academic Status</span>
            <span className="text-cyan-300 font-medium font-mono">Semester 5 Active</span>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Core Focus</span>
            <span className="text-slate-200">ML · Data Analytics · Python</span>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Scholarships</span>
            <span className="text-amber-300 font-medium">Honhaar Scholar 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
