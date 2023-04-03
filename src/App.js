import "./App.css";
import Navbar from "./Navbar";
import FromText from "./FromText";
import { useState } from "react";
import Alert from "./Alert";

function App() {
  const [alert, setAlert] = useState();
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="My Form App"
        aboutus="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert  alert={alert}/>
      <FromText formTitle="Enter your Text here using props" mode={mode}
      showAlert={showAlert} />
    </>
  );
}

export default App;
