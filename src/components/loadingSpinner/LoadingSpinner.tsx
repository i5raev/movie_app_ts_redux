import React from 'react';
import styles from './style.module.scss';

const LoadingSpinner = () => {
    return (
        <div className={styles.lds_roller}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default LoadingSpinner;
