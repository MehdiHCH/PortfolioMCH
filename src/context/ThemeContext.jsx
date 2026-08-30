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
      htmlElement.style.setProperty("--color-background", "#fff7f8");
      htmlElement.style.setProperty("--color-foreground", "#180a0e");
      htmlElement.style.setProperty("--color-card", "#ffffff");
      htmlElement.style.setProperty("--color-primary", "#c8102e");
      htmlElement.style.setProperty("--color-primary-foreground", "#ffffff");
      htmlElement.style.setProperty("--color-secondary", "#f8e8eb");
      htmlElement.style.setProperty("--color-secondary-foreground", "#a60e29");
      htmlElement.style.setProperty("--color-muted", "#f1dfe3");
      htmlElement.style.setProperty("--color-muted-foreground", "#65545a");
      htmlElement.style.setProperty("--color-border", "#dfc6cc");
      htmlElement.style.setProperty("--color-highlight", "#e11d36");
      htmlElement.style.setProperty("--color-surface", "#fffafa");
    } else {
      htmlElement.style.setProperty("--color-background", "#08090b");
      htmlElement.style.setProperty("--color-foreground", "#f5f1f2");
      htmlElement.style.setProperty("--color-card", "#130d10");
      htmlElement.style.setProperty("--color-primary", "#e11d36");
      htmlElement.style.setProperty("--color-primary-foreground", "#fff7f8");
      htmlElement.style.setProperty("--color-secondary", "#201216");
      htmlElement.style.setProperty("--color-secondary-foreground", "#ff6674");
      htmlElement.style.setProperty("--color-muted", "#26171b");
      htmlElement.style.setProperty("--color-muted-foreground", "#a79ca0");
      htmlElement.style.setProperty("--color-border", "#3a2027");
      htmlElement.style.setProperty("--color-highlight", "#ff4b57");
      htmlElement.style.setProperty("--color-surface", "#160f12");
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
