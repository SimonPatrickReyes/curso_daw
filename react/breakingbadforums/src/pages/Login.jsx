import React, { useState } from 'react'

const Login = () => {

    const datosInitialState = {
        email: "",
        pass: ""
    }
    const [datos, setDatos] = useState(datosInitialState)

    const [esregistro, setEsregistro] = useState(false)

    const {user, setUser} =useContext(UserContext)
    const navigate = useNavigate()



    const procesarDatos = () => { }

    const registrar =()=>{
        setUser(true)
        navigate("/dashboard")    
    }
    const login =()=>{
        setUser(true)
        navigate("/dashboard")  
    }


    return (
        <div>
            <h3>{esregistro ? "Register" : "Login"}</h3>
            <form onSubmit={procesarDatos}>
                <input
                    name='email'
                    type='email'
                    placeholder='Introduce email'
                    onChange={(e) => handleChange(e)}
                    value={datos.email}
                />

                <input
                    name='pass'
                    type='password'
                    placeholder='Introduce password'
                    onChange={(e) => handleChange(e)}
                    value={datos.pass}
                />
                <button className='btn btn dark w-100 mb-2' type='submit'>{esregistro ? "Register" : "Login"}</button>
                <button className='btn btn-sm btn-info w-100 mb-2'
                    onClick={() => setEsgistro(!esregistro)}
                    type="button"></button>


            </form>
        </div>
    )
}

export default Login