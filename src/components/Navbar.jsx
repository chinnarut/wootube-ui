import { AccountCircleOutlined, SearchOutlined, VideoCallOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { current } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
  color: ${({theme}) => theme.text};
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  const {currentUser} = useSelector(state => state.user);
  
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlined />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlined style={{cursor: "pointer"}} />
            <Avatar style={{cursor: "pointer"}} />
            {currentUser.name}
          </User>
        ) : (
          <Link to="/signin" style={{textDecoration: "none"}}>
            <Button>
              <AccountCircleOutlined /> 
              SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  )
}

export default Navbar;
