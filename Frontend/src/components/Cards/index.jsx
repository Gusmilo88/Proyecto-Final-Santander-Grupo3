import "./style.css";
import Button from "../Button";

const Cards = ({evento, buttonText, pathText}) => {
  return (
    <>
    <div role="cards">
    {
      evento ? 
      <div id="divContainer">
      <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={evento.image ? evento.image : "No hay imagen disponible"}
          alt={evento.place}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{evento.name ? evento.name : "No hay nombre disponible"}</div>
          <p className="text-gray-700 text-base">
            {evento.description ? evento.description : "No hay descripción disponible"}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <span
            id="span1"
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
          >
            <i
              className="fa-solid fa-clock fa-beat"
              style={{ color: "#ffffff" }}
            />{" "}
            {evento.date}
          </span>
          <span
            id="span2"
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
          >
            <i
              className="fa-solid fa-location-dot fa-beat"
              style={{ color: "#ffffff" }}
            />{" "}
            {evento.place}
          </span>
        </div>
        <div className="mb-12 pb-1 pt-1 text-center">
          <Button buttonName={buttonText} path={pathText}/>
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
