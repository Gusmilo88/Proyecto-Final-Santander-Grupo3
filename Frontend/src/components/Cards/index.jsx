import "./style.css";
import Button from "../Button";
import { useLocation } from 'react-router-dom'


const Cards = ({ evento, buttonText, pathText, buttonTextCart, pathTextCart }) => {
const { pathname } = useLocation();
console.log( pathname );

  return (
    <>
 <div role="cards" className="cards">
        {
          evento ?
          <div id="divContainer" className={pathname === '/' ? 'home-container' : 'other-container'}>
                <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg h-full">
                <img className={ pathname == '/'? 'w-full h-52' : 'h-48 w-full'}
                 src={evento.image ? evento.image : "No hay imagen disponible"}
                  alt={evento.place}
                />
                <div className="px-3 py-2">
                  <div className="font-bold text-xl mb-2">{evento.name ? evento.name : "No hay nombre disponible"}</div>
                  <p className={ pathname == '/'? 'vtext-gray-700 text-base mb-2' : 'parrafo'}>
                    {evento.description ? evento.description : "No hay descripción disponible"}
                  </p>
                </div>
                <div className=" flex flex-col justify-center text-center">
                  <span
                    id="span1"
                    className="inline-block rounded-full  text-sm font-semibold"
                  >
                    <i
                      className="fa-solid fa-clock fa-beat"
                      style={{ color: "#000000" }}
                    />{" "}
                    {evento.date}
                  </span>
                  <span
                    id="span2"
                    className="inline-block rounded-full text-sm font-semibold">
                    <i className="fa-solid fa-location-dot fa-beat"
                      style={{ color: "#000000" }}
                    />{" "}
                    {evento.place}
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex-grow   text-center">
                    <Button buttonName={buttonText} path={pathText} />
                  </div>
                  <div className="flex-grow   text-center">
                    <Button buttonName={buttonTextCart} path={pathTextCart} />
                  </div>
                </div>
              </div>
            </div>
            :
            <>
              <div>
                <h2>Evento no disponible</h2>
              </div>
            </>
        }
      </div>
    </>
  );
};

export default Cards;