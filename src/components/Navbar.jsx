import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h2>Crypto Market</h2>
      </div>
      {/* <ul style={styles.navItems}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>Market Data</li>
        <li style={styles.navItem}>Contact</li>
      </ul> */}
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navItems: {
    display: 'flex',
    listStyle: 'none',
  },
  navItem: {
    marginLeft: '20px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Navbar;
