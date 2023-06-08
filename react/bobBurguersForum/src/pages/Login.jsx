import React from 'react';
import { Formik, Form, Field } from 'formik';

const Login = () => {
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

          if (!valores.nombre) {
            errors.nombre='Escribe un nombre'
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
            errors.nombre = "El nombre solo puede contener letras y espacios"
          }

          return errors 
        }}

        onSubmit={(valores) => {
          console.log('Formulario enviado');
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <Form className="formLogin" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field 
              type="text" 
              id="nombre" 
              name="nombre" 
              onChange={handleChange} 
              onBlur={handleBlur}
              className="formLogin__field"/>
              {errors.nombre && <div className='error'>{errors.nombre}</div>}
            </div>
            <div>
              <label htmlFor="email">email</label>
              <Field 
              type="email"
               id="email" 
               name="email" 
               onChange={handleChange}
               onBlur={handleBlur} 
               className="formLogin__field"/>
            </div>
            <div>
              <label htmlFor="password">password</label>
              <Field 
              type="password" 
              id="password" 
              name="password" 
              onBlur={handleBlur}
              onChange={handleChange} 
              className="formLogin__field"/>
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;

