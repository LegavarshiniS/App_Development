import { useState } from "react";
import login from '../assets/images/login.png'; 
import { Link } from "react-router-dom";
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setError({ ...error, [name]: "" });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = {};

        if (formData.name.trim() === "") {
            formErrors.name = "Enter Name";
        }
        if (formData.email.trim() === "") {
            formErrors.email = "Enter Email";
        }
        if (formData.password.trim() === "") {
            formErrors.password = "Enter Password";
        }
        if (formData.confirmPassword.trim() === "") {
            formErrors.confirmPassword = "Confirm Password";
        } else if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match";
        }

        setError(formErrors);
        console.log(formData);
    };

    // Inline styles
    const styles = {
        pageContainer: {
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${login})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
        container: {
            width:"310px",
            marginLeft:"600px",
            padding: "40px",
            paddingTop:"5px",
            paddingRight:"80px",
            border: "1px solid #F04721",
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background for better readability
            position: "relative",
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
        buttonHover: {
            backgroundColor: "#0056b3"
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
                <h1 style={styles.header}>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label style={styles.label}>Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {error.name && <p style={styles.error}>{error.name}</p>}
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
                    <label style={styles.label}>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {error.confirmPassword && <p style={styles.error}>{error.confirmPassword}</p>}
                    <button type="submit" style={styles.button}>Register</button>
                </form>
                <Link to="/login" style={styles.link}>Already have an account? Sign in</Link>
            </div>
        </div>
    );
}

export default Register;
