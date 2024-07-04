import React from 'react';
import Videoplayer from '../assets/Videoplayer.jpg'; 

const Requirement = () => {
  return (
    <div className="container" style={{ backgroundColor: '#0a3550', padding: '60px', borderRadius: '5px' }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <img
            src={Videoplayer}
            alt="Post your requirements"
            className="img-fluid"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '5px'
            }}
          />
        </div>
        <div className="col-md-6" style={{ fontSize: '1.1rem' }}>
          <div className="d-flex justify-content-between mb-3">
            <h2 className="text-danger" style={{
                fontSize: '1.7rem',
                fontWeight: 'bold',
                borderBottom: '4px solid', 
                display: 'inline-block',
                width: '45%',
                textAlign: 'center',
                paddingBottom: '5px'
              }}>Buyer</h2>
            <h2 className="text-white" style={{
                fontSize: '1.7rem',
                borderBottom: '8px solid transparent', 
                display: 'inline-block',
                width: '45%',
                textAlign: 'center',
                paddingBottom: '5px'
              }}>Supplier</h2>
          </div>
          <ul className="list-unstyled text-white">
            <li className="mb-2">
              <i className="fa fa-check-circle text-success" aria-hidden="true"></i> Post your requirements.
            </li>
            <li className="mb-2">
              <i className="fa fa-check-circle text-success" aria-hidden="true"></i> Sit back for multiple suppliers to contact you.
            </li>
            <li className="mb-2">
              <i className="fa fa-check-circle text-success" aria-hidden="true"></i> Choose among the suppliers based on the ratings and reviews.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
