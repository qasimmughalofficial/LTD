import React from 'react'
import { Link } from 'react-router-dom';
import { PhoneFilled, MailFilled, ClockCircleFilled } from '@ant-design/icons';

function Navbar() {
    const navbarItem = ["home", "shop", "blogs", "contact"];
    return (
        <>
            <div className='header-cusd'>
                <div className='header-top-cusd light-purple'>
                    <Link to='#' className='info-head-anchor'>
                        <PhoneFilled />
                        03158252588
                    </Link>
                    <Link to='#' className='info-head-anchor' style={{marginLeft: '20px'}}>
                        <MailFilled />
                        example@mail.com
                    </Link>
                    <div className='services-open'>
                        <ClockCircleFilled />
                        Open 24/7
                    </div>
                </div>
                <div className='navbar-cusd dark-purple'>
                    <div className='logo-cusd'>
                        Navbar
                    </div>
                    <ul className='list-item'>
                        {navbarItem.map((item, index) => {
                            return <li key={index}><Link to={item}>{item}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar