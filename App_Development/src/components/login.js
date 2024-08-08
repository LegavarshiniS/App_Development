// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import car from '../assets/images/car.jpg';
// import logo from '../assets/images/logo.png';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
  
//   const [error, setError] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//     setError({ ...error, [name]: "" });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formErrors = {};
//     let hasErrors = false;

//     if (formData.email.trim() === "") {
//       formErrors.email = "Enter Email";
//       hasErrors = true;
//     }
//     if (formData.password.trim() === "") {
//       formErrors.password = "Enter Password";
//       hasErrors = true;
//     }

//     setError(formErrors);

//     if (!hasErrors) {
//       if (formData.email === "user@gmail.com" && formData.password === "123") {
//         navigate('/toy');
//       } else if (formData.email === "lega@gmail.com" && formData.password === "5551") {
//         navigate('/adminboard');
//       } else {
//         setError({ email: "Invalid email or password" });
//       }
//     }
//   };

//   const styles = {
//     pageContainer: {
//       position: 'relative',
//       width: '100%',
//       height: '100vh',
//       overflow: 'hidden',
//       display: "flex",
//       justifyContent: "flex-start",
//       alignItems: "center",
//       backgroundImage: `url(${car})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center"
//     },
//     container: {
//       width: "350px",
//       marginLeft: "930px",
//       paddingTop: "5px",
//       padding: "50px",
//       border: "1px solid #F04721",
//       borderRadius: "8px",
//       backgroundColor: "white",
//       position: 'relative',
//       zIndex: 1,
//       boxShadow: "-2px 0 10px red",
//     },
//     header: {
//       textAlign: "center",
//       marginBottom: "20px"
//     },
//     label: {
//       display: "block",
//       fontWeight: "bold",
//       marginBottom: "8px"
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       marginBottom: "10px",
//       border: "1px solid #ddd",
//       borderRadius: "4px"
//     },
//     error: {
//       color: "red",
//       fontSize: "0.875rem",
//       margin: "0"
//     },
//     button: {
//       width: "100%",
//       padding: "10px",
//       border: "1px solid white",
//       borderRadius: "4px",
//       backgroundColor: "#F04721",
//       color: "white",
//       fontSize: "1rem",
//       cursor: "pointer",
//       textDecoration: "none",
//       textAlign: "center"
//     },
//     link: {
//       color: "white",
//       textDecoration: "none"
//     },
//     linkSecondary: {
//       display: "block",
//       textAlign: "center",
//       marginTop: "10px",
//       color: "#007bff",
//       textDecoration: "none"
//     }
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.container}>
//         <h1 style={styles.header}>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <label style={styles.label}>Email</label>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             style={styles.input}
//           />
//           {error.email && <p style={styles.error}>{error.email}</p>}
//           <label style={styles.label}>Password</label>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             style={styles.input}
//           />
//           {error.password && <p style={styles.error}>{error.password}</p>}
//           <button type="submit" style={styles.button}>Login</button>
//         </form>
//         <a href="#" style={styles.linkSecondary}>Forgot Password?</a>
//         <Link to="/register" style={styles.linkSecondary}>Don't have an account? Sign Up</Link>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import car from '../assets/images/car.jpg';
import logo from '../assets/images/logo.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = {};
    let hasErrors = false;

    if (formData.email.trim() === "") {
      formErrors.email = "Enter Email";
      hasErrors = true;
    }
    if (formData.password.trim() === "") {
      formErrors.password = "Enter Password";
      hasErrors = true;
    }

    setError(formErrors);

    if (!hasErrors) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8080/api/auth/authenticate",
          formData
        );
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        const role = localStorage.getItem("role");
        if (role === "ADMIN") {
          navigate("/adminboard");
        } else {
          navigate("/toy");
        }
      } catch (error) {
        console.error(error);
        setError({ email: "Invalid email or password" });
      }
    }
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
      backgroundImage: `url(${car})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    container: {
      width: "350px",
      marginLeft: "930px",
      paddingTop: "5px",
      padding: "50px",
      border: "1px solid #F04721",
      borderRadius: "8px",
      backgroundColor: "white",
      position: 'relative',
      zIndex: 1,
      boxShadow: "-2px 0 10px red",
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
      border: "1px solid white",
      borderRadius: "4px",
      backgroundColor: "#F04721",
      color: "white",
      fontSize: "1rem",
      cursor: "pointer",
      textDecoration: "none",
      textAlign: "center"
    },
    link: {
      color: "white",
      textDecoration: "none"
    },
    linkSecondary: {
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
          <label style={styles.label}>Email</label>
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
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <a href="#" style={styles.linkSecondary}>Forgot Password?</a>
        <Link to="/register" style={styles.linkSecondary}>Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
