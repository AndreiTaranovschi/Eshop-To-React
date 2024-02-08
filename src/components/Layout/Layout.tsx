import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss'

interface Props {
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      Header
      <div className="layout-wrapper">
        <Outlet />
      </div>
      Footer
    </div>
  )
}