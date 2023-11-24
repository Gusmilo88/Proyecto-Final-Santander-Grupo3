import './style.css';
import React, { useState } from 'react';

const Comentarios = () => {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Agregamos estado para rastrear el estado de inicio de sesión
  const [comments, setComments] = useState([
    { user: 'UsuarioTest', rating: 5, message: '¡Gran evento! Me encantó.' },
    // Agrega otros comentarios si es necesario
  ]);

  const handleLogin = () => {
    // Aquí podrías redirigir a la página de inicio de sesión
    console.log('Redirigiendo a la página de inicio de sesión');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!isLoggedIn) {
        // Si el usuario no está autenticado, mostrar un mensaje o redirigir a la página de inicio de sesión
        console.log('Debe iniciar sesión para comentar');
        handleLogin();
        return;
      }

      const eventId = 'ID_DEL_EVENTO';
      // Agregar el nuevo comentario a la lista de comentarios
      const newComment = { user: username, rating: parseInt(rating), message: comment };
      setComments([...comments, newComment]);

      // Limpiar el formulario
      setUsername('');
      setRating(1);
      setComment('');

      console.log('Comentario creado exitosamente');
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="m-5">
      {/* Mostrar comentarios existentes */}
      {comments.map((c, index) => (
        <div key={index} className="comment">
          <div className="user-rating d-flex align-items-center ">
            <span className="me-3 p-3 text-white">{c.user}</span>
            <div className="rating-stars ">{'★'.repeat(c.rating)}</div>
          </div>
          <p className="coment-detalle text-white ms-5 ps-5 pb-3">{c.message}</p>
        </div>
      ))}

      {/* Mostrar formulario de comentarios solo si está logueado */}
      {isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Nombre de Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Calificación
            </label>
            <select
              className="form-select"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1 estrella</option>
              <option value="2">2 estrellas</option>
              <option value="3">3 estrellas</option>
              <option value="4">4 estrellas</option>
              <option value="5">5 estrellas</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Comentario
            </label>
            <textarea
              className="form-control"
              id="comment"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" id="btn-seeMore">
            Agregar Comentario
          </button>
        </form>
      )}

      {/* Mostrar mensaje para iniciar sesión si no está logueado */}
      {!isLoggedIn && (
        <div>
          <p className="text-white">Inicia sesión para dejar un comentario.</p>
          <button className="btn btn-primary" id="btn-login" onClick={handleLogin}>
            Iniciar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default Comentarios;