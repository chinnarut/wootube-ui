import { AccountCircleOutlined, ArticleOutlined, ExploreOutlined, FlagOutlined, HelpOutlineOutlined, HistoryOutlined, Home, LibraryMusicOutlined, LiveTvOutlined, MovieOutlined, SettingsBrightnessOutlined, SettingsOutlined, SportsBasketballOutlined, SportsEsportsOutlined, SubscriptionsOutlined, VideoLibraryOutlined } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from "../img/logo.png";

const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bgLighter};
  height: calc(100vh);
  color: ${({theme}) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Image = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0;
  border-radius: 6px;
  &:hover {
    background-color: ${({theme}) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div`
  /* color: ${({theme}) => theme.text}; */
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({darkMode, setDarkMode}) => {
  const {currentUser} = useSelector(state => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
          <Logo>
            <Image src={logo} alt="logo" />
            WooTube
          </Logo>
        </Link>
        <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
          <Item>
            <Home />
            Home
          </Item>
        </Link>
        <Link to="/trends" style={{textDecoration: "none", color: "inherit"}}>
          <Item>
            <ExploreOutlined />
            Explore
          </Item>
        </Link>
        <Link to="/subscriptions" style={{textDecoration: "none", color: "inherit"}}>
          <Item>
            <SubscriptionsOutlined />
            Subscriptions
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined />
          History
        </Item>
        <Hr />
          {!currentUser && (
            <>
            <Login>
              Sign in Here!.
              <Link to="/signin" style={{textDecoration: "none"}}>
                <Button><AccountCircleOutlined /> SIGN IN</Button>
              </Link>
            </Login>
          <Hr />
            </>
          )}
        <Title>
          More of WooTube
        </Title>
        <Item>
          <LibraryMusicOutlined />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined />
          Gaming
        </Item>
        <Item>
          <MovieOutlined />
          Movies
        </Item>
        <Item>
          <ArticleOutlined />
          News
        </Item>
        <Item>
          <LiveTvOutlined />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlined />
          Settings
        </Item>
        <Item>
          <FlagOutlined />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlined />
          Help
        </Item>
        <Item onClick={() => setDarkMode(prev => !prev)}>
          <SettingsBrightnessOutlined />
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu
