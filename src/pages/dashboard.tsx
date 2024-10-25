import React from 'react';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles['dashboard-container']}>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
}