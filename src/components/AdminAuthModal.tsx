import React, { useState } from 'react';
import { X, Lock, Shield, CheckCircle2, AlertCircle, LogOut } from 'lucide-react';
import { useAvatar } from '../context/AvatarContext.tsx';

export const AdminAuthModal: React.FC = () => {
  const { isAdmin, adminModalOpen, setAdminModalOpen, loginAsAdmin, logoutAdmin, ownerEmail } = useAvatar();

  const [email, setEmail] = useState(ownerEmail);
  const [passkey, setPasskey] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!adminModalOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const result = loginAsAdmin(email, passkey);
    if (result.success) {
      setSuccessMsg('Owner authentication verified! Edit controls are now enabled.');
      setTimeout(() => {
        setSuccessMsg(null);
        setAdminModalOpen(false);
      }, 1200);
    } else {
      setErrorMsg(result.message || 'Authentication failed. Access denied.');
    }
  };

  const handleClose = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
    setPasskey('');
    setAdminModalOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close owner login"
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-display">
              Owner Administration
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Restricted to Atif Hussain ({ownerEmail})
            </span>
          </div>
        </div>

        {isAdmin ? (
          <div className="space-y-4 py-3 animate-in fade-in">
            <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-800/60 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Owner Mode Active</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  You are authenticated as <span className="font-mono text-cyan-300">{ownerEmail}</span>. Editing controls for the profile picture are unlocked.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={logoutAdmin}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-rose-300 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-800/60 rounded-lg transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out of Owner Mode</span>
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                Continue Editing
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4 mt-2">
            <p className="text-xs text-slate-400 leading-relaxed">
              Normal visitors have view-only access. To edit, replace, or update your profile photo, please verify your owner credentials below.
            </p>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800/80 text-xs text-rose-300 flex items-start gap-2 animate-in fade-in font-mono">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{successMsg}</span>
              </div>
            )}

            <div>
              <label htmlFor="owner-email" className="block text-xs font-mono text-slate-300 mb-1">
                Owner Email
              </label>
              <input
                id="owner-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 text-xs font-mono bg-slate-950/80 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="owner-passkey" className="block text-xs font-mono text-slate-300 mb-1">
                Owner Passkey
              </label>
              <input
                id="owner-passkey"
                type="password"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                placeholder="Enter master passkey (e.g. AtifHussain@2026)"
                required
                className="w-full px-3 py-2 text-xs font-mono bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                Default Owner Passkey: <code className="text-cyan-400">AtifHussain@2026</code>
              </span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#090D16] bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md shadow-cyan-400/20 active:scale-95"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Verify Owner Authentication</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
