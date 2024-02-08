import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from './navigation.module.scss'

function Navigation() {
	const categories = [
		{
			link: 'offers',
			title: 'Предложения',
		},
		{
			link: 'phones',
			title: 'Телефоны',
			childrens: [
				{
					link: 'all-phones',
					title: 'Все телефоны',
				},
				{
					link: 'the-newest-phones',
					title: 'Все телефоны',
				},
				{
					link: 'samsung-galaxy-s-24',
					title: 'Samsung Galaxy S24',
				},
				{
					link: 'iphone-15',
					title: 'iPhone 15',
				},
				{
					link: 'samsung-galaxy-s-23',
					title: 'Samsung Galaxy S23',
				},
				{
					link: 'smartphone-e-sim',
					title: 'Смартфон eSIM',
				},
				{
					link: 'restored-phones',
					title: 'Восстановленные телефоны',
				},
			]
		},
		{
			link: 'tvs',
			title: 'Телевизоры',
		},
		{
			link: 'tablets',
			title: 'Планшеты',
		},
		{
			link: 'laptops',
			title: 'Ноутбуки',
		},
		{
			link: 'modems',
			title: 'Модемы',
		},
		{
			link: 'gadgets',
			title: 'Гаджеты',
		},
		{
			link: 'accessories',
			title: 'Аксессуары',
		},
	]
	return (
		<>
			<div className={styles.navWrapper}>
				{categories.map((category) => (
					<NavigationItem key={category.link} title={category.title} link={category.link} />
				))}
			</div>
		</>
	);
}

export default Navigation;
