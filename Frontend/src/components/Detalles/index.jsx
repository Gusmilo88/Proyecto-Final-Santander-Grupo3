import React from 'react';
import { Link } from 'react-router-dom';
import videoSource from '../../assets/video/octagon.mp4';
import './style.css';

const YourComponent = ({ event }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={videoSource} 
        />
      </div>
      <div className="card mx-auto col-11 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', fontSize: '22px', maxWidth: '100%', margin: '0 15px', height: '500px' }}>
        <div className="row">
          <div className="col-md-5 col-12 d-flex">
            <img src={event.image} className="img-fluid rounded-start mx-auto" alt={event.name} style={{ objectFit: 'cover' }} />
          </div>
          <div className="col-md-7 col-12">
            <div className="card-body">
              <div className="custom-container text-center">
                <h2 className="card-title"><strong>{event.name}</strong></h2>
                <p className="card-text">{event.description}</p>
                <ul className="list-unstyled">
                  <li><strong>Date:</strong> {event.date}</li>
                  <li><strong>Category:</strong> {event.category}</li>
                  <li><strong>Place:</strong> {event.place}</li>
                  <li><strong>Capacity:</strong> {event.capacity}</li>
                  <li><strong>Price:</strong> ${event.price}</li>
                  {event.estimate && <li><strong>Estimate:</strong> {event.estimate}</li>}
                  {event.assistance && <li><strong>Assistance:</strong> {event.assistance}</li>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default YourComponent;



