import { useState } from "react";
import useDarkSide from "./useDarkTheme";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function ThemeSwitcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={56}
        />
      </div>
    </>
  );
}
