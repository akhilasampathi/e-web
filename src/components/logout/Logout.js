import React, { useState } from 'react';
import './Logout.css';
import { useNavigate } from 'react-router-dom';
import SERVER_URL from '../../config';

const Logout = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/user/logout`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'content-type': 'application/json'
        }
      });
      if (response.ok) {
        navigate('/home');
      } else {
        setError('Something went wrong');
      }
    } catch (error) {
      // Error occurred while verifying OTP
      setError('Please try again.');
    }
  };

  return (
    <div className='logout-page'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button onClick={handleLogout}>Logout</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Logout;
