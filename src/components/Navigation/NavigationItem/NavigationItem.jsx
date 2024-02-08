import React from 'react';
import styles from './navigation-item.module.scss';
import {NavLink} from "react-router-dom";

function NavigationItem({ title, link }) {
	return (
		<NavLink className={styles.navItem} to={link} >{title}</NavLink>
	);
}

export default NavigationItem;
