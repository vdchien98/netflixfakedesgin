import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    //Viết hàm bắt sự kiên thanh navbar ở đầu và khi di chuyển
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled);

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <Link to="/" className="link">
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://cdn.bongdaplus.vn/Assets/Media/2016/01/07/60/messi.jpg" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
