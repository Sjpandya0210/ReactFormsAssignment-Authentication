import { useState } from "react";
import App from "../App";

function SignUpForm ({setToken}) {
    const [username , setUsername] = useState ("");
    const [password , setPassword] = useState ("");
    const [error, setError] = useState (null);
    
    async function handleSubmit  (event) {
        event.preventDefault ();
        try {
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup", 
            {method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({username: username, password: password})
        });
            const result = await response.json();
            //This is where i dont understand why doing this?
            //also not working
            setToken(result.token); 

            console.log("This is result of fetching API", result);
            console.log("This is the token", result.token);

            setUsername(" ");
            setPassword(" ");

        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div>
        <h2>Sign Up</h2>
        {//render error message in a p tag
        error && <p>{error}</p>
        //error ? <p>{error}</p> : <span />
        }
        <form onSubmit = {handleSubmit}>
            <label> 
                Username : <input value= {username} onChange = {(event) => 
                setUsername(event.target.value )}/>
            </label>
            <label> 
                Password : <input value = {password} onChange = {(event) => 
                setPassword(event.target.value )}/>
            </label>
            <button >Submit</button>
        </form>
        </div>
    )
}
export default SignUpForm;