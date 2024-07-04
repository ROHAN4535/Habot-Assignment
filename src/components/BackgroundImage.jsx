import React from 'react';
import background from '../assets/Background.jpg';

const BackgroundImage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '90vh',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    fontSize: '1rem',
    padding: '0 20px',
    marginBottom: '100px',
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={{ maxWidth: '90vw' }}> 
        <h1 className="mt-3" style={{ fontSize: '4vw', color: 'white', fontWeight: 'bold' }}>Are You a Supplier?</h1>
        <h2 style={{ fontSize: '4.5vw' }}>Explore Matching Opportunities.</h2>
        <SearchBar />
        <p className="mt-3" style={{ fontSize: '1.2vw', color: 'white', fontWeight: 'bold' }}>
          Are you a buyer?{' '}
          <a href="#" className="text-white">
            Click here if you are looking to post a requirement
          </a>
        </p>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="input-group mb-3" style={{ maxWidth: '90vw', width: '100%' }}> 
        <input type="text" className="form-control mx-2" placeholder="Search your required service here" />
        <input type="text" className="form-control mx-2" placeholder="Search your desired location here" />
        <div className="input-group-append">
          <button className="btn btn-success mx-2 btn-lg" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
