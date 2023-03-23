import { useEffect, useState } from "react";


export default function useDarkMode() {
  // https://www.geeksforgeeks.org/how-to-add-dark-mode-in-reactjs-using-tailwind-css/
  const [theme, setTheme] = useState(localStorage.theme || null || undefined);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]); 

  return [colorTheme, setTheme];
}