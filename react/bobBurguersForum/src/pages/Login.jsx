import React from 'react'
import { Formik } from 'formik';


const Login = () => {
  return (
    <>
      <Formik
        initialValues={{
          nombre:'',
          email:'',
          password:''
        }}
        onSubmit={() => {
          console.log('Formulario enviado');
        }}
      >
        {({values, handleSubmit}) => {
          <form className='formLogin' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id='nombre' name='nombre' value={values.nombre} />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input type="email" id='email' name='email'  value={values.email}/>
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input type="password" id='password' name='password' value={values.password}/>
            </div>
            <button type='submit'>Enviar</button>
          </form>
        }}
      </Formik>
    </>
  );
}


export default Login;