import React, { useState } from 'react';
import './style.css';

const Checkbox = (props) => {
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
    props.onCategoryChange(nuevasCategoriasSeleccionadas);
  };

  const renderCheckboxes = () => {
    return props.categorias.map((categoria) => (
      <div
        key={categoria}
        className="lg:w-full md:w-full w-full mx-auto"
      >
        <input
          className="category-checkbox visually-hidden"
          type="checkbox"
          value={categoria}
          onChange={actualizarCheckboxChange}
          id={`checkbox-${categoria}`}
          checked={categoriasSeleccionadas.includes(categoria)}
        />
        <label
          className={`category-checkbox-label relative flex flex-col items-center justify-center rounded border border-solid border-neutral-300 cursor-pointer transition-all duration-300 ${
            categoriasSeleccionadas.includes(categoria)
              ? 'border-2 border-blue-500'
              : ''
          }`}
          htmlFor={`checkbox-${categoria}`}
        >
          <img
            src={imagenesPorCategoria[categoria]}
            alt={categoria}
            className={`w-full h-20 lg:h-26 xl:h-32 object-cover block ${categoriasSeleccionadas.includes(categoria) ? 'grayscale-0' : 'grayscale-100'}`}
            id="checkboxImage"
          />
          <div className="h-14 text-center">
            <span
              id="spanCheckbox"
              className="text-white text-lg lg:text-xl xl:text-2xl"
            >
              {categoria}
            </span>
          </div>
        </label>
      </div>
    ));
  };

  return (
    <div className="p-3">
      <div
        id="category-checkboxes"
        className="grid grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {renderCheckboxes()}
      </div>
    </div>
  );
};

export default Checkbox;

