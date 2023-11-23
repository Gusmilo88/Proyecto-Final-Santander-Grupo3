import React from 'react';
import EventImage from '/src/components/EventImage';
import Button from '/src/components/Button';
import "./style.css";

const Detalles = ({ evento }) => {
  return (
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/src/assets/video/octagon.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="card mb-3 mx-auto bg-black bg-opacity-80 rounded-lg shadow" style={{ position: 'relative', top: 50 }}>
          <div className="row g-0 lg:items-center">
            <div className="col-md-5 col-12 d-flex align-items-stretch justify-content-center h-100">
              <EventImage image={evento.image} className="rounded-start h-full w-100" />
            </div>

            <div className="col-md-7 col-12 d-md-flex align-items-md-center">
              <div className="card-body text-center ">
                <div className="custom-container ml-3 text-white">
                  <h3 className="card-title text-2xl"><strong>{evento.name}</strong></h3>
                  <p className="card-text">{evento.description}</p>
                  <ul className="list-unstyled">
                    <li><strong>Category:</strong> {evento.category}</li>
                    <li><strong>Capacity:</strong> {evento.capacity}</li>
                    <li><strong>Price:</strong> ${evento.price}</li>
                    {evento.estimate && <li><strong>Estimate:</strong> {evento.estimate}</li>}
                    {evento.assistance && <li><strong>Assistance:</strong> {evento.assistance}</li>}
                  </ul>
                  <div className="px-6 pt-4 pb-2 flex flex-col  md:flex-row justify-center">
                    <span
                      id="span1"
                      className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-800 mr-3"
                    >
                      <i
                        className="fa-solid fa-clock fa-beat"
                        style={{ color: "#000000" }}
                      />{" "}
                      {evento.date}
                    </span>
                    <span
                      id="span2"
                      className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-800"
                    >
                      <i className="fa-solid fa-location-dot fa-beat"
                        style={{ color: "#000000" }}
                      />{" "}
                      {evento.place}
                    </span>
                  </div>
                  <div className="mt-3"></div>
                  <Button buttonName="ADD TO CART" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detalles;
