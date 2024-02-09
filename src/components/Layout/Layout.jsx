import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Navigation />
        <Outlet />
      <Footer />
    </div>
  )
}
