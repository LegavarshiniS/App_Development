import { useState } from "react";
import React from "react";
import login from '../assets/images/login.png'; // Ensure this path is correct

const Login = () => {
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

    // Inline styles
    const styles = {
        pageContainer: {
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            display: "flex",
            justifyContent: "flex-start", // Align container to the left
            alignItems: "center",
            backgroundImage: `url(${login})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
        container: {
            //maxWidth: "400px",
            width:"300px",
            marginLeft: "930px", 
            paddingTop:"5px",
            padding: "50px",
            border: "1px solid #ddd",
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
        inputFocus: {
            borderColor: "#007bff",
            outline: "none"
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
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                <a href="#" style={styles.link}>Forgot Password?</a>
                <a href="#" style={styles.link}>Don't have an account? Sign Up</a>
            </div>
        </div>
    );
}

export default Login;
