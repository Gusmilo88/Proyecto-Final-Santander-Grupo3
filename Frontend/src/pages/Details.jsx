import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';
import Detalles from '../components/Detalles';
import DivH2 from '../components/DivH2';
import CarouselDetails from '../components/CarouselDetails';
import Comentarios from '../components/Comentarios'; // Importa el componente de comentarios

function Details() {
  const { id } = useParams();
  const eventos = useSelector((state) => state.eventos);
  const event = eventos.find((evento) => evento._id == id);

  return (
    <Layout>
      {event ? (
        <>
         <div className="details-container mt-3">
          <DivH2 title="DETAILS" />
          </div>
          <Detalles event={event} />
       
          <DivH2 title="COMENTARIOS" />
          <Comentarios />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}

export default Details;
