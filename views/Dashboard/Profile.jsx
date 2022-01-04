import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { DashboardLayout } from '../../layout';
import { Button } from '../../reusables';
import avatar from '../../assets/images/avatar.jpg';

const Index = () => {
  const history = useHistory();
  return (
    <DashboardLayout
      content={
        <Container>
          <h3>Personal Info</h3>
          <h5>Basic info, like your name and photo</h5>
          <Card>
            <div className='header'>
              <div className='group'>
                <h3>Profile</h3>
                <p>Some info may be visible to other people</p>
              </div>
              <Button
                outline
                text='Edit'
                onClick={() => history.push('/edit')}
              />
            </div>
            <hr />
            <div className='detail-group'>
              <div className='label'>PHOTO</div>
              <div className='detail'>
                <img src={avatar} alt='Avatar' />
              </div>
            </div>
            <hr />
            <div className='detail-group'>
              <div className='label'>NAME</div>
              <div className='detail'>Ishaq Abdulfatahi</div>
            </div>
            <hr />
            <div className='detail-group'>
              <div className='label'>BIO</div>
              <div className='detail'>
                I am a software developer and a big fan of devchallenges...
              </div>
            </div>
            <hr />
            <div className='detail-group'>
              <div className='label'>PHONE</div>
              <div className='detail'>908249274292</div>
            </div>
            <hr />
            <div className='detail-group'>
              <div className='label'>EMAIL</div>
              <div className='detail'>abafatahi.iaf@gmail.com</div>
            </div>
            <hr />
            <div className='detail-group'>
              <div className='label'>PASSWORD</div>
              <div className='detail'>**********</div>
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

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    letter-spacing: -0.035em;
    color: #000000;
    margin: 1.5rem 0 1rem !important;
  }

  h5 {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.035em;
    color: #000000;
    margin: 0 0 1rem !important;
  }
`;

const Card = styled.div`
  width: 845px;
  border: 1px solid #bdbdbd;
  padding: 1rem 0 1rem;
  border-radius: 24px;
  margin-bottom: 1rem;

  hr {
    border: 0;
    background: #e5e5e5;
    height: 1px;
  }

  .detail-group {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;

    img {
      width: 72px;
      height: 72px;
      border-radius: 8px;
    }

    .label {
      flex: 1;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: -0.035em;
      color: #bdbdbd;
    }

    .detail {
      flex: 2;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -0.035em;
      color: #333333;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0 2rem;

    h3 {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: -0.035em;
      color: #000000;
      margin: 0 !important;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: -0.035em;
      color: #828282;
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
