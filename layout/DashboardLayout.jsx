import React from 'react';
import { Dropdown, Menu } from 'antd';
import styled from 'styled-components';
import { BsChevronDown, BsPersonFill, BsPeopleFill } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import avatar from '../assets/images/avatar.jpg';

const Index = (props) => {
  const style = {
    color: '#4F4F4F',
  };
  const menu = (
    <Menu>
      <Menu.Item style={style}>
        <BsPersonFill style={{ marginRight: '0.4rem' }} />
        My Profile
      </Menu.Item>
      <Menu.Item style={style}>
        <BsPeopleFill style={{ marginRight: '0.4rem' }} />
        Group Chat
      </Menu.Item>
      <hr style={{ border: 0, background: '#e5e5e5', height: '1px' }} />
      <Menu.Item style={{ color: '#EB5757' }}>
        <FaSignOutAlt style={{ marginRight: '0.4rem' }} />
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Container>
      <Header>
        <div className='logo'>devchallenges</div>
        <div className='nav-group'>
          <img src={avatar} alt='Avatar' />
          <div className='name'>Ishaq Abdulfatahi</div>
          <Dropdown overlay={menu}>
            <BsChevronDown style={{ cursor: 'pointer' }} />
          </Dropdown>
        </div>
      </Header>
      {props.content}
    </Container>
  );
};

export default Index;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1rem 5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  max-height: 48px;
  justify-content: space-between;

  .logo {
  }
  .nav-group {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 32px;
      height: 36px;
      border-radius: 8px;
    }

    .name {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.035em;
      color: #333333;
    }
  }
`;
