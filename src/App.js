import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import PersonalData from "./components/PersonalData/PersonalData";
import KeyUserData from "./components/KeyUserData/KeyUserData";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    birthdate: "",
    email: "",
    Username: "",
    Password: "",
  });

  return (
    <>
      <header>
        <h1>Week 4 Challenge 4</h1>
      </header>
      <PersonalData />
      <KeyUserData />
    </>
  );
}

export default App;
