import { useState } from 'react'
import './login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [usernamePlaceholder, setUsernamePlaceholder] = useState(true)
    const [passwordPlaceholder, setPasswordPlaceholder] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const data = await response.json()
            if (data.success) {
                window.location.href = '/welcome'
                setErrorMessage('')
            } else {
                setErrorMessage('Incorrect username or password')
            }
        } catch (error) {
            console.error(error)
            setErrorMessage('An error occurred. Please try again later.')
        }
    }

    const handleUsernameFocus = () => {
        setUsernamePlaceholder(false)
    }

    const handleUsernameBlur = () => {
        setUsernamePlaceholder(username === '')
    }

    const handlePasswordFocus = () => {
        setPasswordPlaceholder(false)
    }

    const handlePasswordBlur = () => {
        setPasswordPlaceholder(password === '')
    }

    return (
        <div className="login">
            <div className="login-container">
            <h1 className="title">MSG BOARD</h1>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input className="input" type="text" placeholder={usernamePlaceholder ? 'Username' : ''} value={username} onChange={(e) => setUsername(e.target.value)} onFocus={handleUsernameFocus} onBlur={handleUsernameBlur} />
                    <input className="input" type="password" placeholder={passwordPlaceholder ? 'Password' : ''} value={password} onChange={(e) => setPassword(e.target.value)} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} />
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <button className="button" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login


