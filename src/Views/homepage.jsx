import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
function Homepage({ location: { search } }) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [status, setStatus] = useState('');
  const history = useHistory();

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const myObj = {
    email: userEmail,
    password: userPassword,
  };
  const handleSubmit = async () => {
    const getDatas = async () =>
      await fetch('http://localhost:3001/api/loggin', {
        method: 'POST',
        body: JSON.stringify(myObj),
      })
        .then((r) => r.json())
        .then((r) => setIsLogged(r));

    getDatas();
    setStatus('INCORRECT EMAIL OR PASSWORD');
    // history.push('/app');
  };

  useEffect(() => {
    if (isLogged.message === 'true') {
      history.push('/app');
    } else {
      history.push('/');
    }
  }, [isLogged]);

  return (
    <div className="flex  w-screen h-screen align-middle items-center">
      <div className="w-full h-full flex flex-col items-center justify-center align-middle">
        <div className="text-red-600 text-xl">{status}</div>
        <input onChange={handleEmail} className="border rounded-lg px-3 border-black border-opacity-40 m-4" type="text" placeholder="Email" />
        <input
          onChange={handlePassword}
          className="border  rounded-lg px-3 border-black border-opacity-40 m-4"
          type="password"
          placeholder="Password"
        />
        <div>
          <button onClick={handleSubmit} className="border-2 mx-4 border-black border-opacity-40 py-2 px-4 rounded-lg">
            LOGGIN
          </button>
          <button onClick={handleSubmit} className="border-2 mx-4 border-black border-opacity-40 py-2 px-4 rounded-lg">
            SIGN IN
          </button>
        </div>
        <a href="/forgotten" className="underline my-4">
          {' '}
          Mot de Passe Oublié
        </a>
      </div>
    </div>
  );
}

Homepage.propTypes = {
  location: PropTypes.any.isRequired,
};

export default Homepage;
