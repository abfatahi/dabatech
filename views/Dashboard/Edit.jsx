import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { DashboardLayout } from '../../layout';
import { Inputfield, Button } from '../../reusables';
import avatar from '../../assets/images/avatar.jpg';
import { BsChevronLeft } from 'react-icons/bs';

const Index = () => {
  const history = useHistory();
  return (
    <DashboardLayout
      content={
        <Container>
          <BackArrow onClick={() => history.push('/profile')}>
            <BsChevronLeft />
            <span>Back</span>
          </BackArrow>
          <Card>
            <div className='header'>
              <div className='group'>
                <h3>Change Info</h3>
                <p>Changes will be reflected to every services</p>
              </div>
            </div>
            <div className='image-group'>
              <img src={avatar} alt='Avatar' />
              <div className='label'>CHANGE PHOTO</div>
            </div>
            <div className='input-group'>
              <h5>Name</h5>
              <Inputfield placeholder='Enter your name' />
            </div>
            <div className='input-group'>
              <h5>Bio</h5>
              <Inputfield placeholder='Enter your bio' />
            </div>
            <div className='input-group'>
              <h5>Phone</h5>
              <Inputfield placeholder='Enter your phone' />
            </div>
            <div className='input-group'>
              <h5>Email</h5>
              <Inputfield inputType='email' placeholder='Enter your email' />
            </div>
            <div className='input-group'>
              <h5>Password</h5>
              <Inputfield
                inputType='password'
                placeholder='Enter your password'
              />
            </div>
            <div className='input-group'>
              <Button primary text='Save' />
            </div>
          </Card>
          <Footer>
            <div className='username'>
              created by <span>abfatahi</span>{' '}
            </div>
            <div className='org'>devChallenges.io</div>
          </Footer>
        </Container>
      }
    />
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
  height: calc(100vh - 80px);

  .go-back-arrow {
    width: 845px;
    background: green;
    margin-bottom: 1.2rem;
  }
`;

const BackArrow = styled.div`
  display: flex;
  width: 845px;
  margin-bottom: 1.2rem;
  align-items: center;
  cursor: pointer;
  gap: 1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.035em;
  color: #2d9cdb;

  :hover {
    opacity: 0.7;
  }
`;

const Card = styled.div`
  width: 845px;
  border: 1px solid #bdbdbd;
  padding: 1.5rem 2rem;
  border-radius: 24px;
  margin-bottom: 1rem;

  hr {
    border: 0.1px solid #e5e5e5;
  }

  .image-group {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1.5rem 0;

    img {
      width: 72px;
      height: 72px;
      border-radius: 8px;
    }

    .label {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: -0.035em;
      color: #828282;
    }
  }

  .input-group {
    display: flex;
    width: 60%;
    flex-direction: column;
    gap: 0.3rem;
    margin-bottom: 1.2rem;

    h5 {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: -0.035em;
      color: #4f4f4f;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  width: 845px;
  justify-content: space-between;

  .username {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.035em;
    color: #828282;

    span {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.035em;
      color: #333333;
      text-decoration: underline;
    }
  }

  .org {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.035em;
    color: #828282;
  }
`;
