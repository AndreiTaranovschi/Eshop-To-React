import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
