import { useState, useEffect } from "react";
import Layouts from "../../layouts";
import Tables from "../../components/Tables";
import VistaSelector from "../../components/VistaSelector";
import axios from 'axios';

const Stats = () => {

  //Para sacar MAYOR porcentaje:
  let [highestAttendanceEvent, setHighestAttendanceEvent] = useState(null);
  let [highestAttendancePercentage, setHighestAttendancePercentage] = useState(0);

  //Para sacar el MENOR porcentaje:
  let [lowestAttendanceEvent, setLowestAttendanceEvent] = useState(null);
  let [lowestAttendancePercentage, setLowestAttendancePercentage] = useState(Infinity); 

  //Para sacar el que tiene MÁS capacidad:
  let [largestCapacityEvent, setLargestCapacityEvent] = useState(null);
  let [largestCapacity, setLargestCapacity] = useState(0);

  //Para sacar los eventos FUTUROS:
  let [upcomingEvents, setUpcomingEvents] = useState([]);

  //Para sacar los eventos PASADOS:
  let [pastEvents, setPastEvents] = useState([]);


  let [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('src/data/data.json')
      .then(response => {
        
        // Obetenemos todos los eventos
        let events = response.data.events;

        // Encuentra el evento con el MAYOR porcentaje de asistencia
        let maxAttendanceEvent = null;
        let maxAttendancePercentage = 0;

        for (let event of events) {
         let attendancePercentage = (event.assistance / event.capacity) * 100;

        if (attendancePercentage > maxAttendancePercentage) {
          maxAttendancePercentage = attendancePercentage;
          maxAttendanceEvent = event;
        }
          // Encuentra el evento con el MENOR porcentaje de asistencia
        if (attendancePercentage < lowestAttendancePercentage) {
          lowestAttendancePercentage = attendancePercentage;
          lowestAttendanceEvent = event;
        }

        // Si la capacidad actual es mayor, actualizamos largestCapacity y largestCapacityEvent con los nuevos valores.
        if (event.capacity > largestCapacity) {
          largestCapacity = event.capacity;
          largestCapacityEvent = event;
        }
      }

      //Sacamos la fecha del JSON
      const currentDate = new Date(response.data.currentDate);

      //Filtramos para tener los eventos FUTUROS
      const futureEvents = events.filter(event => new Date(event.date) > currentDate);

      //Mostramos solamente 5 eventos del FUTURO
      const upcoming = futureEvents.slice(0, 5);

      //Filtramos para tener los eventos PASADOS
      const pastEvents = events.filter(event => new Date(event.date) < currentDate);

      //Mostramos solamente 5 eventos del PASADO
      const past = pastEvents.slice(0, 5);


      //Seteamos con los nuevos valores
      setHighestAttendanceEvent(maxAttendanceEvent);
      setHighestAttendancePercentage(maxAttendancePercentage);
      setLowestAttendanceEvent(lowestAttendanceEvent);
      setLowestAttendancePercentage(lowestAttendancePercentage);
      setLargestCapacityEvent(largestCapacityEvent);
      setLargestCapacity(largestCapacity);
      setUpcomingEvents(upcoming);
      setPastEvents(past);



      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, []);


  return (
    <>
      <Layouts>
        <VistaSelector title="Stats" arrowLeft="/contact" arrowRight="/"/>
        <Tables events={events} highestAttendanceEvent={highestAttendanceEvent} highestAttendancePercentage={highestAttendancePercentage} lowestAttendanceEvent={lowestAttendanceEvent} lowestAttendancePercentage={lowestAttendancePercentage} largestCapacityEvent={largestCapacityEvent} largestCapacity={largestCapacity} upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
      </Layouts>
    </>
  );
};

export default Stats;
