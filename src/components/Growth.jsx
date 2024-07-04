import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; 

const Growth = () => {
  const buttonStyle = {
    fontSize: '1.25rem',
    borderWidth: '2px', 
    color: 'black',
    padding: '10px', 
    textAlign: 'center',
    height: '60px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const signUpButtonStyle = {
    fontSize: '1.2rem', 
    padding: '10px 70px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30px', 
    fontWeight: 'bold',
    backgroundColor: '#008631', 
    color: 'white', 
  };

  const arrowIconStyle = {
    marginLeft: '20px', 
  };

  const containerStyle = {
    marginTop: '50px', 
  };

  return (
    <div className="container my-5" style={containerStyle}>
      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <h2 className="font-weight-bold" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '30px' }}>
            Ready to dive into <span style={{ color: '#051650' }}>HABOT?</span>
          </h2>
          <p style={{ fontSize: '1.18rem', marginBottom: '30px' }}>
            Signing up with HABOT opens the door to a world of new opportunities <br /> 
            and potential for business growth. Gain access to a vibrant community <br /> 
            of like-minded individuals, unlock valuable resources, and take the first <br /> 
            step towards realizing your entrepreneurial dreams.
          </p>
          <button className="btn btn-lg" style={signUpButtonStyle}>
            Sign up Today!  <FaArrowRight style={arrowIconStyle} />
          </button>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-12 col-sm-6 mb-3">
              <button className="btn btn-outline-warning w-100" style={buttonStyle}>Abu Dhabi</button>
            </div>
            <div className="col-12 col-sm-6 mb-3">
              <button className="btn btn-outline-warning w-100" style={buttonStyle}>Dubai</button>
            </div>
            <div className="col-12 col-sm-6 mb-3">
              <button className="btn btn-outline-warning w-100" style={buttonStyle}>Sharjah & Ajman</button>
            </div>
            <div className="col-12 col-sm-6 mb-3">
              <button className="btn btn-outline-warning w-100" style={buttonStyle}>Fujairah</button>
            </div>
            <div className="col-12 col-sm-6 mb-3">
              <button className="btn btn-outline-warning w-100" style={buttonStyle}>Ras Al Khaimah</button>
            </div>
            <div className="col-12 col-sm-6 mb-3">
              <button className="btn btn-outline-warning w-100" style={buttonStyle}>Umm Al Quwain</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
