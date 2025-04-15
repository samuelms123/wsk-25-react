// imports

import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = () => {
  const [formToggle, setFormToggle] = useState(true);
  const handleClick = () => {
    setFormToggle(!formToggle);
  };
  return (
    <>
      {formToggle ? <LoginForm /> : <RegisterForm />}
      <button onClick={handleClick}>
        {formToggle ? 'Register' : 'Log in'}
      </button>
    </>
  );
};

export default Login;
