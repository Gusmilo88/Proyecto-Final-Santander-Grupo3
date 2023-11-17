import { Link } from 'react-router-dom';
import'./style.css'

const VistaSelector = ({title, arrowLeft, arrowRight}) => {
  return (
    <div>
      <div
        id="container_h2"
        className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-zinc-900"
      >
        <h2 id="h2_events">
          <Link to={arrowLeft}><i className="fa-solid fa-arrow-left fa-beat-fade"/></Link> {title} <Link to={arrowRight}><i className="fa-solid fa-arrow-right fa-beat-fade"/></Link>
        </h2>
      </div>
    </div>
  );
}

export default VistaSelector
