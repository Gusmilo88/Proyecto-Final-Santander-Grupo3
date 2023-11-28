import React, { useState } from 'react';
import EditForm from '/src/components/EditForm';
import './style.css';

const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    // Function to handle the click event of the edit icon
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

            <div className="relative z-10 ">
                <div className="floating-user-section">
                    <div className="d-flex align-items-center">
                        <img src="/src/assets/images/user.png" alt="Imagen del usuario" />
                        <h1 className={`ml-3 text-small`}>Nombre del Usuario</h1>
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


                {isEditing && (
                    <EditForm onCancel={handleCancelEdit} />
                )}

                <div className="centered-content mb-5">
                    <div className="mb-5 ">
                        <h2> <strong>Pedidos</strong></h2>
                        <div className="py-3">
                            <p>¿Buscás tus entradas? </p>
                            <p>Para ver regalos y transferencias, tenés que verificar tu e-mail.</p>
                            <button>Verificá tu e-mail</button>
                            <button>Ver pedidos pasados</button>
                        </div>
                    </div>
                    <div className="mb-5 mt-5">
                        <h2><strong>Intereses</strong></h2>
                        <div className="py-3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus ut unde voluptates,  </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus ut unde voluptates,  </p>
                            {/*Food checkbox*/}
                            <div
                                className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                            >

                                <label
                                    className="category-checkbox-label relative inline-block -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[7rem] w-[17rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    htmlFor="checkboxFood"
                                >
                                    <img
                                        src="/src/assets/images/food.png"
                                        alt="Concert"
                                        className="w-full h-full object-cover absolute top-0 left-0 grayscale transition-all duration-300"
                                        id="checkboxImage"
                                    />
                                    <div className="w-full h-full object-cover absolute top-0 left-0 grayscale transition-all duration-300">
                                        <span id="spanCheckbox" className="absolute inset-0 flex items-center justify-center text-white">
                                            FOOD
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 mt-5">
                        <h2><strong>Eventos que Sigue</strong></h2>
                        <div className="py-3">
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
