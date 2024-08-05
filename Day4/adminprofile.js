import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import profile from '../assets/images/profile.jpg'; // Ensure the correct path to your profile photo

const AdminProfile = () => {
  const [name, setName] = useState('Lega');
  const [email, setEmail] = useState('lega@gmail.com');
  const [password, setPassword] = useState('********');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profile);
  const [newPhoto, setNewPhoto] = useState(null);

  const handleEditProfile = () => {
    console.log('Profile updated:', { name, email, password });
    setShowModal(false);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  const handleClearChanges = () => {
    setName('Lega');
    setEmail('lega@gmail.com');
    setPassword('********');
  };

  const handleEditPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = () => {
    if (newPhoto) {
      setProfilePhoto(newPhoto);
      setNewPhoto(null);
    }
  };

  return (
    <div className="edit-profile-container">
      <style>
        {`
          .edit-profile-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: white;
            color: #333;
            box-shadow: 0 0 10px red;
            max-width: 600px;
            margin: 20px auto;
            margin-top: 90px;
            margin-right: 300px;
          }

          .profile-photo-container {
            position: relative;
            width: 140px;
            height: 140px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 20px;
          }

          .profile-photo {
            width: 100%;
            height: auto;
          }

          .edit-options {
            display: flex;
            justify-content: space-around;
            width: 100%;
            margin-bottom: 20px;
          }

          .edit-options button {
            background-color: white;
            color: red;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
          }

          .edit-options button:hover {
            background-color: red;
            color: white;
          }

          .info-group {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 15px;
          }

          .info-text {
            font-size: 16px;
            color: #333;
            margin-right: 10px; /* Adjusted for less space */
            width: 30%; /* Adjust as needed */
            text-align: left; /* Align text to the left */
          }

          .info-value {
            font-size: 16px;
            color: #333;
            border-bottom: 1px solid #ccc;
            padding: 2px 0;
            width: calc(70% - 10px); /* Adjust for less space */
            margin-left: 0; /* Remove any extra margin */
          }

          .edit-profile-button {
            background-color: red;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
          }

          .edit-profile-button:hover {
            background-color: white;
            color:red;
          }
        `}
      </style>
      {showAlert && (
        <Alert variant="success" className="w-100 text-center">
          Changes saved successfully!
        </Alert>
      )}
      <div className="profile-photo-container">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      </div>
      <div className="edit-options">
        <input
          type="file"
          accept="image/*"
          onChange={handleEditPhoto}
          style={{ display: 'none' }}
          id="upload-photo"
        />
        <label htmlFor="upload-photo" className="btn btn-light">
          Edit Photo
        </label>
        {newPhoto && (
          <button onClick={handleSavePhoto} className="btn btn-light">
            Save Photo
          </button>
        )}
      </div>
      <div className="info-group">
        <div className="info-text">Name:</div>
        <div className="info-value">{name}</div>
      </div>
      <div className="info-group">
        <div className="info-text">Email:</div>
        <div className="info-value">{email}</div>
      </div>
      <div className="info-group">
        <div className="info-text">Password:</div>
        <div className="info-value">{password}</div>
      </div>
      <button className="edit-profile-button" onClick={() => setShowModal(true)}>
        Edit Profile
      </button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClearChanges}>
            Clear Changes
          </Button>
          <Button variant="primary" onClick={handleEditProfile}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminProfile;
