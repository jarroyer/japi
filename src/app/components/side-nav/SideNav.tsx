import React from "react";
import styles from './styles.module.css'

export default function SideNav() {
  return(
    <nav className={styles['nav-bar']}>
      <input type="checkbox" id={styles['menu-toggle']} className={styles['menu-toggle']} />
      <label htmlFor={styles['menu-toggle']} className={styles['hamburger-btn']}>
        <span className={styles['bar']}></span>
        <span className={styles['bar']}></span>
        <span className={styles['bar']}></span>
      </label>
      <div className={styles['side-nav']}>
        <ul className={styles['nav-links']}>
          <li><p>Home</p></li>
        </ul>
      </div>
    </nav>
  );
}