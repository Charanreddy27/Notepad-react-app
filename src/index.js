import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  const currentTheme = localStorage.getItem("theme");
  
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  
    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
    }
  }
  
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }
  
  toggleSwitch.addEventListener("change", switchTheme, false);

ReactDOM.render(<App />, document.getElementById("root"));
