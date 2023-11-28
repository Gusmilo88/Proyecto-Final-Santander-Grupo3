import React, { useState } from "react";
import "./style.css";

function Checkbox(props) {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

  const imagenesPorCategoria = {
    Concert: "/src/assets/images/concert.jpg",
    Food: "/src/assets/images/food.png",
    Cinema: "/src/assets/images/cinema.jpg",
    Museum: "/src/assets/images/museum.png",
    Books: "/src/assets/images/books.jpg",
    Race: "/src/assets/images/race.jpg",
    Party: "/src/assets/images/party.jpg",
  };

  const actualizarCheckboxChange = (event) => {
    const categoriaSeleccionada = event.target.value;
    let nuevasCategoriasSeleccionadas;
    if (categoriasSeleccionadas.includes(categoriaSeleccionada)) {
      nuevasCategoriasSeleccionadas = categoriasSeleccionadas.filter(
        (categoria) => categoria !== categoriaSeleccionada
      );
    } else {
      nuevasCategoriasSeleccionadas = [
        ...categoriasSeleccionadas,
        categoriaSeleccionada,
      ];
    }
    setCategoriasSeleccionadas(nuevasCategoriasSeleccionadas);
    props.onCategoryChange(nuevasCategoriasSeleccionadas); // Invoca la función pasada como prop con las categorías seleccionadas.
  };

  const renderCheckboxes = () => {
    return props.categorias.map((categoria) => (
      <div
        key={categoria}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center"
      >
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="category-checkbox visually-hidden"
            type="checkbox"
            value={categoria}
            onChange={actualizarCheckboxChange}
            id={`checkbox-${categoria}`}
            checked={categoriasSeleccionadas.includes(categoria)}
          />
          <label
            className={`category-checkbox-label relative inline-block -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[7rem] w-[17rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]`}
            htmlFor={`checkbox-${categoria}`}
          >
            <img
              src={imagenesPorCategoria[categoria]}
              alt={categoria}
              className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-300 ${
                categoriasSeleccionadas.includes(categoria)
                  ? "grayscale-0"
                  : "grayscale"
              }`}
              id="checkboxImage"
            />
            <div className="w-full h-full object-cover absolute top-0 left-0 grayscale transition-all duration-300">
              <span
                id="spanCheckbox"
                className="absolute inset-0 flex items-center justify-center text-white"
              >
                {categoria}
              </span>
            </div>
          </label>
        </div>
      </div>
    ));
  };

  return (
    <div className="col-12 col-lg-9">
      <div
        id="category-checkboxes"
        className="d-flex flex-column flex-md-row align-items-center"
      >
        {renderCheckboxes()}
      </div>
    </div>
  );
}

export default Checkbox;
