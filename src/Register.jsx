import { useState } from 'react';
import logo from '/logo.svg';
import carImage from '/car.png';
import eyeIcon from '/eye-off.svg';
import {register} from "./api/auth.js";

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    const [passwordShown, setPasswordShown] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== repeatPassword) {
            setError("Пароли не совпадают");
            return;
        }

        try {
            const res = await register(firstName, lastName, patronymic, phoneNumber, email, password, repeatPassword);
            console.log("Успешная регистрация:", res.data);
            window.location.href = "/login";
        } catch (err) {
            console.error("Ошибка регистрации:", err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err);
            }
        }

        setPassword('');
        setRepeatPassword('');
    };


    return (
        <div className="auth-page">
            <div className="auth-container">
                <img src={logo} alt="Logo" className="logo" />
                <section id="auth" className="auth">
                    <h1>Регистрация</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <div className="col">
                                <input className="input-field" type="text" id="firstName"
                                       placeholder='Имя' value={firstName}
                                       onChange={e => setFirstName(e.target.value)} required/>
                            </div>
                            <div className="col">
                                <input className="input-field" type="text" id="lastName"
                                       placeholder='Фамилия' value={lastName}
                                       onChange={e => setLastName(e.target.value)} required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <input className="input-field" type="text" id="patronymic"
                                   placeholder='Отчество' value={patronymic}
                                   onChange={e => setPatronymic(e.target.value)}/>
                        </div>

                        <div className="form-group row">
                            <div className="col">
                                <input className="input-field" type="tel" id="phoneNumber"
                                       placeholder='Телефон' value={phoneNumber}
                                       onChange={e => setPhoneNumber(e.target.value)} required/>
                            </div>
                            <div className="col">
                                <input className="input-field" type="email" id="email"
                                       placeholder='Email' value={email}
                                       onChange={e => setEmail(e.target.value)} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <input className="input-field" type={passwordShown ? "text" : "password"} id="password"
                                   placeholder='Пароль' value={password}
                                   onChange={e => setPassword(e.target.value)} required/>
                            {/*TODO: change eye icon to different icon*/}
                            <img src={passwordShown ? eyeIcon : eyeIcon} onClick={togglePasswordVisibility}
                                 className="toggle-password" alt="Показать/скрыть пароль"></img>
                        </div>

                        <div className="form-group">
                            <input className="input-field" type={passwordShown ? "text" : "password"} id="repeatPassword"
                                   placeholder='Подтвердите пароль' value={repeatPassword}
                                   onChange={e => setRepeatPassword(e.target.value)} required/>
                            <img src={passwordShown ? eyeIcon : eyeIcon} onClick={togglePasswordVisibility}
                                 className="toggle-password" alt="Показать/скрыть пароль"></img>
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button type="submit">Зарегистрироваться</button>
                    </form>
                     <p className="question">Уже есть аккаунт? <a href="/login">Войти</a></p>
                </section>
            </div>

            <div className="image-container">
                <img src={carImage} alt="Car" className="car-image" />
            </div>
        </div>
    );
}

export default Register;