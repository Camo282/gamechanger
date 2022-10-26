import React, {useState} from "react";
import './App.css';
import { Login } from './components/Login'; 
import { Register } from './components/Register'; 

//Login and Register Function
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        //ternary operator to check if condition is true and whats displayed
        currentForm === "login" ?   <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
 
    </div>
  );
}

export default App;