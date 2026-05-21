import { createContext, useContext, useEffect, useState } from 'react';

// Create Auth Context
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for token on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, validate token with backend
      // For now, just set user as logged in
      setUser({ mobile: 'user_mobile' }); // Placeholder
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (mobile, _password) => { // eslint-disable-line no-unused-vars
    try {
      // In a real app, make API call
      // For now, simulate login
      const token = 'fake_jwt_token'; // Placeholder
      localStorage.setItem('token', token);
      setUser({ mobile });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Signup function
  const signup = async (mobile, _password) => { // eslint-disable-line no-unused-vars
    try {
      // In a real app, make API call
      // For now, simulate signup
      const token = 'fake_jwt_token'; // Placeholder
      localStorage.setItem('token', token);
      setUser({ mobile });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};