import React, { useEffect, useState } from 'react'
import { useRouteError, Link } from 'react-router-dom'



const Paginacion = (props) => {

  const items = props.items.map((personaje, index) => {
    return <Link to={`/character/${personaje.id}`} className='char__a'>
        <p className='char__names'>{personaje.name}</p>
        <img src={`${personaje.image}`} alt="" class="paginacion_img" />
        <h3 className='char__h3'>{personaje.name}</h3>
      </Link>
  }



  )




  return <div className='char__images'>
  {items}
  </div>
{/* <div>

    <button onClick={props.prevHandler}>Prev</button>
    <button onClick={props.nextHandler}>Next</button>
    <ul className='char__images'>
      {items}
    </ul>
  </div> */}
}

export default Paginacion