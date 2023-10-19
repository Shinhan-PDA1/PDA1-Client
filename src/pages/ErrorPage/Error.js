import React from 'react';
import styles from './Error.module.css'

const ErrorPage = () => {
    return (
        <div className= {styles.errorPage}>
            <div className={styles.errorContent}>
                <h1>404 - Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
};

export default ErrorPage;
