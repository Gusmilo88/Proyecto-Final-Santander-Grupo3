import { Link } from 'react-router-dom';

const FloatingLogo = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px', 
        right: '20px', 
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        padding: '10px', 
        borderRadius: '50%', 
        overflow: 'hidden', 
      }}
    >
      <Link to="#" onClick={handleScrollToTop}>
        <img
          id="imgLogo"
          className="h-16 w-16" 
          src="/src/assets/images/logo.png"
          alt="Logo Amazing Events"
          style={{ borderRadius: '50%' }} 
        />
      </Link>
    </div>
  );
};

export default FloatingLogo;
