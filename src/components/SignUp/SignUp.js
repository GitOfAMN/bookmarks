export default function SignUp({
    credentials,
    signUp,
    handleChangeAuth
}) {
    return (
        <>
            <h2>SignUp</h2>
            <form onSubmit={() => {
                e.preventDefault()
                signUp()
            }}>
                <input type="text" value={credentials.email} name="email" onChange={handleChangeAuth} placeholder={'Email'}></input>
                <input type="name" value={credentials.name} name="name" onChange={handleChangeAuth} placeholder={'Name'}></input>
                <input type="password" value={credentials.password} name="password" onChange={handleChangeAuth} placeholder={'Password'}></input>
                <input type="submit" value="Sign Up as a New User" />
            </form>
        </>
    )
}