import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'
import Carousel from '../../components/Carousel'
import { useEffect, useState } from 'react'
import axios from 'axios'



const UpcomingEvents = () => {


  //Acá filtramos los eventos que tengan date mayores a "currenDate"
  function getFutureEvents(events, currentDate) {

    return events.filter(event => new Date(event.date) > new Date(currentDate));

  }

  const [events, setEvents] = useState([]);
  const [futureEvents, setFutureEvents] = useState([]);

  useEffect(() => {
    // axios.get("src/data/data.json")
    // .then((response) => {
    //   setEvents(response.data.events)

    //   const filteredFutureEvents = getFutureEvents(response.data.events, "2023-03-10");
    //   setFutureEvents(filteredFutureEvents);
    // })
  }, [])

  return (
    <>
      <Layouts>
      <Carousel/>
      <VistaSelector title="Upcoming Events" arrowLeft="/" arrowRight="/pastEvents"/>
      <SearchBar/>
      <Checkboxs/>
      <DivH2 title="¡Próximas experiencias emocionantes!"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mx-4">
          {futureEvents.map((evento) => (
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

export default UpcomingEvents
