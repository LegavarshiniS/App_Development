import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Panel = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = () => {
        console.log("User logged out");
    };

    const styles = {
        userPanel: {
            position: "relative",
            display: "inline-flex",
            justifyContent: "flex-end",
            width: "100%",
        },
        profileIcon: {
            fontSize: "2rem",
            cursor: "pointer",
            color: "white",
        },
        dropdown: {
            display: dropdownVisible ? "block" : "none",
            position: "absolute",
            right: 0,
            top: "100%",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            overflow: "hidden",
            zIndex: 1000, // Ensure it's higher than NavBar
            transition: "opacity 0.3s ease",
            opacity: dropdownVisible ? 1 : 0,
        },
        dropdownItem: {
            padding: "12px 20px",
            textDecoration: "none",
            color: "#333",
            display: "block",
            cursor: "pointer",
        },
        hoveredDropdownItem: {
            backgroundColor: "#f9f9f9",
            color: "red",
        }
    };

    return (
        <div style={styles.userPanel}>
            <FaUserCircle style={styles.profileIcon} onClick={toggleDropdown} />
            <div style={styles.dropdown}>
                <Link
                    to="/dashboard"
                    style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === 'profile' ? styles.hoveredDropdownItem : {})
                    }}
                    onMouseEnter={() => setHoveredItem('profile')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    Profile
                </Link>
                
                <Link
                    to="/settings"
                    style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === 'settings' ? styles.hoveredDropdownItem : {})
                    }}
                    onMouseEnter={() => setHoveredItem('settings')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    Settings
                </Link>
                
                <Link
                    to="/"
                    style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === 'logout' ? styles.hoveredDropdownItem : {})
                    }}
                    onMouseEnter={() => setHoveredItem('logout')}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={handleLogout}
                >
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Panel;
