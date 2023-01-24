import styles from './Login.module.scss'

export default function Login({
    login,
    credentials,
    handleChangeAuth
}) {
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={() => {
                e.preventDefault()
                login()
            }}>
                <input type="text" value={credentials.email} name="email" onChange={handleChangeAuth} placeholder={'Email Here'}></input>
                <input type="password" value={credentials.password} name="password" onChange={handleChangeAuth} placeholder={'Password'}></input>
                <input type="submit" value="Login as an existing User" />
            </form>
        </>
    )
}