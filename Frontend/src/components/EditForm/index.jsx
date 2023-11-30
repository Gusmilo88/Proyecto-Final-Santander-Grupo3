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
                <span className="close" onClick={onCancel}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <div className="contact-info">
                    <h2 className="text-white py-3"><strong>INFORMACION DE CONTACTO</strong></h2>
                        <label>
                            Nombre:
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
                        </label>
                        <label>
                            Apellido:
                            <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} />
                        </label>
                        <label>
                            Teléfono:
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleInputChange} />
                        </label>
                        <label>
                            Domicilio:
                            <input type="text" name="direccion" value={formData.direccion} onChange={handleInputChange} />
                        </label>
                    </div>

                    <div className="change-password">
                    <h2 className="text-white py-3"><strong>CAMBIAR CONTRASEÑA</strong></h2>
                        <label>
                            Contraseña Actual:
                            <input type="password" name="contrasenaActual" value={formData.contrasenaActual} onChange={handleInputChange} />
                        </label>
                        <label>
                            Nueva Contraseña:
                            <input type="password" name="nuevaContrasena" value={formData.nuevaContrasena} onChange={handleInputChange} />
                        </label>
                        
                    </div>

                    <div className="payment-method">
                        <h2 className="text-white py-3"><strong>METODO DE PAGO</strong></h2>
                        <label>
                            Número de Tarjeta:
                            <input type="text" name="numeroTarjeta" value={formData.numeroTarjeta} onChange={handleInputChange} />
                        </label>
                        <label>
                            CVC:
                            <input type="text" name="cvc" value={formData.cvc} onChange={handleInputChange} />
                        </label>
                        <label>
                            Fecha de Expiración:
                            <input type="text" name="fechaExpiracion" value={formData.fechaExpiracion} onChange={handleInputChange} />
                        </label>
                        <label>
                            Tipo de Tarjeta:
                            <select name="tipoTarjeta" value={formData.tipoTarjeta} onChange={handleInputChange}>
                                <option value="visa">Visa</option>
                                <option value="mastercard">MasterCard</option>
                                <option value="americanExpress">American Express</option>
                            </select>
                        </label>
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

