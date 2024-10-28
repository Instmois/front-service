import { useState } from 'react';
import axios from "axios";
import logo from './logo.svg'; // Путь к вашему логотипу
import carImage from './car.png'; // Путь к картинке автомобиля



function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== repeatPassword) {
            setError("Пароли не совпадают");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
                firstName,
                lastName,
                patronymic,
                phoneNumber,
                email,
                password,
            });

            console.log("Успешная регистрация:", response.data);

            window.location.href = "/login";
        } catch (error) {
            console.error("Ошибка регистрации:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("Произошла ошибка при регистрации. Попробуйте позже.");
            }
        }

        setPassword(""); // Очищаем поля пароля после отправки
        setRepeatPassword("");
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <img src={logo} alt="Logo" className="logo" />

                <section id="register" className="register">
                    <h1>Регистрация</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <div className="col">
                                <input type="text" id="firstName" placeholder='Имя' value={firstName} onChange={e => setFirstName(e.target.value)} required />
                            </div>
                            <div className="col">
                                <input type="text" id="lastName" placeholder='Фамилия' value={lastName} onChange={e => setLastName(e.target.value)} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="text" id="patronymic" placeholder='Отчество' value={patronymic} onChange={e => setPatronymic(e.target.value)} />
                        </div>

                        <div className="form-group row">
                            <div className="col">
                                <input type="tel" id="phoneNumber" placeholder='Телефон' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
                            </div>
                            <div className="col">
                                <input type="email" id="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required />
                            </div>
                        </div>



                        <div className="form-group">
                            <input type="password" id="password" placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <input type="password" id="repeatPassword" placeholder='Подтвердите пароль' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} required />
                        </div>

                        {error && <div className="error-message">{error}</div>} {/* Вывод ошибки */}

                        <button type="submit">Зарегистрироваться</button>
                    </form>
                     <div className="already-user"> Уже есть аккаунт? <a className='redirect-link' href="/login">Войти</a></div> {/* Изменена ссылка */}
                </section>
            </div>

            <div className="image-container">
                <img src={carImage} alt="Car" className="car-image" />
            </div>
        </div>
    );
}

export default Register;