<<<<<<< HEAD
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
=======
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navigation/Navbar.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );


}


export default App;
// import React, {useState} from "react";
// import './App.css';
// import { Login } from './components/login'; 
// import { Register } from './components/register'; 


//Login and Register Function
// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

  // return (
  //   <div>
  //     <Main></Main>
  //   </div>
  // )

//   return (
    
//     <div className="App">
//       {
//         //ternary operator to check if condition is true and whats displayed
//         currentForm === "login" ?   <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
//       }
 
//     </div>
//   );
// }

// export default App;

// import React, { Component } from "react";

// import { MenuItems } from './MenuItems';
// import './Navbar.css';
// // import { Button } from '../Button';

// class Navbar extends Component {
//   state = { clicked: false }

//   handleClick = () =>{
//     this.setState({ clicked: !this.state.clicked })
//   }

//   render() {
//     return(
//       <nav className="NavbarItems">
//         <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
//         <div className="menu-icon" onClick={this.handleClick}>
//           <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </div>
//         <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <a className={item.cName} href={item.url}>
//                   {item.title}
//                 </a>
//               </li>
//             )
//           })}          
//         </ul>
//         {/* <Button></Button> */}
//       </nav>
//     )
//   }
// }




// export default Navbar;
>>>>>>> 245d7684995032673cec718c8574c05f353f3266
