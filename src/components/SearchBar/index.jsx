import { useEffect, useRef, useState } from "react";
import "./style.css";
import axios from "axios";

const SearchBar = ({setEventosFiltrados}) => {

  let [eventos, setEventos] = useState([])



  let searchInputEl = useRef(null)


  function mostrarValue() {
    
    let arrayFiltrado = eventos.filter((evento) => evento.name.toLowerCase().includes(searchInputEl.current.value.toLowerCase()))
    setEventosFiltrados(arrayFiltrado)
  }



  useEffect(() => {
    // axios.get("src/data/data.json")
    // .then((response) => {
    //   setEventos(response.data.events)
    //   setEventosFiltrados(response.data.events)
    // })
  },[])


  return (
    <div role="searchBar">
      {/*Barra de buscar*/}
      <div className="m-4 fle h-full flex justify-end items-center gap-4">
        <div className="relative mb-4 flex w-72 flex-wrap items-stretch">
          <input
            onChange={mostrarValue}
            ref={searchInputEl}  /*Acá relacionamos con useRef*/
            id="inputSearch"
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-black dark:focus:border-black"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="button-addon1"
          />
          {/*Search button*/}
          <button
            className="relative z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
