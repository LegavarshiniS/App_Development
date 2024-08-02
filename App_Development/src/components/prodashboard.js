import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js';
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile.jpg'; // Ensure the correct path to your profile photo

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Purchase History',
      data: [5, 10, 15, 20, 25, 30], // Example data points representing number of purchases
      fill: false,
      borderColor: 'blue',
      tension: 0.1
    }
  ]
};

const pieChartData = {
  labels: ['Toys', 'Barbie', 'Games', 'Books'],
  datasets: [
    {
      data: [100, 50, 75, 25], // Example data points representing spend in each category
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    }
  ]
};

const ProfileBoard = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
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

          .header-logo {
            display: flex;
            align-items: center;
          }

          .header-logo img {
            height: 59px;
          }

          .header-logo h1 {
            display: inline;
            margin-left: 10px;
            margin-top: 4px;
            font-size: 30px;
          }

          .header-links {
            display: flex;
            align-items: center;
          }

          .header-links a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-size: 20px;
          }

          .header-links i {
            font-size: 30px;
            color: white;
            margin-left: 20px;
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
              font-size: 60px;
              margin-top: 10px;
            }

            .header-links {
              margin-top: 10px;
            }
          }

          @media (max-width: 480px) {
            .header-logo h1 {
              font-size: 24px;
            }

            .header-links i {
              font-size: 30px;
            }
          }

          .sidebar-container {
            position: fixed;
            left: 0;
            top: 99px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: white;
            color: white;
            height: 100vh;
            width: 300px;
            box-shadow: -2px 0 10px red;
          }

          .profile-photo-container {
            width: 140px;
            height: 140px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin-top: 18px;
            margin-bottom: 40px;
            overflow: hidden;
          }

          .profile-photo {
            width: 100%;
            height: auto;
          }

          .sidebar-link, .side-link {
            position: relative;
            margin-bottom: 20px;
            font-size: 18px;
            color: red;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 10px;
            transition: background-color 0.3s, color 0.3s;
          }

          .sidebar-link:hover, .side-link:hover {
            background-color: red;
            color: white;
          }

          .sidebar-link i, .side-link i {
            font-size: 24px;
            margin-right: 10px;
            transition: color 0.3s;
          }

          .sidebar-link:hover i, .side-link:hover i {
            color: white;
          }

          .link-text {
            transition: color 0.3s;
          }

          .sidebar-link:hover .link-text, .side-link:hover .link-text {
            color: white;
          }

          .side-link {
            color: white;
            background-color: red;
          }

          .side-link i, .side-link .link-text {
            color: white;
          }

          @media (max-width: 768px) {
            .sidebar-container {
              padding: 10px;
              width: 150px;
            }

            .profile-photo-container {
              width: 60px;
              height: 60px;
              margin-top: 60px;
            }

            .sidebar-link i, .side-link i {
              font-size: 20px;
            }

            .sidebar-link, .side-link {
              font-size: 16px;
              margin-bottom: 15px;
            }
          }

          @media (max-width: 480px) {
            .sidebar-container {
              width: 120px;
            }

            .profile-photo-container {
              width: 50px;
              height: 50px;
              margin-top: 40px;
            }

            .profile-photo {
              font-size: 25px;
            }

            .sidebar-link i, .side-link i {
              font-size: 18px;
            }

            .sidebar-link, .side-link {
              font-size: 14px;
              margin-bottom: 12px;
            }
          }

          .dashboard-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: white;
            color: #333;
            max-width: 1140px;
            margin: 20px auto;
            box-shadow: 0 0 10px red;
            text-align: center;
            margin-top: 20px; /* Adjusted margin for better positioning */
            margin-left: 320px; /* Adjusted margin for better positioning */
            
          }

          .dashboard-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            
          }

          .chart-container {
            width: 100%;
            max-width: 1140px;
            margin-bottom:1px;
            
          }

          .chart-row {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            margin-bottom: 20px;
          }

          .chart-box {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 8px;
            flex: 1;
            height:400px;
          }

          .total-orders, .time-spent {
            font-size: 18px;
            color: #333;
            margin-bottom: 20px;
            flex: 1;
            height:100px;
          }

          .chart-row .chart-box {
            flex: 1;
            margin-right: 10px;
          }
        `}
      </style>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo" />
          <h1>DREAMLAND</h1>
        </div>
        <div className="header-links">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </div>
      </header>
      <div className="sidebar-container">
        <div className="profile-photo-container">
          <img src={profile} alt="Profile" className="profile-photo" />
        </div>
        <Link to="/dashboard" className="sidebar-link">
          <i className="fas fa-user"></i>
          <span className="link-text">Profile</span>
        </Link>
        <Link to="/board" className="side-link">
          <i className="fas fa-tachometer-alt"></i>
          <span className="link-text">Dashboard</span>
        </Link>
        <Link to="/profilewish" className="sidebar-link">
          <i className="fas fa-heart"></i>
          <span className="link-text">Wishlist</span>
        </Link>
        <Link to="/orders" className="sidebar-link">
          <i className="fas fa-box"></i>
          <span className="link-text">Orders</span>
        </Link>
      </div>
      <div className="dashboard-container">
        <div className="dashboard-title">Your Dashboard</div>
        <div className="chart-container">
          <div className="chart-row">
            <div className="chart-box">
              <h3>Favorite Categories</h3>
              <Pie data={pieChartData} />
            </div>
            <div className="chart-box">
              <h3>Purchase History</h3>
              <Line data={lineChartData} />
            </div>
          </div>
          <div className="chart-row">
            <div className="total-orders chart-box">
              <h3>Total Orders</h3>
              <p>150</p> {/* Example number of total orders */}
            </div>
            <div className="time-spent chart-box">
              <h3>Time Spent on Site</h3>
              <p>35 hours</p> {/* Example time spent on the site */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBoard;

