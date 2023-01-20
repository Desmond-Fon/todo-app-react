import "./App.css";
import { useState, useEffect } from "react";
import Drag from "./components/Drag";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] lg:bg-[url('/images/bg-desktop-light.jpg')] lg:dark:bg-[url('/images/bg-desktop-dark.jpg')] bg-no-repeat bg-contain bg-veryLightGrayLT dark:bg-veryDarkBlueDM">
      <Header handleThemeSwitch={handleThemeSwitch} />
      <Todo />
      <Drag />
    </div>
  );
}

export default App;
