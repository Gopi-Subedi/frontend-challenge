import React from 'react';
import './LoginPage.css';

function LoginPage({ setIsAuth }) {
  return (
    <div className="lp-container">
      <span className="lp-title">
        Please press login button to login. This is a simple prototype thus I
        have used dummy data for login behind the scene.
      </span>
      <button
        onClick={() => {
          setIsAuth(true);
        }}
        className="lp-loginbtn"
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
