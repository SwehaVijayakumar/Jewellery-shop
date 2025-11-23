import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("signupUser"));

    if (!savedUser) return { success: false, message: "User not registered!" };

    if (email === savedUser.email && password === savedUser.password) {
      setUser(savedUser);
      return { success: true, message: "Login Successful!" };
    } else {
      return { success: false, message: "Invalid credentials!" };
    }
  };

  const signup = (userData) => {
    localStorage.setItem("signupUser", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
