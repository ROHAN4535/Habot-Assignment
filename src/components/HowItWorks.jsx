import React from 'react';
import Userprofile from '../assets/Userprofile.jpg';
import Document from '../assets/Document.jpg';
import Review from '../assets/Review.jpg';
import Contact from '../assets/Contact.jpg';
import Quote from '../assets/Quote.jpg';
import Handshake from '../assets/Handshake.jpg';

const HowItWorks = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center font-weight-bold" style={{ fontSize: '2.4rem', color: 'black', fontWeight: 'bold' }}>How it works?</h2>
      <p className="text-center mx-auto" style={{ maxWidth: '1000px', fontSize: '1.2rem', marginTop: '30px', marginBottom: '80px' }}>
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
        <br />
        potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="p-4" style={{ backgroundColor: '#E1F6FF', height: '250px' }}>
            <div className="text-center mb-3">
              <img src={Userprofile} alt="Select Your Role and Sign Up" className="img-fluid" />
            </div>
            <h5 className="text-center">Select Your Role and Sign Up</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="p-4" style={{ height: '250px' }}>
            <div className="text-center mb-3">
              <img src={Document} alt="Buyers Post Your Requirements" className="img-fluid" />
            </div>
            <h5 className="text-center">Buyers Post Your Requirements</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="p-4" style={{ backgroundColor: '#E1F6FF', height: '250px' }}>
            <div className="text-center mb-3">
              <img src={Review} alt="Review, Select, and Contact the Best Suppliers" className="img-fluid" />
            </div>
            <h5 className="text-center">Review, Select, and Contact the Best Suppliers</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="p-4" style={{ height: '250px' }}>
            <div className="text-center mb-3">
              <img src={Contact} alt="Suppliers Complete your profile and get notified for opportunities" className="img-fluid" />
            </div>
            <h5 className="text-center">Suppliers Complete your profile and get notified for opportunities</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="p-4" style={{ backgroundColor: '#E1F6FF', height: '250px' }}>
            <div className="text-center mb-3">
              <img src={Quote} alt="Contact to Buyers and Share your Quote for the service" className="img-fluid" />
            </div>
            <h5 className="text-center">Contact to Buyers and Share your Quote for the service</h5>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="p-4" style={{ height: '250px' }}>
            <div className="text-center mb-3">
              <img src={Handshake} alt="Both the Parties can Connect and Make Business Leave a Feedback" className="img-fluid" />
            </div>
            <h5 className="text-center">Both the Parties can Connect and Make Business Leave a Feedback</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
