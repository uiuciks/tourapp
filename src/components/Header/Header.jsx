import React from 'react';
import './Header.css';
import { links } from '../../Data';
import logo from '../../assets/TourApp.jpg'

const Header = () => {

    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <img src={logo} alt='logo' width={100} />
                <div className='flexCenter h-menu'>
                    {links.map((link) => {
                        const { id, url, text } = link
                        return (
                            <a key={id} href={url} className='nav-list'>{text}</a>
                        )
                    })}
                    <button type='button' className='button'>Log In</button>
                </div>

            </div>
        </section>
    )
}

export default Header