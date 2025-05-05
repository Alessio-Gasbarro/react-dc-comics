import React from 'react'

const Header = () => {
    return (
        <header className='container'>
            <figure>
                <img src="../public/img/dc-logo.png" alt="" />
            </figure>

            <nav className="navbar">
                <ul className='nav-list'>
                    <li><a href='#'>CHARACTERS</a></li>
                    <li className='blue'><a href='#'>COMICS</a></li>
                    <li><a href='#'>MOVIES</a></li>
                    <li><a href='#'>TV</a></li>
                    <li><a href='#'>GAMES</a></li>
                    <li><a href='#'>COLLECTIBLES</a></li>
                    <li><a href='#'>VIDEOS</a></li>
                    <li><a href='#'>FANS</a></li>
                    <li><a href='#'>NEWS</a></li>
                    <li><a href='#'>SHOP</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
