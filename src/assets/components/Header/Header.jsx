import React from 'react';
import logo from '/logouiu.png';
import './Header.css';

const Header = () => {
    return (
        <div className='row header-container '>
            <div className='col-md-4 '>
                <img src={logo} alt="" />
            </div>
            <div className='text-area col-md-8'>
                <h1>UIU Club Froum Fest 2023</h1>
                <h3>Finally the most awaited day has come. </h3>
                <h4>Total cost: &#2547;10000000</h4>
            </div>
        </div>
    );
};

export default Header;