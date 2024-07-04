import React from 'react';

const Verify = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#E1F6FF', padding: '50px 20px', marginTop: '140px', marginBottom: '100px' }}>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-8">
          <h1 className="display-4 font-weight-bold text-center text-md-left" style={{ color: 'black', fontSize: '2.4rem', fontWeight: 'bold', marginBottom: '30px' }}>
            Let Suppliers <span style={{ borderBottom: '4px solid #FF7F50' }}>Find You</span>
          </h1>
        </div>
        <div className="col-md-4 text-center text-md-right">
          <button className="btn btn-danger btn-lg">Get Verified</button>
        </div>
      </div>
    </div>
  );
}

export default Verify;
