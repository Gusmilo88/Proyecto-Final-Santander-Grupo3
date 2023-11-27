import React from 'react';
import './style.css'

const UserProfile = () => {
    return (
        <div className="relative">
            {/* Video de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/src/assets/video/octagon.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 pt-5">
                <div style={{ float: 'right' }}>
                    <img src="icono.png" alt="Iconousuario" />
                    <span>email@usuario.com</span>
                </div>


                <div className="floating-user-section">
                    <img src="/src/assets/images/user.png" alt="Imagen del usuario" />
                    <h1>Nombre Completo del Usuario</h1>
                    <div className="d-flex">
                        <p className="mr-3 text-white">Pedidos: 0</p>
                        <p className="mr-3 text-white">Me Gusta: 0</p>
                        <p className="mr-3 text-white">Eventos que Sigue: 0</p>
                    </div>
                </div>

                <div className="centered-content mt-5 mb-5">
                    <div className="mb-5 mt-5 ">
                        <h2> <strong>Pedidos</strong></h2>
                        <div className="py-3 ">
                            <p>¿Buscás tus entradas? Para ver regalos y transferencias, tenés que verificar tu e-mail.</p>
                            <button>Verificá tu e-mail</button>
                            <button>Ver pedidos pasados</button>
                        </div>
                    </div>
                    <div className="mb-5 mt-5">
                        <h2><strong>Intereses</strong></h2>
                        <div className="py-3 ">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus ut unde voluptates,  </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus ut unde voluptates,  </p>
                        </div>
                    </div>
                    <div className="mb-5 mt-5">
                        <h2><strong>Eventos que Sigue</strong></h2>
                        <div className="py-3 ">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus ut unde voluptates,  </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus ut unde voluptates,  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UserProfile;
