import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../assets/images/login.png';
import logo from '../assets/images/logo.png';

// Login Component
const Login = () => {
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css"
/>
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = {};
    if (formData.email.trim() === "") {
      formErrors.email = "Enter Email";
    }
    if (formData.password.trim() === "") {
      formErrors.password = "Enter Password";
    }
    setError(formErrors);
    console.log(formData);
  };

  const styles = {
    pageContainer: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundImage: `url(${login})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    container: {
      width: "300px",
      marginLeft: "930px",
      paddingTop: "1px",
      padding: "50px",
      border: "1px solid #F04721",
      borderRadius: "8px",
      backgroundColor: "white",
      position: 'relative',
      zIndex: 1
    },
    header: {
      textAlign: "center",
      marginBottom: "20px"
    },
    label: {
      display: "block",
      fontWeight: "bold",
      marginBottom: "8px"
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px"
    },
    error: {
      color: "red",
      fontSize: "0.875rem",
      margin: "0"
    },
    button: {
      width: "100%",
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#007bff",
      color: "white",
      fontSize: "1rem",
      cursor: "pointer"
    },
    link: {
      display: "block",
      textAlign: "center",
      marginTop: "10px",
      color: "#007bff",
      textDecoration: "none"
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.header}>Login</h1>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>UserName</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {error.email && <p style={styles.error}>{error.email}</p>}
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {error.password && <p style={styles.error}>{error.password}</p>}
          <button type="submit" style={styles.button}><Link to="/dashboard">Login</Link></button>
        </form>
        <a href="#" style={styles.link}>Forgot Password?</a>
        <Link to="/register" style={styles.link}>Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
}

// Header Component
const Header = () => {
  return (
    <>
      <style>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: #F04721;
            color: white;
          }

          .header-logo img {
            height: 59px;
          }

          .header-logo h1 {
            display: inline;
            margin-left: 10px;
            margin-top: 4px;
            font-size: 40px;
          }

          .header-nav ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .header-nav li {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 15px;
          }

          .header-nav a {
            color: white;
            text-decoration: none;
            text-align: center;
          }

          .header-account-icon {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .header-account-icon i {
            font-size: 34px;
          }

          @media (max-width: 768px) {
            .header {
              flex-direction: column;
              align-items: flex-start;
            }

            .header-logo {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .header-logo h1 {
              font-size: 30px;
              margin-top: 10px;
            }

            .header-nav ul {
              flex-direction: column;
              align-items: flex-start;
              width: 100%;
              margin-top: 10px;
            }

            .header-nav li {
              width: 100%;
              margin: 5px 0;
              text-align: left;
            }

            .header-nav a {
              font-size: 16px;
            }
          }

          @media (max-width: 480px) {
            .header-logo h1 {
              font-size: 24px;
            }

            .header-nav a {
              font-size: 14px;
            }

            .header-account-icon i {
              font-size: 24px;
            }
          }
        `}
      </style>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
          <h1>DREAMLAND</h1>
        </div>
        <nav className="header-nav">
          <ul>
            <li className="header-account-icon">
              <Link to="/profile">
                <i className="fa-regular fa-user"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

// Footer Component
const Footer = () => {
  const footerStyles = {
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

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        <p style={footerStyles.text}>© 2024 dreamland. All Rights Reserved.</p>
        <p style={footerStyles.text}>Follow us on:</p>
        <div style={footerStyles.socialIcons}>
          <a href="https://facebook.com" style={footerStyles.icon} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" style={footerStyles.icon} aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" style={footerStyles.icon} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

// Combined Component
const CombinedComponent = () => {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
};

export default CombinedComponent;
