import React, { useState } from 'react';
import EditForm from '/src/components/EditForm';
import './style.css';

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        console.log('Ícono de edición clickeado');
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    return (
        <div className="relative">
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

            <div className="relative z-10">
                <div className="floating-user-section">
                    <div className="d-flex align-items-center">
                        <img className='imgUser' src="/src/assets/images/user.png" alt="Imagen del usuario" />
                        <h1 className="ml-3 text-small">Nombre del Usuario</h1>
                        <i
                            className="fa-sharp fa-solid fa-pen"
                            style={{ color: "#ffffff", cursor: "pointer" }}
                            onClick={handleEditClick}
                        ></i>
                    </div>
                    <div className="d-flex">
                        <p className="mr-3 text-white text-small">Pedidos: 0</p>
                        <p className="mr-3 text-white text-small">Me Gusta: 0</p>
                        <p className="mr-3 text-white text-small">Eventos que Sigue: 0</p>
                    </div>
                </div>

                {isEditing && <EditForm onCancel={handleCancelEdit} />}

                <div className="centered-content mb-5">
                    <div className="mb-5">
                        <h2><strong>Pedidos</strong></h2>
                        <div className="py-3">
                            <p>¿Buscás tus entradas?</p>
                            <p>Para ver regalos y transferencias, tenés que verificar tu e-mail.</p>
                            <button>Verificá tu e-mail</button>
                            <button>Ver pedidos pasados</button>
                        </div>
                    </div>
                    <div className="contInteres">
                        <h2 id='h2UserProfile'><strong>Intereses:</strong></h2>
                        <div className="contImages">
                            <img className="interest-image" src="/src/assets/images/cinemauser.jpg" alt="Cinema" />
                            <img className="interest-image" src="/src/assets/images/fooduser.jpg" alt="Food" />
                            <img className="interest-image" src="/src/assets/images/partyuser.jpg" alt="Party" />
                        </div>
                    </div>



                    <div className="mb-5 mt-5">
                        <h2 id='h2UserProfile'><strong>Eventos que sigues:</strong></h2>
                        <div className="contImages">
                            <img className='imgEventosSigues' src="/src/assets/images/eventosUser1.jpg" alt="" />
                            <img className='imgEventosSigues' src="/src/assets/images/eventosUser2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default UserProfile;
