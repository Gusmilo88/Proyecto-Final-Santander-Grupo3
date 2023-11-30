import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const cardClass = props.inCarousel ? 'card-carousel' : 'card-default';
    return (
      <div className={`col-12 col-sm-6 col-lg-4 col-xl-3 event-card mb-5 ${cardClass}`} style={{ transform: 'perspective(1000px)', transition: 'transform 0.2s' }}>
         <div className="card h-100" style={{ transition: 'transform 0.5s' }}>
                <div className="card-img-container">
                    <img src={props.image} className="card-img-top" alt={props.title} />
                </div>
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                    <div className="text-center mb-3">
                        <h5 className="card-title mb-0"><strong>{props.title}</strong></h5>
                        <p id='parrafo' className="card-text">{props.description}</p>
                        <p className="m-0"><strong>Price: ${props.price}</strong></p>
                        <hr />
                    </div>
                    <div className="flex flex-col">
                        <Link  to={`/details/${props.id}`} id="btn-seeDetail" className="mb-2 inline-block rounded pt-2 pb-2 text-center text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
                            <i className="fa-solid fa-eye" style={{ color: '#ffffff' }} /> Details
                        </Link>
                        <Link  to={`/cart`} id="btn-addToCart" className="inline-block rounded px-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"><i className="fa-solid fa-cart-shopping" style={{ color: '#ffffff' }} /> Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;


