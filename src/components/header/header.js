import React, { useState, useEffect } from "react";
import "./header.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ShoppingCart, Menu, RestaurantMenuOutlined, Info } from '@mui/icons-material';
import CSSTransition from 'react-transition-group/CSSTransition'
import Badge from '@mui/material/Badge'

export default function Map(props) {

  const {value, setValue, cartCount=0, title} = props;
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };


  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <header className="Header" style={{zIndex: 999}}>
      <CSSTransition
        in={!isSmallScreen || isNavVisible} timeout={350} classNames="NavAnimation" unmountOnExit
      >
        <Tabs className="Tabs" orientation={isSmallScreen ? "vertical" : "horizontal"} value={value} onChange={handleChange} aria-label="icon tabs example">
          <Tab label={<Badge color={"primary"} badgeContent={cartCount}/>} icon={<ShoppingCart />} aria-label="person" />
          <Tab icon={<Info />} aria-label="favorite" />
          <Tab icon={<RestaurantMenuOutlined />} aria-label="phone" />
        </Tabs>
      </CSSTransition>
      <text style={{color:'#333', paddingLeft: 12,paddingRight: 12, fontSize: 20}}>{title}</text>
      <button onClick={toggleNav} className="Burger">
        <Menu />
      </button>
    </header>
  );
}
