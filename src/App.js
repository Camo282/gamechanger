import React from "react";
import './App.css';
import SignIn from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Library from "./components/Library";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  // return (
  //   <div className="App">
  //     {
  //       currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
  //     }
  //   </div>
  // );
  return (
    <div>
  
      <main>
   <SignIn></SignIn>
   
      </main>

      
    </div>
  )

}
export default App;