import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { UserContext } from '../contexts/UserContext';


const Login = () => {
  const datosInitialState = {
    email: '',
    pass: '',
  }
  const { user, setUser } = useContext(UserContext)
  const [users, setUsers] = useState([])
  const [datos, setDatos] = useState(datosInitialState)
  const [error, setError] = useState(null)
  const [esregistro, setEsregistro] = useState(false)

  const navigate = useNavigate()

  const procesarDatos = (e) => {
    e.preventDefault()
    const { email, pass } = datos

    if (!email.trim()) {
      setError('Write an email')
      return
    }
    if (!pass.trim()) {
      setError('Enter a password')
      return
    }
    if (pass.length < 6) {
      setError('Write a password with six or more characters')
      return
    }
    if (esregistro) {
      registrar()
    } else {
      login()
    }
  }

  const registrar = async () => {
    console.log('Just a moment...')
    Swal.fire({
      title: 'Sucess',
      text: 'Registered user',
      icon: 'success',
    })
    setUsers([...users, datos])
    setDatos(datosInitialState)
    setError(null)
    setUser(true)
    navigate('/dashboard')
  }

  const login = async () => {
    console.log('Logging in...')
    // Validamos el user
    setUser(true)
    setDatos(datosInitialState)
    setError(null)
    navigate('/dashboard')
  }

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }
return (
    <div className='mt-5'>
      <h3 className='text-center'>{esregistro ? 'Registro' : 'Login'}</h3>
      <hr />
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-8 col-md-6 col-xl-4'>
          <form onSubmit={procesarDatos}>
            {error && <div className='alert alert-danger'>{error}</div>}
            {esregistro && 
            <label className="formlabel">
            Name:
            <input
              name='name'
              type='text'
              className='forminput'
              placeholder='Your name'
              onChange={(e) => handleChange(e)}
              value={datos.nombre}
            />
            </label>
            }
            Email:
            <input
              name='email'
              type='email'
              className='form-control mb-2'
              placeholder='Enter your email'
              onChange={(e) => handleChange(e)}
              value={datos.email}
            />
            Password:
            <input
              name='pass'
              type='password'
              className='form-control mb-2'
              placeholder='Enter your password'
              onChange={(e) => handleChange(e)}
              value={datos.pass}
            />
            
            <button className='btn btn-lg btn-dark w-100  mb-2' type='submit'>
              {esregistro ? 'Register' : 'Login'}
            </button>
            <button
              className='btn btn-sm btn-info w-100  mb-2'
              onClick={() => setEsregistro(!esregistro)}
              type='button'>
              {esregistro ? 'Already in?' : 'You do not have an account yet?'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
