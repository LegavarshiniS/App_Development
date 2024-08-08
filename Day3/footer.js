import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 dreamland. All Rights Reserved.</p>
        <p style={styles.text}>Follow us on:</p>
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" style={styles.icon} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" style={styles.icon} aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" style={styles.icon} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#F04721',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  text: {
    margin: '5px 0',
  },
  socialIcons: {
    marginTop: '10px',
  },
  icon: {
    color: '#fff',
    fontSize: '20px',
    margin: '0 10px',
    textDecoration: 'none',
  }
};

export default Footer;
