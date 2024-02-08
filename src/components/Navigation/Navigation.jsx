import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from './navigation.module.scss'

function Navigation() {
	const arrayOfNavi = [
		{
			name: 'nav-1',
		},
		{
			name: 'nav-2',
		},
		{
			name: 'nav-3',
		},
		{
			name: 'nav-4',
		},
		{
			name: 'nav-5',
		},
	]
	console.log('arrayOfNavi', arrayOfNavi);
	return (
		<>
			<div className={styles.navWrapper}>{arrayOfNavi.map((navItem) => NavigationItem(navItem))}</div>
		</>
	);
}

export default Navigation;
