import { useState } from "react";
import loginForm from "./Index.module.css"
const SignUpForm = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [nameValid, setNameValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)

    const signInHandler = (event) => {
        event.preventDefault()
        if (name.trim() === "") {
            setNameValid(false)
        }
        if (password.trim() === "") {
            setPasswordValid(false)
        }
        if (name.trim() === "") {
            return
        }
        setName(name)
        setPassword(password)
        console.log(name, password)
        setName('')
        setPassword('')
    }

    return (
        <div className={loginForm.signUpForm}>
            {/* UserName Input with validation//////////// */}
            {!nameValid ?
                <h1 style={{ color: "red", margin: "1rem 0" }}>Enter a valid Name</h1> : <h1>Enter Name</h1>}

            <input type="text"
                value={name}
                onChange={event => {
                    setName(event.target.value);
                    if (name.trim() !== 0) { setNameValid(true) }
                }} />
            {/* UserPassword Input with validation//////////// */}

            {!passwordValid ?
                <h1 style={{ color: "red", margin: "1rem 0" }} >Enter a valid Password</h1> : <h1>Enter Password</h1>}

            <input type="password"
                value={password}
                onChange={event => {
                    setPassword(event.target.value);
                    if (password.trim() !== 0) { setPasswordValid(true) }
                }} />
            <button onClick={signInHandler}>Sign Up</button>
        </div>
    )
}
export default SignUpForm;