import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
  const [formSend, changeFormSend] = useState(false)
  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          email: '',
          password: ''
        }}

        validate={(valores)=>{
          let errors ={};

          //validar nombre de usuario
          if (!valores.nombre) {
            errors.nombre='Escribe un nombre'
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
            errors.nombre = "El nombre solo puede contener letras y espacios"
          }

          //validar email
          if (!valores.email) {
            errors.email='Escribe un email'
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
            errors.email = "El email solo puede contener letras, números, puntos, guión y guión bajo"
          }
          return errors 
        }}

        onSubmit={(valores,{resetForm}) => {
          resetForm();
          console.log('Formulario enviado');
          changeFormSend(true)
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
              className="formLogin__field"/>
              <ErrorMessage name='nombre' component={()=>(
                <div className='error'>{errors.nombre}</div>
              )}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <Field 
              type="email"
               id="email" 
               name="email" 
               className="formLogin__field"/>
               <ErrorMessage name='nombre' component={()=>(
                <div className='error'>{errors.email}</div>
              )}
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <Field 
              type="password" 
              id="password" 
              name="password" 
              className="formLogin__field"/>
            </div>
            <button type="submit">Iniciar sesión</button>
            {formSend && <span className='login__span'>Logeado con éxito</span>} 
            <a href="http://localhost:5173/register">¿Todavía no estas registrado?</a>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;

