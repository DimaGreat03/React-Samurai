import LoginFormHook from "../common/HookForm/Login/LoginHookForm";


const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginFormHook {...props}/>
        </div>
    )
}


export default Login