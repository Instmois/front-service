import { useState } from 'react'
import { login } from "./auth.js";
import carImage from '/car.png';
import eyeIcon from "/eye-off.svg";
import logo from "/logo.svg";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [passwordShown, setPasswordShown] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('');

        try {
            const res = await login(email, password);
            setSuccess('Успешный вход');
            console.log(res.data.message)
        } catch (err) {
            setError(err)
        }
        setPassword('')
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <img src={logo} alt="Logo" className="logo"/>

                <section id="auth" className="auth">
                    <h1>Вход в аккаунт</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <input className="input-field" type="text" id="email"
                                placeholder="Email"  value={email}
                                onChange={(e) => setEmail(e.target.value)} required/>
                        </div>

                        <div className="form-group">
                            <input className="input-field" type={passwordShown ? "text" : "password"} id="password"
                                placeholder="Пароль" value={password}
                                onChange={(e) => setPassword(e.target.value)} required/>
                            {/*TODO: change eye icon to different icon*/}
                            <img src={passwordShown ? eyeIcon : eyeIcon} onClick={togglePasswordVisibility}
                                 className="toggle-password" alt="Показать/скрыть пароль"></img>
                        </div>

                        {error && <div className="error-message">{error}</div>}
                        {success && <div className="success-message">{success}</div>}

                        <button type="submit">Войти</button>
                    </form>
                    <p className="question">У вас ещё нет аккаунта? <a href="http://localhost:5173/register">Зарегистрироваться</a>
                    </p>
                </section>
            </div>

            <div className="image-container">
                <img src={carImage} alt="Car" className="car-image"/>
            </div>
        </div>

    )
}

export default Login
