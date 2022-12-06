import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <p><h4>Mealsdb</h4></p>
            </div>
            <div className="menu">
                <a href='/order'>Order</a>
                <a href='/address'>address</a>
                <a href='/contact'>contact</a>
                <a href='/login'>login</a>
            </div>
        </nav>
    );
};

export default Header;