import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    applyTheme(savedTheme);
    setMounted(true);
  }, []);

  const applyTheme = (newTheme) => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute("data-theme", newTheme);

    if (newTheme === "light") {
      htmlElement.style.setProperty("--color-background", "#f5f5f5");
      htmlElement.style.setProperty("--color-foreground", "#000000");
      htmlElement.style.setProperty("--color-card", "#ffffff");
      htmlElement.style.setProperty("--color-primary", "#8b5cf6");
      htmlElement.style.setProperty("--color-primary-foreground", "#ffffff");
      htmlElement.style.setProperty("--color-secondary", "#f0f0f0");
      htmlElement.style.setProperty("--color-secondary-foreground", "#111111");
      htmlElement.style.setProperty("--color-muted", "#e5e5e5");
      htmlElement.style.setProperty("--color-muted-foreground", "#333333");
      htmlElement.style.setProperty("--color-border", "#d0d0d0");
      htmlElement.style.setProperty("--color-highlight", "#22d3ee");
      htmlElement.style.setProperty("--color-surface", "#f9f9f9");
    } else {
      htmlElement.style.setProperty("--color-background", "#0f1418");
      htmlElement.style.setProperty("--color-foreground", "#f0f2f5");
      htmlElement.style.setProperty("--color-card", "#141a1f");
      htmlElement.style.setProperty("--color-primary", "#8b5cf6");
      htmlElement.style.setProperty("--color-primary-foreground", "#ffffff");
      htmlElement.style.setProperty("--color-secondary", "#1f2830");
      htmlElement.style.setProperty("--color-secondary-foreground", "#8b5cf6");
      htmlElement.style.setProperty("--color-muted", "#252e37");
      htmlElement.style.setProperty("--color-muted-foreground", "#7a8491");
      htmlElement.style.setProperty("--color-border", "#242b32");
      htmlElement.style.setProperty("--color-highlight", "#22d3ee");
      htmlElement.style.setProperty("--color-surface", "#1a2329");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
