import React from 'react';
import styled from 'styled-components';
import { BsGoogle, BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs';

const Index = (props) => {
  return (
    <Container>
      <Card>
        <div className='logo'>devchallenges</div>
        {props.content}
        <div className='oauth-group'>
          <OauthIcon>
            <BsGoogle />
          </OauthIcon>
          <OauthIcon>
            <BsFacebook />
          </OauthIcon>
          <OauthIcon>
            <BsTwitter />
          </OauthIcon>
          <OauthIcon>
            <BsGithub />
          </OauthIcon>
        </div>
        {props.others}
      </Card>
      <Footer>
        <div className='username'>
          created by <span>abfatahi</span>{' '}
        </div>
        <div className='org'>devChallenges.io</div>
      </Footer>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 475px;
  border: 1px solid #bdbdbd;
  padding: 2rem;
  border-radius: 24px;
  margin-bottom: 1rem;

  .logo {
    color: #282051;
    margin-bottom: 1.5rem;
  }

  .join-text {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.035em;
    color: #333333;
    margin-bottom: 1rem;
    width: 70%;
  }

  .other-text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.035em;
    color: #333333;
    width: 80%;
    margin-bottom: 1.5rem;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    margin: 1.5rem 0;
  }

  .oauth-text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.035em;
    color: #828282;
    margin: 0.5rem 0 1.5rem;
    text-align: center;
  }

  .oauth-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .link-text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.035em;
    color: #828282;
    margin: 1.5rem 0 0;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 475px;
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

const OauthIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #828282;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  color: grey;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
