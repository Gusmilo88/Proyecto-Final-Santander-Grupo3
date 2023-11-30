import React from 'react';
import { Link } from 'react-router-dom';
import videoSource from '../../assets/video/octagon.mp4';
import './style.css';

const Detalles = ({ event }) => {
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
               <div className=" pt-3"> 
                <Link
                  to={`/cart`}
                  id="btn-addToCart"
                  className="inline-block rounded px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  style={{ backgroundColor: '#d53369' }}
                >
                  <i className="fa-solid fa-cart-shopping" style={{ color: '#ffffff' }} /> Add to cart
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Detalles;



