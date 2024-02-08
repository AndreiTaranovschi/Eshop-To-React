import React from 'react';
import styles from './navigation-item.module.scss';

function NavigationItem({name}) {
	return (
		<div className={styles.navItem}>NavigationItem {name}</div>
	);
}

export default NavigationItem;
