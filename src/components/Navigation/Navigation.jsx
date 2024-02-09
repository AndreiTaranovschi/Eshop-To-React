import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from './navigation.module.scss'

function Navigation() {
	const categories = [
		{
			link: '/',
			title: 'Предложения',
		},
		{
			link: '/catalog/phones',
			title: 'Телефоны',
			childrens: [
				{
					link: '/catalog/all-phones',
					title: 'Все телефоны',
				},
				{
					link: '/catalog/the-newest-phones',
					title: 'Все телефоны',
				},
				{
					link: '/catalog/samsung-galaxy-s-24',
					title: 'Samsung Galaxy S24',
				},
				{
					link: '/catalog/iphone-15',
					title: 'iPhone 15',
				},
				{
					link: '/catalog/samsung-galaxy-s-23',
					title: 'Samsung Galaxy S23',
				},
				{
					link: '/catalog/smartphone-e-sim',
					title: 'Смартфон eSIM',
				},
				{
					link: '/catalog/restored-phones',
					title: 'Восстановленные телефоны',
				},
			]
		},
		{
			link: '/catalog/tvs',
			title: 'Телевизоры',
		},
		{
			link: '/catalog/tablets',
			title: 'Планшеты',
		},
		{
			link: '/catalog/laptops',
			title: 'Ноутбуки',
		},
		{
			link: '/catalog/modems',
			title: 'Модемы',
		},
		{
			link: '/catalog/gadgets',
			title: 'Гаджеты',
		},
		{
			link: '/catalog/accessories',
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
