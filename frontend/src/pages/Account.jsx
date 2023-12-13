import PageSub from '../components/PageSub';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import ButtonForm from '../components/ButtonForm';
import { AuthContext } from '../context/auth.context';
import './Account.css';
import ButtonIcon from '../components/ButtonIcon';
import BlurColorHighlight from '../components/BlurColorHighlight';

export default function AccountPage() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [error, setError] = useState('');

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    const enteredEmail = e.target.value;
    setError('');
    setEmail(enteredEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(enteredEmail)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError('');
  };
  const handleCheckPassword = (e) => {
    setCheckPassword(e.target.value);
    setError('');
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setError('');
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const userInfo = await axios.get('http://localhost:5005/api/users', { headers: { Authorization: ` ${token}` } });
        console.log(userInfo.data[0].firstName);
        setFirstName(userInfo.data[0].firstName);
        setEmail(userInfo.data[0].email);
      } catch (err) {
        console.error(err);
      }
    };
    getInfo();
  }, []);

  const handleDeleteUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const apiEndPoint = 'http://localhost:5005/api/users';
      const response = await axios.delete(apiEndPoint, {
        headers: { Authorization: ` ${token}` },
      });

      if (response.status === 200) {
        console.log('User deleted successfully');
        logOutUser();
        navigate('/');
      } else {
        setError('Failed to delete user');
      }
    } catch (error) {
      setError('Error deleting user');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = {
      firstName,
      email,
      password,
      checkPassword,
    };
    const apiEndpoint = 'http://localhost:5005/api/users';
    try {
      const token = localStorage.getItem('token');

      if ((password && !checkPassword) || (checkPassword && !password)) {
        setError('Please confirm your new password by entering it into both fields.');
        return;
      }
      if (password && password !== checkPassword) {
        setError('The passwords are not matching.');
        return;
      }

      const response = await axios.put(apiEndpoint, userInfo, {
        headers: { authorization: `${token}` },
      });

      console.log(response.data);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div>
        <BlurColorHighlight position={{ top: '2%', left: '1%' }} size="200px" filter="blur(50px)" zIndex="-1" />
      </div>

      <div
        style={{
          position: 'fixed',
          top: '6em',
          left: 'calc(3.5em - 20px)',
          // transform: "translate(-50%,-50%)",
        }}>
        <h3>My account</h3>
      </div>
      <div className="btn-logout-user">
        <ButtonIcon onClick={logOutUser} imgSrc="../../public/logout.svg" navigate="/" />
      </div>
      <div className="account-form">
        <Form>
          <InputField id="name-account" type="text" defaultValue={firstName} label="First Name" onChange={handleFirstName} />
          <InputField id="email-account" type="email" label="Email" onChange={handleEmail} defaultValue={email} />
          <InputField id="password-account" type="password" label="Password" onChange={handlePassword} defaultValue={'********'} />
          <InputField
            id="checkPassword-account"
            type="password"
            label="Please repeate your password"
            onChange={handleCheckPassword}
            defaultValue={''}
          />

          <ButtonForm label="Save" classCss={'btn-grey custom-button'} onClick={handleSubmit} />
        </Form>
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
      </div>
      <div className="btn-delete-user">
        <ButtonIcon onClick={handleDeleteUser} imgSrc="../../public/delete.svg" label="Delete account" navigate="/" />
      </div>
      <PageSub />
    </>
  );
}
