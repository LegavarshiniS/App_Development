// import React, { useState, useEffect } from 'react';
// import Header2 from './header2';
// import Footer from './footer';

// function AddressPage() {
//   const [addresses, setAddresses] = useState([]);
//   const [currentAddress, setCurrentAddress] = useState('');
//   const [editIndex, setEditIndex] = useState(-1);

//   useEffect(() => {
//     const savedAddresses = JSON.parse(localStorage.getItem('addresses'));
//     if (savedAddresses) {
//       setAddresses(savedAddresses);
//     }
//   }, []);

//   const handleAddAddress = () => {
//     if (currentAddress.trim() === '') return;

//     let updatedAddresses;
//     if (editIndex >= 0) {
//       updatedAddresses = addresses.map((addr, index) => 
//         index === editIndex ? currentAddress : addr
//       );
//       setEditIndex(-1);
//     } else {
//       updatedAddresses = [...addresses, currentAddress];
//     }

//     setAddresses(updatedAddresses);
//     localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
//     setCurrentAddress('');
//   };

//   const handleEditAddress = (index) => {
//     setCurrentAddress(addresses[index]);
//     setEditIndex(index);
//   };

//   const handleDeleteAddress = (index) => {
//     const updatedAddresses = addresses.filter((_, addrIndex) => addrIndex !== index);
//     setAddresses(updatedAddresses);
//     localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
//   };

//   const handleChangeDeliveryAddress = (index) => {
//     alert(`Delivery address changed to: ${addresses[index]}`);
//   };

//   return (
//     <div>
//       <Header2 />
//       <div style={styles.container}>
//         <h2>DELIVER HERE</h2>
//         <div style={styles.addressForm}>
//           <input
//             type="text"
//             value={currentAddress}
//             onChange={(e) => setCurrentAddress(e.target.value)}
//             placeholder="Enter address"
//             style={styles.input}
//           />
//           <button onClick={handleAddAddress} style={styles.button}>
//             {editIndex >= 0 ? 'Update Address' : 'Add Address'}
//           </button>
//         </div>
//         <div style={styles.addressList}>
//           {addresses.map((address, index) => (
//             <div key={index} style={styles.addressItem}>
//               <p>{address}</p>
//               <div style={styles.actions}>
//                 <button onClick={() => handleEditAddress(index)} style={styles.actionButton}>Edit</button>
//                 <button onClick={() => handleDeleteAddress(index)} style={styles.actionButton}>Delete</button>
//                 <button onClick={() => handleChangeDeliveryAddress(index)} style={styles.actionButton}>Set as Delivery Address</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '20px',
//     maxWidth: '800px',
//     margin: '0 auto',
//     backgroundColor: '#fff',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px red',
//     marginTop:'100px',
//     marginBottom:'150px',
//   },
//   addressForm: {
//     display: 'flex',
//     marginBottom: '20px',
//   },
//   input: {
//     flex: '1',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     marginRight: '10px',
//   },
//   button: {
//     padding: '10px 20px',
//     borderRadius: '5px',
//     border: 'none',
//     backgroundColor: '#F04721',
//     color: '#fff',
//     cursor: 'pointer',
//   },
//   addressList: {
//     marginTop: '20px',
//   },
//   addressItem: {
//     padding: '10px',
//     borderBottom: '1px solid #ccc',
//   },
//   actions: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '10px',
//   },
//   actionButton: {
//     padding: '5px 10px',
//     borderRadius: '5px',
//     border: 'none',
//     backgroundColor: '#F04721',
//     color: '#fff',
//     cursor: 'pointer',
//     marginRight: '5px',
//   },
// };

// export default AddressPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from './header2';
import Footer from './footer';

function AddressPage() {
  const [addresses, setAddresses] = useState([]);
  const [currentAddress, setCurrentAddress] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedAddresses = JSON.parse(localStorage.getItem('addresses'));
    if (savedAddresses) {
      setAddresses(savedAddresses);
    }
    const savedDeliveryAddress = localStorage.getItem('deliveryAddress');
    if (savedDeliveryAddress) {
      setDeliveryAddress(savedDeliveryAddress);
    }
  }, []);

  const handleAddAddress = () => {
    if (currentAddress.trim() === '') return;

    let updatedAddresses;
    if (editIndex >= 0) {
      updatedAddresses = addresses.map((addr, index) => 
        index === editIndex ? currentAddress : addr
      );
      setEditIndex(-1);
    } else {
      updatedAddresses = [...addresses, currentAddress];
    }

    setAddresses(updatedAddresses);
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    setCurrentAddress('');
  };

  const handleEditAddress = (index) => {
    setCurrentAddress(addresses[index]);
    setEditIndex(index);
  };

  const handleDeleteAddress = (index) => {
    const updatedAddresses = addresses.filter((_, addrIndex) => addrIndex !== index);
    setAddresses(updatedAddresses);
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  };

  const handleChangeDeliveryAddress = (index) => {
    setDeliveryAddress(addresses[index]);
    localStorage.setItem('deliveryAddress', addresses[index]);
    setShowDialog(true);
    setTimeout(() => {
      setShowDialog(false);
      navigate('/payment'); // Assuming '/payment' is the route for the payment page
    }, 3000);
  };

  return (
    <div>
      <Header2 />
      <div style={styles.container}>
        <h2>DELIVER HERE</h2>
        <div style={styles.addressForm}>
          <input
            type="text"
            value={currentAddress}
            onChange={(e) => setCurrentAddress(e.target.value)}
            placeholder="Enter address"
            style={styles.input}
          />
          <button onClick={handleAddAddress} style={styles.button}>
            {editIndex >= 0 ? 'Update Address' : 'Add Address'}
          </button>
        </div>
        <div style={styles.addressList}>
          {addresses.map((address, index) => (
            <div key={index} style={styles.addressItem}>
              <p style={{ fontWeight: deliveryAddress === address ? 'bold' : 'normal', color: deliveryAddress === address ? '#F04721' : '#000' }}>
                {deliveryAddress === address && <span style={styles.defaultTitle}>Default Address: </span>}
                {address}
              </p>
              <div style={styles.actions}>
                <button onClick={() => handleEditAddress(index)} style={styles.actionButton}>Edit</button>
                <button onClick={() => handleDeleteAddress(index)} style={styles.actionButton}>Delete</button>
                <button onClick={() => handleChangeDeliveryAddress(index)} style={styles.actionButton}>Set as Delivery Address</button>
              </div>
            </div>
          ))}
        </div>
        {showDialog && (
          <div style={styles.dialog}>
            <p>The address set as delivery address</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px red',
    marginTop: '100px',
    marginBottom: '150px',
  },
  addressForm: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#F04721',
    color: '#fff',
    cursor: 'pointer',
  },
  addressList: {
    marginTop: '20px',
  },
  addressItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  actionButton: {
    padding: '5px 10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#F04721',
    color: '#fff',
    cursor: 'pointer',
    marginRight: '5px',
  },
  dialog: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: 'white',
    color: 'red',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  defaultTitle: {
    fontWeight: 'bold',
    color: '#F04721',
  },
};

export default AddressPage;
