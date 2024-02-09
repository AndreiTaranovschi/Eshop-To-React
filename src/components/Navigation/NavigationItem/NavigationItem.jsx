import React from 'react';
import styles from './navigation-item.module.scss';
import {NavLink} from "react-router-dom";

function NavigationItem({ title, link }) {
	const setActive = ({isActive}) => `${isActive ? 'active-navigation-link' : ''} ${styles.navItem}`;
	return (
		<NavLink className={setActive} to={link} >{title}</NavLink>
	);
}

export default NavigationItem;
