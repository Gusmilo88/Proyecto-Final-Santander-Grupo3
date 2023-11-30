import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Comentarios = () => {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [comments, setComments] = useState([
    { user: 'UsuarioTest3', rating: 3, message: 'Buen evento, pero podría mejorar en algunos aspectos.' },
    { user: 'UsuarioTest4', rating: 5, message: 'Increíble, definitivamente volveré a participar.' },
  ]);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      if (!isLoggedIn) {
        console.log('You must log in to leave a comment');
        handleLogin();
        return;
      }

      const newComment = { user: username, rating: parseInt(rating), message: comment };
      setComments([...comments, newComment]);

      setUsername('');
      setRating(1);
      setComment('');

      console.log('Comment created successfully');
    } catch (error) {
      console.error('Error in the request:', error);
    }
  };

  return (
    <div className="comentarios-container col-12 d-flex justify-content-center">
      <div className="col-lg-8 col-md-8 col-sm-10 mr-3" >
        {comments.map((c, index) => (
          <div key={index} className="comment" style={{ borderRadius: '15px' }}>
            <div className="user-rating d-flex align-items-center" >
              <span className="me-3 p-3 text-white">{c.user}</span>
              <div className="rating-stars">{'★'.repeat(c.rating)}</div>
            </div>
            <p className="coment-detalle text-white ms-5 ps-5 pb-3">{c.message}</p>
          </div>
        ))}

        {isLoggedIn && (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
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
                Rating
              </label>
              <select
                className="form-select"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value} star{value !== 1 && 's'}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <textarea
                className="form-control"
                id="comment"
                rows="3"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Comment
            </button>
          </form>
        )}

        {!isLoggedIn && (
          <div className="d-flex align-items-center">
            <p className="text-dark me-3"><strong>You must log in to leave a comment.</strong></p>
            <button
              className="btn btn-primary btn-sm"
              style={{ width: '200px' }} 
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comentarios;