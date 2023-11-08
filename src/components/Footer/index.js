import React from 'react';

const Footer = () => {
    
    const year = new Date().getFullYear();
      
    return (
        <footer className='footer'>{`Copyright © ${year} | Created with love by Danielle Arnett `}</footer>
    )    
}

export default Footer;