import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../../layout';
import { Button, Inputfield } from '../../reusables';

const Index = () => {
  return (
    <AuthLayout
      content={
        <>
          <div className='join-text'>
            Join thousands of learners from around the world
          </div>
          <div className='other-text'>
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </div>
          <div className='input-group'>
            <Inputfield inputType='email' placeholder='Email' />
            <Inputfield inputType='password' placeholder='Password' />
          </div>
          <div className='btn'>
            <Button primary full text='Start coding now' />
          </div>
          <div className='oauth-text'>
            or continue with these social profile
          </div>
        </>
      }
      others={
        <div className='link-text'>
          Already a member? <Link to='/login'>Login</Link>
        </div>
      }
    />
  );
};

export default Index;
