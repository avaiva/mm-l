import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import ButtonForm from '../components/ButtonForm';
import PageLanding from '../components/PageLanding';
import './LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const handleEmail = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(enteredEmail)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  };
  const handlePassword = (e) => setPassword(e.target.value);
  const apiURL = 'http://localhost:5005/auth/login';
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUser = {
      email,
      password,
    };

    try {
      const response = await axios.post(apiURL, loginUser);
      const receivedToken = response.data.token;
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken);
      setEmail('');
      setPassword('');
      navigate('/today');
      console.log(response.data.token);
    } catch (err) {
      setError(err.response.data);
    }
  };
  console.log(email, password);
  return (
    <>
      <PageLanding />
      <div className="login-h1">
        <h1>Log into your journey</h1>
      </div>

      <div className="login-form">
        <Form onSubmit={handleSubmit}>
          <InputField id="email-login" type="email" value={email} label="Email" onChange={handleEmail} />
          <InputField id="password-login" type="password" value={password} label="Password" onChange={handlePassword} />
          <ButtonForm label="Login" classCss={'btn-grey custom-button'} onClick={handleSubmit} />
        </Form>
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
      </div>
      <div className="signup-link">
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </>
  );
}
