import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export default function useDarkSide() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Use localStorage theme if available, otherwise default to 'light'
    return (localStorage.theme as Theme) || 'light';
  });

  const colorTheme: Theme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);


    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}
