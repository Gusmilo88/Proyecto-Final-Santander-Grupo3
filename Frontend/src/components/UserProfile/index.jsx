import React from 'react';
import'./style.css'

const UserProfile = () => {
    return (
        <div>
                <img src="logo.png" alt="Logo" style={{float: 'left'}} />
                <input type="search" placeholder="Buscar..." style={{float: 'right'}} />
                <div style={{float: 'right'}}>
                    <img src="icono.png" alt="Icono" />
                    <span>email@usuario.com</span>
                </div>
       
                       <section>
                    <img src="imagen.png" alt="Imagen del usuario" />
                    <h1>Nombre Completo del Usuario</h1>
                    <p>Pedidos: 0</p>
                    <p>Me Gusta: 0</p>
                    <p>Eventos que Sigue: 0</p>
                </section>
                <section>
                    <h2>Pedidos</h2>
                    <p>¿Buscás tus entradas? Para ver regalos y transferencias, tenés que verificar tu e-mail.</p>
                    <button>Verificá tu e-mail</button>
                    <p>No hay pedidos entrantes</p>
                    <button>Ver pedidos pasados</button>
                </section>
                <section>
                    <h2>Intereses</h2>
                    {/* Aquí puedes agregar los intereses del usuario */}
                </section>
                <section>
                    <h2>Eventos que Sigue</h2>
                    {/* Aquí puedes agregar los eventos que sigue el usuario */}
                </section>
         
        </div>
    );
};

export default UserProfile;
