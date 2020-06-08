import React from 'react'
import { Link } from 'react-router-dom'

import './styles/PageError.css'
import Error from '../images/503 Error Service Unavailable-pana.svg'
import stars from '../images/stars.svg'

function PageError (props){
return (
    <div className="pageError">
      <img className="errorImg" src={ Error } alt="Error"/>
      <Link className="btn btn-primary" to="/">Back to home</Link>
    </div>
)
}

export default PageError;