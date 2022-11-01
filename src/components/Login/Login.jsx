import "./style.css";
//usestate hook
import React, {useState} from "react"
export const Login = (props) => {
    //function that modifies state
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    //function to capture when users submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username)
    }

    return (
        
        
        <div className="auth-form-container">
           <h1>GameTracker</h1>
            <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="username" id="username" name="username" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        
    )
}