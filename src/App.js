import "./App.css";
import { useState, useEffect } from "react";
import Drag from "./components/Drag";
import Header from "./components/Header";
import Todo from "./components/Todo";

const todo = [];

function App() {
  const [theme, setTheme] = useState("dark");
  const [name, setName] = useState("");
 

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

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd();
      console.log(todo);
    }
  };

  const handleAdd = () => {
    todo.push(name);
    setName("");
  };

  
  return (
    <div className="bg-[url('./images/bg-mobile-light.jpg')] dark:bg-[url('./images/bg-mobile-dark.jpg')] lg:bg-[url('./images/bg-desktop-light.jpg')] lg:dark:bg-[url('./images/bg-desktop-dark.jpg')] bg-no-repeat bg-contain bg-veryLightGrayLT dark:bg-veryDarkBlueDM h-screen font-josefin">
      <Header handleThemeSwitch={handleThemeSwitch} />
      <Todo
        name={name}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        todo={todo}
        // toggleCheck={toggleCheck}
        // check={check}
      />
      <Drag />
    </div>
  );
}

export default App;
