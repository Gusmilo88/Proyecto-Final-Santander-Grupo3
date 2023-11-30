import React, { useState } from "react";
import "./style.css";

const EditForm = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
    contrasenaActual: "",
    nuevaContrasena: "",
    numeroTarjeta: "",
    cvc: "",
    fechaExpiracion: "",
    tipoTarjeta: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCancel}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <div className="upper-section">
            <div className="contact-info">
              <h2 className="text-white py-3">
                <strong>CONTACT INFO</strong>
              </h2>
              <label>
              First name:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Last name:
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone number:
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Addres:
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
              />
            </label>
            </div>

            <div className="change-password">
              <h2 className="text-white py-3">
                <strong>CHANGE PASSWORD</strong>
              </h2>
              {/* Resto de los campos para cambiar contraseña */}
            </div>
          </div>

          <div className="lower-section">
            <div className="payment-method">
              <h2 className="text-white py-3">
                <strong>PAYMENT INFORMATION</strong>
              </h2>
              {/* Resto de los campos de información de pago */}
            </div>
          </div>

          <button className="btn-editForm" type="submit">
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;