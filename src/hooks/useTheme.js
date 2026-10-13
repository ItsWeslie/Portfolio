import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("sw-theme") || "dark",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sw-theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
