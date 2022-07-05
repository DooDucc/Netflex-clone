/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Notifications, ArrowDropDown, AssignmentInd, Person, HelpOutline, Logout } from '@mui/icons-material';

import styles from './Navbar.module.scss';
import Avartar from '../../assets/images/avatar.jpg';

const cx = classNames.bind(styles);

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY === 0 ? false : true);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('navbar', isScroll ? { bgc: true } : null)}>
            <div className={cx('nav-left')}>
                <a href="/">
                    <img
                        className={cx('logo')}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        aly="logo"
                    />
                </a>
            </div>
            <div className={cx('nav-right')}>
                <Tippy content="No new notifications">
                    <Notifications className={cx('bell-icon')} />
                </Tippy>

                <div className={cx('nav-user')}>
                    <img src={Avartar} alt="avartar" />
                </div>
                <HeadlessTippy
                    delay={[0, 500]}
                    interactive
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('setting')} tabIndex="-1" {...attrs}>
                            <a href="/" className={cx('bb')}>
                                <AssignmentInd />
                                <span>Profile</span>
                            </a>
                            <a href="/">
                                <Person />
                                <span>Account</span>
                            </a>
                            <a href="/" className={cx('bb')}>
                                <HelpOutline />
                                <span>FAQ?</span>
                            </a>
                            <a href="/">
                                <Logout />
                                <span>Log out</span>
                            </a>
                        </div>
                    )}
                >
                    <ArrowDropDown className={cx('arrow-icon')} />
                </HeadlessTippy>
            </div>
        </div>
    );
};

export default Navbar;
