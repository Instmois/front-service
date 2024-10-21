import { useState } from 'react'
import axios from "axios";
//import './Register.css'

function Register() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [patronymic, setPatronymic] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted", {firstName, lastName, email, password})
        axios.post("http://localhost:8080/api/v1/auth/register",
            {
                "firstName": firstName,
                "lastName": lastName,
                "patronymic": patronymic,
                "phoneNumber": phoneNumber,
                "password": password,
                "repeatPassword": repeatPassword,
                "email": email,
            }
        ).then((response) => {console.log(response)})
        /*
        setFirstName("")
        setLastName("")
        setEmail("")
        */
        setPassword("")
        setRepeatPassword("")
    }

    return (
        <section id="register" className="register">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        placeholder="Имя"
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required/>
                </div>
                <div className="form-group">
                    <input
                        placeholder="Фамилия"
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required/>
                </div>
                <div className="form-group">
                    <input
                        placeholder="Отчество"
                        type="text"
                        id="patronymic"
                        value={patronymic}
                        onChange={(e) => setPatronymic(e.target.value)}
                        required/>
                </div>
                <div className="form-group">
                    <input
                        placeholder="Телефон"
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required/>
                </div>
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
                <div className="form-group">
                    <input
                        placeholder="Подтвердите пароль"
                        type="password"
                        id="repeatPassword"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required/>
                </div>
                <button type="submit">Зарегистрироваться</button>
            </form>
            <div> Вас уже есть аккаунт? <a href="http://localhost:5173/login">Войти</a></div>
        </section>
    )
}

export default Register
