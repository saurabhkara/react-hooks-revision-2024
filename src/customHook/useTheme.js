import { useState } from "react";

export default function useTheme(intialTheme) {
  const [theme, setTheme] = useState(intialTheme);

  function toggleButton() {
    console.log("Toogle function called");
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return {
    toggleButton,
    theme,
  };
}
