import Cards from '../../components/Cards'
import Checkboxs from '../../components/Checkboxs'
import DivH2 from '../../components/DivH2'
import VistaSelector from '../../components/VistaSelector'
import SearchBar from '../../components/SearchBar'
import Layouts from '../../layouts'
import { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import eventosActions from '../../store/actions/eventosActions'


useDispatch


const Home = () => {

  const eventos = useSelector(store => store.eventos)

  let [eventosFiltrados, setEventosFiltrados] = useState([])

  const dispatch = useDispatch()
  

  useEffect(() => {

    
    // axios.get("src/data/data.json")
    // .then((response) => {
    //   setEventos(response.data.events)
    //   setEventosFiltrados(response.data.events)
    // })

    if(eventos.length == 0) {
      dispatch(eventosActions.get_eventos())
    }else {
      setEventosFiltrados(eventos)
    }
    

  },[eventos])


  return (
    <>
      <Layouts>
      <Carousel/>
      <VistaSelector title="Home" arrowLeft="/stats" arrowRight="/upcomingEvents"/>
      <SearchBar setEventosFiltrados={setEventosFiltrados} />
      <Checkboxs setEventosFiltrados={setEventosFiltrados}/>
      <DivH2 title="Todos nuestros eventos:"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mx-4">
          {eventosFiltrados.map((evento) => (
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

export default Home
