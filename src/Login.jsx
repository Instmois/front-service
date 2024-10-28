import { useState } from 'react'
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted", {email, password})
        axios.post("http://localhost:8080/api/v1/auth/login",
            {
                "email": email,
                "password": password,
            }
        ).then((response) => {console.log(response)})
        setPassword("")
    }

    return (
        <section id="login" className="login">
            <h1>Вход в аккаунт</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        placeholder="Email"
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                </div>
                <div className="form-group">
                    <input
                        placeholder="Пароль"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                </div>
                <button type="submit">Войти</button>
            </form>
        </section>
    )
}

export default Login
