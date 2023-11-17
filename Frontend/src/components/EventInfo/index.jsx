import "./style.css"


const EventInfo = ({name, description, price, date, place}) => {

  return (
    <div role="eventInfo">
  <div id="contenedorH2" className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
    <h2>{name}</h2>
  </div>
  <div id="contenedorP">
    <p>{description} </p>
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
            {date}
          </span>
          <span
            id="span2"
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
          >
            <i
              className="fa-solid fa-location-dot fa-beat"
              style={{ color: "#ffffff" }}
            />{" "}
            {place}
          </span>
        </div>
  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
</div>

  <div id="contenedorSpan">
    <span><i className="fa-solid fa-dollar-sign fa-beat" style={{color: '#1eff00'}} /> {price} </span>
  </div>
</div>

  )
}

export default EventInfo

  