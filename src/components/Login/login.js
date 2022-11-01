import React, {useState} from "react";
import './App.css';
import { Login } from './login'; 
import { Register } from './Register'; 

//Login and Register Function
function Login() {
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

export default Login;