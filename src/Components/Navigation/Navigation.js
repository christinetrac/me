import React from 'react';
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import {
    Menu,
    MenuItem
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import styles from './Navigation.module.css';

export default function Navigation(props) {
    return (
        <div className={styles.container}>
            <Link to="/">
                <FaRegHeart className={styles.heart} />
            </Link>
            { props.isMobile ? (
                <div>
                    <Menu
                        menuButton={
                            <div className={styles.mobileLink} style={{paddingLeft: 10}}>More +</div>
                        }
                        direction='left'
                        transition
                    >
                        <MenuItem href="https://github.com/christinetrac">
                            <div className={styles.mobileLink}>Github</div>
                        </MenuItem>
                        <MenuItem href="https://www.linkedin.com/in/christine-trac/">
                            <div className={styles.mobileLink}>Linkedin</div>
                        </MenuItem>
                        <MenuItem href="https://devpost.com/christineetrac">
                            <div className={styles.mobileLink}>Devpost</div>
                        </MenuItem>
                    </Menu>
                </div>
            ) : (
                <div>
                    <a href="https://github.com/christinetrac" className={styles.link}>Github</a>
                    <a href="https://www.linkedin.com/in/christine-trac/" className={styles.link}>Linkedin</a>
                    <a href="https://devpost.com/christineetrac" className={styles.link}>Devpost</a>
                </div>
            )}
        </div>
    )
}
