import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

function Dash({ eventsData }) {
  const [newProduct, setNewProduct] = useState({
    producto: '',
    descripcion: '',
    category: '',
    price: 0,
    capacidad: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Aquí puedes realizar operaciones adicionales, como enviar datos a la API, actualizar el estado, etc.
    console.log('Nuevo producto:', newProduct);
    setNewProduct({
      producto: '',
      descripcion: '',
      category: '',
      price: 0,
      capacidad: 0,
    });
  };

  const calculateChartData = (events) => {
    if (!events || events.length === 0) {
      return {
        labels: [],
        datasets: [],
      };
    }
  
    const categories = [];
    const revenues = [];
  
    events.forEach((event) => {
      const { category, assistance, price } = event;
  
      if (!categories.includes(category)) {
        categories.push(category);
        revenues.push(assistance * price);
      } else {
        const index = categories.indexOf(category);
        revenues[index] += assistance * price;
      }
    });
  
    return {
      labels: categories,
      datasets: [
        {
          label: 'Revenues',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.6)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data: revenues,
        },
      ],
    };
  };
  
  const calculateTableData = (events) => {
    if (!events) {
      return [];
    }
  
    return events.map((event) => {
      const { producto, descripcion, category, price, capacidad } = event;
  
      return {
        producto,
        descripcion,
        category,
        price,
        capacidad,
      };
    });
  };
  

  const chartData = calculateChartData(eventsData);
  const tableData = calculateTableData(eventsData);

  return (
    <div className="container">
      <form onSubmit={handleAddProduct} className="mb-3">
        <h2>Agregar Nuevo Producto</h2>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Nombre del Producto:
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="producto"
            value={newProduct.producto}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Descripción del Producto:
          </label>
          <textarea
            className="form-control"
            id="productDescription"
            name="descripcion"
            value={newProduct.descripcion}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Categoría del Producto:
          </label>
          <input
            type="text"
            className="form-control"
            id="productCategory"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Precio del Producto:
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCapacity" className="form-label">
            Capacidad del Producto:
          </label>
          <input
            type="number"
            className="form-control"
            id="productCapacity"
            name="capacidad"
            value={newProduct.capacidad}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Producto
        </button>
      </form>

      {/* Gráfico de barras */}
      <div className="mb-5">
        <h2>Estadísticas</h2>
        <Bar data={chartData} />
      </div>

      {/* Tabla de productos */}
      <div>
        <h2>Productos</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Capacidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.producto}</td>
                <td>{row.descripcion}</td>
                <td>{row.category}</td>
                <td>${row.price}</td>
                <td>{row.capacidad}</td>
                <td>
                  <button className="btn btn-primary">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dash;
