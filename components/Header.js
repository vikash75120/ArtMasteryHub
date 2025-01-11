"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { SearchOutlined, UserOutlined, MenuFoldOutlined, CloseOutlined } from '@ant-design/icons';

import '../styles/header.scss';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false); 
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); 
  };  

  const closeSidebar = () => {
    setSidebarVisible(false); 
  };

  return (
    <div className='my-navbar'>
      <Link href="/">
        <img src="https://www.bodiesinmotion.photo/img/logowhite2.webp" alt="brand-logo" />
      </Link>
      <button className='nav-toggle' type='button' aria-label='menu' onClick={toggleSidebar}>
        <MenuFoldOutlined />
      </button>

      {!sidebarVisible ? (
        <>
        <div className="navbar-content">
          <ul>
            <li><Link href="/">BROWSE</Link></li>
            <li><Link href="/">SHOWCASE</Link></li>
            <li><Link href="/">PRICING</Link></li>
            <li><Link href="/">SUPPORT</Link></li>
            <li><Link href="/aboutus">ABOUT</Link></li>
            <li><Link href="/contactUs">CONTACT</Link></li>
            <li id='quickdraw'><Link href="/quick-draw/show">QUICKDRAW</Link></li>
          </ul>
        </div>
        <div className='nav-acc'>
        <div className={`search-container ${searchVisible ? 'active' : ''}`}>
        <input
          type='search'
          name='search'
          aria-label='Search'
          className='search-bar'
          placeholder='Search...'/>
      </div>
      <button className='search' onClick={handleSearchClick}>
        <SearchOutlined />
      </button>
      <div className='user'><Link href="/"><UserOutlined /></Link></div>
        </div>
      </>
      ) : (
        <div className="sidebar active">
          <button className="close-btn" onClick={closeSidebar}>
            <CloseOutlined />
          </button>
          <div className='sidebar-header'>
            <div className={`search-container ${searchVisible ? 'active' : ''}`}>
              <input
                type='search'
                name='search'
                aria-label='Search'
                className='search-bar'
                placeholder='Search...'
              />
            </div>
            <button className='search' onClick={handleSearchClick}>
              <SearchOutlined />
            </button>
            <div className='user'><Link href="/"><UserOutlined /></Link></div>
          </div>
          <ul>
            <li><Link href="/">BROWSE</Link></li>
            <li><Link href="/">SHOWCASE</Link></li>
            <li><Link href="/">PRICING</Link></li>
            <li><Link href="/">SUPPORT</Link></li>
            <li><Link href="/aboutus">ABOUT</Link></li>
            <li><Link href="/contactUs">CONTACT</Link></li>
            <li id='quickdraw'><Link href="/quick-draw/show">QUICKDRAW</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
