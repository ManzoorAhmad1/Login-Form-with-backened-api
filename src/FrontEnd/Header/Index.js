import header from "./Index.module.css"

const Header = (props) => {
    return (
        <div className={header.header}>
            <h1><button onClick={props.showSignUp} href="/">Sign Up</button></h1>
        </div>
    )
}
export default Header;