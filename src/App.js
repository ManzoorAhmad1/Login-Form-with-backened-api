import './App.css';
import React, { useState } from "react"
import Header from './FrontEnd/Header/Index';
import SignIn from "./FrontEnd/LoginForm/Index";
import SignUpForm from './FrontEnd/SignUp/Index';
function App() {
  const [showFrom, setShowForm] = useState(false)
  const ShowSignUpForm = () => {
    setShowForm(true)
  }
  return (
    <div>
      <Header showSignUp={ShowSignUpForm} />
      {!showFrom ? <SignIn /> : <SignUpForm />}
    </div>
  );
}

export default App;
