/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BsEye,
  BsEyeSlashFill,
  BsEnvelopeFill,
  BsLockFill,
  BsPhoneFill,
  BsPencilFill,
} from 'react-icons/bs';

const Container = styled.div`
  width: 100%;
  .group {
    display: flex;
    align-items: center;
    position: relative;
    height: 2.8rem;

    .password {
      position: absolute;
      right: 0;
      //   transform: translateY(100%);
      margin-right: 1em;
      width: 1rem;
      font-size: 1.7em;
      cursor: pointer;
      color: grey;
    }

    .icon {
      position: absolute;
      left: 0;
      //   transform: translateY(100%);
      margin-left: 0.4em;
      width: 2rem;
      font-size: 1.3em;
      color: grey;
    }

    input {
      background: transparent;
      border: 1px solid #bdbdbd;
      padding: 0 3.5em 0 3.5em;
      height: 100%;
      border-radius: 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 1em;
      letter-spacing: 0.018em;
      color: #828282;
      width: 100%;

      :focus {
        outline: none;
        border: 1px solid #bdbdbd;
      }

      @media screen and (max-width: 450px) {
        font-size: 0.8em;
      }
    }
  }
`;
const Index = ({ inputType, placeholder, onTextChange, fieldname }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Container>
      <div className='group'>
        {inputType === 'email' ? (
          <BsEnvelopeFill className='icon' />
        ) : inputType === 'password' ? (
          <BsLockFill className='icon' />
        ) : inputType === 'number' ? (
          <BsPhoneFill className='icon' />
        ) : (
          <BsPencilFill className='icon' />
        )}

        {inputType === 'password' ? (
          togglePassword ? (
            <BsEye
              className='password'
              onClick={() => setTogglePassword(false)}
            />
          ) : (
            <BsEyeSlashFill
              className='password'
              onClick={() => setTogglePassword(true)}
            />
          )
        ) : (
          ''
        )}
        {inputType === 'password' ? (
          <input
            name={fieldname}
            type={!togglePassword ? 'password' : 'text'}
            placeholder={placeholder}
            onChange={onTextChange}
          />
        ) : (
          <input
            name={fieldname}
            type={inputType}
            placeholder={placeholder}
            onChange={onTextChange}
          />
        )}
      </div>
    </Container>
  );
};

export default Index;
