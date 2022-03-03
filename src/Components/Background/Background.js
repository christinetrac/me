import React from 'react';
import styles from './Background.module.css';

export default function Background({children}) {
    return (
        <div className={styles.gradient}>
            {children}
        </div>
    )
}
