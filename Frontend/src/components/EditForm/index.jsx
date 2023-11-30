import "./style.css";
import React, { useState } from "react";

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
        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          <div className="contact-info">
            <h2 className="text-white py-3">
              <strong className="strong-form">CONTACT INFO</strong>
            </h2>
            <label>
              First name:
              <input className="form"
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Last name:
              <input className="form"
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone number:
              <input className="form"
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Addres:
              <input className="form"
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
              />
            </label>
          </div>
<div>
          <div className="change-password">
            <h2 className="text-white py-3">
              <strong className="strong-form">CHANGE PASSWORD</strong>
            </h2>
            <label>
              Old password:
              <input className="form"
                type="password"
                name="contrasenaActual"
                value={formData.contrasenaActual}
                onChange={handleInputChange}
              />
            </label>
            <label>
              New password:
              <input className="form"
                type="password"
                name="nuevaContrasena"
                value={formData.nuevaContrasena}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Confirm new password :
              <input className="form"
                type="password"
                name="nuevaContrasena"
                value={formData.nuevaContrasena}
                onChange={handleInputChange}/>
            </label>
          </div>
          </div>
<div>
          <div className="payment-method">
            <h2 className="text-white py-3">
              <strong className="strong-form">PAYMENT INFORMATION</strong>
            </h2>
            <label className="form">
              Pay with:
              <button>Credit or debit card</button>
              <button>PayPal account</button>
            </label>
            <label className="form">
              Card Number:
              <input
                type="text"
                name="numeroTarjeta"
                value={formData.numeroTarjeta}
                onChange={handleInputChange}/>
            </label >
            <div class="form-label-input-pair">
              <label className="form"
                class="form-label required"
                id="form-label-creditCardExpirationMonth"
                for="input-creditCardExpirationMonth">
                Expiration Date (MM/YY)
              </label>
              <label className="form"
                class="form-label form-label-month"
                for="input-creditCardExpirationMonth">
                Month /
              </label>
              <select
                encrypt="true"
                class="select-input "
                id="input-creditCardExpirationMonth"
                name="field_creditCardExpirationMonth"
                aria-required="true"
                aria-label="Expiration Month"
                aria-describedby="error-creditCardExpirationMonth">
                <option value="">- Select One -</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <label className="form"
              class="form-label form-label-year"
              for="input-creditCardExpirationYear">
              Year
            </label>
            <select
              encrypt="true"
              class="select-input "
              id="input-creditCardExpirationYear"
              name="field_creditCardExpirationYear"
              aria-required="true"
              aria-label="Expiration Year"
              aria-describedby="error-creditCardExpirationMonth">
              <option value="">- Select One -</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
              <option value="2033">2033</option>
              <option value="2034">2034</option>
              <option value="2035">2035</option>
              <option value="2036">2036</option>
              <option value="2037">2037</option>
              <option value="2038">2038</option>
              <option value="2039">2039</option>
              <option value="2040">2040</option>
              <option value="2041">2041</option>
              <option value="2042">2042</option>
              <option value="2043">2043</option>
              <option value="2043">2044</option>
            </select>
            </div>
            &nbsp;
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