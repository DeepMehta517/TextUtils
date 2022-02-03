import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Deployed on github failed due to routes (Read Documents)

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toglemodes = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Enabled darked mode!", "success");
      document.title ="TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Enabled Light mode!", "success");
      document.title ="TextUtils - Light Mode";

    }
  };
  return (
    <>
      <Router>
      <Navbar
        title="TextUtils"
        about="about"
        mode={mode}
        toglemodes={toglemodes}
      />
      <Alerts alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm
              heading="Enter the text to anlyze"
              mode={mode}
              showalert={showalert}
            />
          </Route>
        </Switch>
      </Router>
      
      
    </>
  );
}

export default App;
