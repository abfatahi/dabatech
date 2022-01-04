import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../layout';
import { Button, Inputfield } from '../../reusables';

const Index = () => {
  return (
    <AuthLayout
      content={
        <>
        <div className="join-text">Login</div>
          <div className='input-group'>
            <Inputfield inputType='email' placeholder='Email' />
            <Inputfield inputType='password' placeholder='Password' />
          </div>
          <div className='btn'>
            <Button primary full text='Login' />
          </div>
          <div className='oauth-text'>
            or continue with these social profile
          </div>
        </>
      }
      others={
        <div className='link-text'>
          Don't have an account yet? <Link to='/register'>Register</Link>
        </div>
      }
    />
  );
};

export default Index;
