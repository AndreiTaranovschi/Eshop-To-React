import React from 'react';
import Navigation from "../../components/Navigation/Navigation";
import styles from './main-page.module.scss';

const MainPage = () => {
  return (
    <div className={`${styles['main-page-class-name']} gridContainer`}>
      <Navigation />
    </div>
  )
}

export default MainPage;
