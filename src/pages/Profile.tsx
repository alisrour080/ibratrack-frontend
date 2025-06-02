import { useState } from 'react';
import { User, KeyRound, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  
  // Mock user data
  const user = { email: 'alisrourm13@gmail.com' };

  const updateProfile = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setError('');
    }, 1000);
  };

  const handleResetPassword = () => {
    setIsResettingPassword(true);
    setTimeout(() => {
      setIsResettingPassword(false);
      setResetEmailSent(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">User Profile</h1>
          <p className="text-gray-600 mt-1">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'profile'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <User className="h-4 w-4" />
              Profile
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === 'security'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <KeyRound className="h-4 w-4" />
              Security
            </button>
            <button
              onClick={() => setActiveTab('2fa')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 ${
                activeTab === '2fa'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              Two-factor Auth
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {activeTab === 'profile' && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Update your account profile information and email address
                </p>
              </div>
              
              {/* Avatar Section */}
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  {avatarUrl ? (
                    <img 
                      src={avatarUrl} 
                      alt="Avatar" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-semibold">
                      A
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">Profile Picture</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Enter a URL for your profile picture
                  </p>
                  <input 
                    type="text"
                    placeholder="https://example.com/avatar.jpg"
                    className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-400"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Username */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input 
                  type="text" 
                  placeholder="Enter a username" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-400"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                  value={user.email}
                  disabled
                />
                <p className="text-sm text-gray-500 mt-2">
                  Your email cannot be changed. Contact <a href="/contact" className="text-blue-600 hover:underline">support</a> if you need to update it.
                </p>
              </div>
              
              {/* Error Alert */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-400 mr-2" />
                    <span className="text-red-800 text-sm">{error}</span>
                  </div>
                </div>
              )}
              
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                onClick={updateProfile}
                disabled={isSaving}
              >
                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Password</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Change your password or reset it if you've forgotten it
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-700 mb-2">
                  To change your password, click the button below and we'll send a password reset link to your email address:
                  <span className="font-medium ml-1">{user.email}</span>
                </p>
                <p className="text-xs text-gray-500">
                  Note: Password must be at least 8 characters and include at least one letter and one digit.
                </p>
              </div>
              
              {/* Success Alert */}
              {resetEmailSent && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <div className="text-green-800 text-sm">
                    <strong>Email Sent</strong><br />
                    Check your email inbox for a password reset link. The link will expire in 24 hours.
                  </div>
                </div>
              )}
              
              {/* Error Alert */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-400 mr-2" />
                    <span className="text-red-800 text-sm">{error}</span>
                  </div>
                </div>
              )}
              
              <button 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                onClick={handleResetPassword}
                disabled={isResettingPassword}
              >
                {isResettingPassword && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isResettingPassword ? 'Sending Email...' : 'Reset Password'}
              </button>
            </div>
          )}

          {activeTab === '2fa' && (
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Two-Factor Authentication</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Add an extra layer of security to your account
                </p>
              </div>
              
              <p className="text-sm text-gray-700 mb-6">
                Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to sign in.
              </p>
              
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                <div className="text-blue-800 text-sm">
                  <strong>Coming Soon</strong><br />
                  Two-factor authentication is currently in development and will be available soon.
                </div>
              </div>
              
              <button className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed" disabled>
                Enable Two-Factor Authentication
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;