import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Register = () => {
    const [formSend, changeFormSend] = useState(false)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    
    const emailEnUso =  (email) => {
        console.log(email)
        var usado = users.filter(user => user.email == email);
        console.log(usado)
        if(usado.length===0){
            console.log("no usado")
            return false;
        }
        else{
            console.log("usado")
            return true;
        }
    }

    return (
        <>
            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    password: '',
                    genero:'',
                    fechaNacimiento:'',
                }}

                validate={(valores) => {
                    let errors = {};
                    //validar nombre de usuario
                    if (!valores.nombre) {
                        errors.nombre = 'Escribe un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errors.nombre = "El nombre solo puede contener letras y espacios"
                    }
                    //validar email
                    if (!valores.email) {
                        errors.email = 'Escribe un email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                        errors.email = "El email solo puede contener letras, números, puntos, guión y guión bajo"
                    }  
                    if (emailEnUso(valores.email)) {
                        errors.email = "El email está en uso."
                    }
                    return errors
                }}

                onSubmit={(valores, { resetForm }) => {
                    console.log('Formulario enviado');
                    changeFormSend(true);
                    setUsers(users.push(valores));
                    window.localStorage.setItem("users", JSON.stringify(users));
                    resetForm();
                    
                   
                }}
            >
                {({ errors }) => (
                    <Form className="formLogin">
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <Field
                                type="text"
                                id="nombre"
                                name="nombre"
                                className="formLogin__field" />
                            <ErrorMessage name='nombre' component={() => (
                                <div className='error'>{errors.nombre}</div>
                            )}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="formLogin__field" />
                            <ErrorMessage name='email' component={() => (
                                <div className='error'>{errors.email}</div>
                            )}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="formLogin__field" />
                        </div>
                        <div>
                            <label htmlFor="genero">Género</label>
                            <label>
                                <Field type="radio" name="genero" value="H" id="H"/>Hombre
                            </label>
                            <label>
                                <Field type="radio" name="genero" value="M" id="M"/>Mujer
                            </label>
                            <label>
                                <Field type="radio" name="genero" value="N/S" id="N/S"/>Prefiero no contestar
                            </label>
                        </div>
                        <div>
                            <label>
                                <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                                <Field type="date" name="fechaNacimiento" id="fechaNacimiento" />
                            </label>
                        </div>
                        <button type="submit">Registrarse</button>
                        {formSend && <span className='login__span'>Registrado con éxito</span>}
                        <a href="http://localhost:5173/login">¿Ya tienes cuenta?</a>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Register;

