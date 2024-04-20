import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Registerform.css';

const Registerform = () => {
  const navigate = useNavigate();
  const backendIP = 'http://192.168.68.184:7171/user/register'; // Update with the correct backend IP
  const [registerData, setRegisterData] = useState({ email: '', username: '' }); // Changed Username to username
  const [error, setError] = useState('');

  const changeHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    if (!registerData.email || !registerData.username) { // Check if email and username are filled
      setError('Please fill all fields');
      return;
    }
    try {
      const response = await fetch(backendIP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: registerData.username, // Changed Username to username
          email: registerData.email,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        sessionStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred during registration.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="container-register">
        <div className="registerForm">
          <h1>Register Form</h1>
          <label>
            <FontAwesomeIcon icon={faLock} />
            Username:
            <input type="text" name="username" value={registerData.username} onChange={changeHandler} />
          </label>
          <label>
            <FontAwesomeIcon icon={faEnvelope} />
            Email:
            <input type="text" name="email" value={registerData.email} onChange={changeHandler} />
          </label>
          <button className='btn' onClick={handleRegisterForm}>Register</button>
          <p className='error'> {error}</p>
        </div>
      </div>
    </div>
  );
};

export default Registerform;
