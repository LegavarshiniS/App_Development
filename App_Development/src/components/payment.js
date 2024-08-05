// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './payment.css';

// function PaymentDone() {
//   const [activeMethod, setActiveMethod] = useState('first-credit-card');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     //navigate('/pay');
//   };

//   return (
//     <div className="back">
//       <div className="first-container">
//         <div className="first-payment-methods">
//           <h2>Select Payment Method</h2>
//           <div className="first-methods">
//             <div 
//               className={`first-method ${activeMethod === 'first-credit-card' ? 'first-active' : ''}`} 
//               onClick={() => setActiveMethod('first-credit-card')}
//             >
//               Credit Card
//             </div>
//             <div 
//               className={`first-method ${activeMethod === 'first-net-banking' ? 'first-active' : ''}`} 
//               onClick={() => setActiveMethod('first-net-banking')}
//             >
//               Net Banking
//             </div>
//             <div 
//               className={`first-method ${activeMethod === 'first-paypal' ? 'first-active' : ''}`} 
//               onClick={() => setActiveMethod('first-paypal')}
//             >
//               PayPal
//             </div>
//             <div 
//               className={`first-method ${activeMethod === 'first-debit-card' ? 'first-active' : ''}`} 
//               onClick={() => setActiveMethod('first-debit-card')}
//             >
//               Debit Card
//             </div>
//           </div>
//         </div>
        
//         {activeMethod === 'first-credit-card' && (
//           <form className="first-payment-form" onSubmit={handleSubmit}>
//             <h2>Credit Card Info</h2>
           
//             <label htmlFor="cardnumber">Card Number</label>
//             <input type="text" id="cardnumber" name="cardnumber" required />

//             <div className="first-card-details">
//               <div>
//                 <label htmlFor="expiration">Expiration</label>
//                 <input type="text" id="expiration" name="expiration" placeholder="MM / YY" required />
//               </div>
//               <div>
//                 <label htmlFor="cvv">CVV Number</label>
//                 <input type="text" id="cvv" name="cvv" required />
//               </div>
//             </div>
// <Link to="/pay">
//             <button type="submit">Submit</button>
//             </Link>
//             <div className="first-terms">
//               <input type="checkbox" id="terms" name="terms" required />
//               <label htmlFor="terms">By checking this box, I agree to the Terms & Conditions & Privacy Policy.</label>
//             </div>
//           </form>
//         )}
        
//         {activeMethod === 'first-net-banking' && (
//           <div className="first-net-banking-content">
//             <h2>Net Banking Info</h2>
//             <p>Choose your bank from the list below and proceed with the payment.</p>
//             {/* Add additional content and options for Net Banking */}
//           </div>
//         )}
        
//         {activeMethod === 'first-paypal' && (
//           <div className="first-paypal-content">
//             <h2>PayPal Info</h2>
//             <p>Log in to your PayPal account to complete the payment.</p>
//           </div>
//         )}
        
//         {activeMethod === 'first-debit-card' && (
//           <form className="first-payment-form" onSubmit={handleSubmit}>
//             <h2>Debit Card Info</h2>
//             <label htmlFor="cardname">Name on Card</label>
//             <input type="text" id="cardname" name="cardname" required />

//             <label htmlFor="cardnumber">Card Number</label>
//             <input type="text" id="cardnumber" name="cardnumber" required />

//             <div className="first-card-details">
//               <div>
//                 <label htmlFor="expiration">Expiration</label>
//                 <input type="text" id="expiration" name="expiration" placeholder="MM / YY" required />
//               </div>
//               <div>
//                 <label htmlFor="cvv">CVV Number</label>
//                 <input type="text" id="cvv" name="cvv" required />
//               </div>
//             </div>
// <Link to="/pay">
//             <button type="submit">Submit</button>
//             </Link>
//             <div className="first-terms">
//               <input type="checkbox" id="terms" name="terms" required />
//               <label htmlFor="terms">By checking this box, I agree to the Terms & Conditions & Privacy Policy.</label>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PaymentDone;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PaymentDone() {
  const [activeMethod, setActiveMethod] = useState('first-credit-card');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //navigate('/pay');
  };

  return (
    <div style={styles.back}>
      <div style={styles.firstContainer}>
        <div style={styles.firstPaymentMethods}>
          <h2>Select Payment Method</h2>
          <div style={styles.firstMethods}>
            <div 
              style={{...styles.firstMethod, ...(activeMethod === 'first-credit-card' ? styles.firstActive : {})}} 
              onClick={() => setActiveMethod('first-credit-card')}
            >
              Credit Card
            </div>
            <div 
              style={{...styles.firstMethod, ...(activeMethod === 'first-net-banking' ? styles.firstActive : {})}} 
              onClick={() => setActiveMethod('first-net-banking')}
            >
              Net Banking
            </div>
            <div 
              style={{...styles.firstMethod, ...(activeMethod === 'first-paypal' ? styles.firstActive : {})}} 
              onClick={() => setActiveMethod('first-paypal')}
            >
              PayPal
            </div>
            <div 
              style={{...styles.firstMethod, ...(activeMethod === 'first-debit-card' ? styles.firstActive : {})}} 
              onClick={() => setActiveMethod('first-debit-card')}
            >
              Debit Card
            </div>
          </div>
        </div>
        
        {activeMethod === 'first-credit-card' && (
          <form style={styles.firstPaymentForm} onSubmit={handleSubmit}>
            <h2>Credit Card Info</h2>
           
            <label htmlFor="cardnumber">Card Number</label>
            <input type="text" id="cardnumber" name="cardnumber" required />

            <div style={styles.firstCardDetails}>
              <div>
                <label htmlFor="expiration">Expiration</label>
                <input type="text" id="expiration" name="expiration" placeholder="MM / YY" required />
              </div>
              <div>
                <label htmlFor="cvv">CVV Number</label>
                <input type="text" id="cvv" name="cvv" required />
              </div>
            </div>
            <Link to="/pay">
              <button type="submit">Submit</button>
            </Link>
            <div style={styles.firstTerms}>
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">By checking this box, I agree to the Terms & Conditions & Privacy Policy.</label>
            </div>
          </form>
        )}
        
        {activeMethod === 'first-net-banking' && (
          <div style={styles.firstNetBankingContent}>
            <h2>Net Banking Info</h2>
            <p>Choose your bank from the list below and proceed with the payment.</p>
            {/* Add additional content and options for Net Banking */}
          </div>
        )}
        
        {activeMethod === 'first-paypal' && (
          <div style={styles.firstPayPalContent}>
            <h2>PayPal Info</h2>
            <p>Log in to your PayPal account to complete the payment.</p>
          </div>
        )}
        
        {activeMethod === 'first-debit-card' && (
          <form style={styles.firstPaymentForm} onSubmit={handleSubmit}>
            <h2>Debit Card Info</h2>
            <label htmlFor="cardname">Name on Card</label>
            <input type="text" id="cardname" name="cardname" required />

            <label htmlFor="cardnumber">Card Number</label>
            <input type="text" id="cardnumber" name="cardnumber" required />

            <div style={styles.firstCardDetails}>
              <div>
                <label htmlFor="expiration">Expiration</label>
                <input type="text" id="expiration" name="expiration" placeholder="MM / YY" required />
              </div>
              <div>
                <label htmlFor="cvv">CVV Number</label>
                <input type="text" id="cvv" name="cvv" required />
              </div>
            </div>
            <Link to="/pay">
              <button type="submit">Submit</button>
            </Link>
            <div style={styles.firstTerms}>
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">By checking this box, I agree to the Terms & Conditions & Privacy Policy.</label>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  back: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
    padding: '20px',
  },
  firstContainer: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
  },
  firstPaymentMethods: {
    marginBottom: '20px',
  },
  firstMethods: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  firstMethod: {
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#e0e0e0',
    transition: 'background-color 0.3s ease',
  },
  firstActive: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  firstPaymentForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  firstCardDetails: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  firstTerms: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  firstNetBankingContent: {
    textAlign: 'center',
  },
  firstPayPalContent: {
    textAlign: 'center',
  },
};

export default PaymentDone;
