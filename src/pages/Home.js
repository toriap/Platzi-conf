import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'
import PlatziConfLogoImg from '../images/platziconf-logo.svg'
import Astronauts from '../images/astronauts.svg'


class Home extends Component{
  render(){
    return(
      <div className="home">
      <div className="container">
        <div className="row">
          <div className="home-col col-12 col-md-4">
            <img
              src={PlatziConfLogoImg}
              alt="Platzi Conf Logo"
              className="img-fluid mb-2"
            />

            <h1>Badge Management System</h1>
            <Link className="btn btn-primary" to="/badges">
              Start
            </Link>
          </div>

          <div className="home-col d-none d-md-block col-md-8">
            <img
              src={Astronauts}
              alt="Astronauts"
              className="img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </div>
  )}
}

export default Home;