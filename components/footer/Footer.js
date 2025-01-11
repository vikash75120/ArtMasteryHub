"use client"

import React from 'react';
import './footer.scss';
import Link from 'next/link';
import { InstagramOutlined, FacebookOutlined, YoutubeOutlined, ArrowUpOutlined } from '@ant-design/icons';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: 'smooth' 
        });
      };

  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-content'>
            <ul className='unordered'>
                <li><Link href='/aboutus'>ABOUT</Link></li>
                <li><a>BROWSE</a></li>
                <li><a>SHOWCASE</a></li>
                <li><a>FAQ</a></li>
            </ul>
            <ul className='unordered'>
                <li><a>PLANS PRINCING</a></li>
                <li><a>LICENSES</a></li>
                <li><a>PRIVACY POLICY</a></li>
                <li><a>BLOG</a></li>
            </ul>
            <ul className='unordered'>
                <li><Link href='/contactUs'>CONTACT</Link></li>
                <li><a>TERMS CONDITIONS</a></li>
            </ul>
            </div>
            <div className='footer-icon'>
            <a className='icon' href='https://www.instagram.com/'><InstagramOutlined /></a>
            <a className='icon' href='https://www.facebook.com/'><FacebookOutlined /></a>
            <a className='icon' href='https://www.youtube.com/'><YoutubeOutlined /></a>
            </div>  
            <button className='scrool-to-top' onClick={scrollToTop}>
                <ArrowUpOutlined />
            </button>                
        </div>
    </div>
  )
}

export default Footer