import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'
import Carousel from '../../components/Carousel'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PastEvents = () => {

  function getPastEvents(events, currentDate) {

    return events.filter(event => new Date(event.date) < new Date(currentDate));

  }

  let [events, setEvents] = useState([]);
  let [pastEvents, setPastEvents] = useState([]); // Almacenamos solo los eventos pasados con el filtrado.
  let [eventosFiltrados, setEventosFiltrados] = useState([])

  useEffect(() => {
    // axios.get("src/data/data.json")
    //   .then((response) => {
    //     setEvents(response.data.events);

    //     let filteredPastEvents = getPastEvents(response.data.events, "2023-03-10");
    //     setPastEvents(filteredPastEvents);
    //     setEventosFiltrados(response.data.events)
    //   });
  }, []);


  return (

    <>
      <Layouts>
      <Carousel/>
      <VistaSelector title="Past Events" arrowLeft="/upcomingEvents" arrowRight="/contact"/>
      <SearchBar setEventosFiltrados={setEventosFiltrados} />
      <Checkboxs setEventosFiltrados={setEventosFiltrados}/>
      <DivH2 title="Experiencias que hicieron historia:"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mx-4">
          {pastEvents.map((evento) => (
            <Cards
              key={evento._id}
              evento={evento}
              buttonText="See more"
              pathText={"/details/" + evento._id}
            />
          ))}
        </div>
      </Layouts>
    </>
    
  )
}

export default PastEvents
