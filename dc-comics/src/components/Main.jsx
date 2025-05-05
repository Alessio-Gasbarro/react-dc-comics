import React from 'react';

const Main = () => {
    return (
        <main>
            <div className='container1'>
                <h1>&#x2192;Content goes here&#x2190;</h1>
            </div>
            <div className='container2'>
                <ul>
                    <li>
                        <img className='logo' src="../public/img/buy-comics-digital-comics.png" alt="" />
                        <a href='#'>DIGITAL COMICS</a>
                    </li>
                    <li>
                        <img className='logo' src="../public/img/buy-comics-merchandise.png" alt="" />
                        <a href='#'>DC MERCHANDISE</a>
                    </li>
                    <li>
                        <img className='logo' src="../public/img/buy-comics-subscriptions.png" alt="" />
                        <a href='#'>SUBSCRIPTION</a>
                    </li>
                    <li>
                        <img className='logo' src="../public/img/buy-comics-shop-locator.png" alt="" />
                        <a href='#'>COMIC SHOP LOCATOR</a>
                    </li>
                    <li>
                        <img className='logo' src="../public/img/buy-dc-power-visa.svg" alt="" />
                        <a href='#'>COMIC SHOP LOCATOR</a>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Main;
