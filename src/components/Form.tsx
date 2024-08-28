import React from 'react';
import styles from '../styles/Login.module.css';
// import styles from '../styles/Form.module.css';

export default function Form({label, viewBox, title, path, type, id, placeholder}: FormProps) {
    return (
        <div className={styles.inputGroup}>
            <label htmlFor={label}>{title}</label>
            <div className={styles.inputWithIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} className={styles.icon}><path d={path}/></svg>
              <input type={type} id={id} placeholder={placeholder} />
            </div>
          </div>
    )
}