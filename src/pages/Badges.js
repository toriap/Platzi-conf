import React from "react"
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import confLogo from "../images/badge-header.svg"
import BadgesList from "../components/BadgesList"
import MiniLoader from "../components/MiniLoader"
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import api from '../api'

class Badges extends React.Component{
state = {
  loading: true,
  error: null,
  data: undefined
};

componentDidMount(){//va a compenzar la peticion a la api
  this.fetchData()

  this.intervarlId = setInterval(this.fetchData, 5000);
}

componentWillUnmount(){
  clearInterval(this.intervarlId)
}

fetchData = async () => {
  this.setState({ loading: true, error: null })//comienza con loading: true y cancelando el error

  try{//aqui damos 2 opciones en caso de que obtengamos los datos vamos por try y le damos los datos y en caso de catch imprimimos el error
    const data = await api.badges.list()
    this.setState({loading: false, data: data})
  } catch(error){
    this.setState({loading: false, error: error})
  }

}

  render() {
    if (this.state.loading === true && !this.state.data){
      return <PageLoading />;
    }

    if (this.state.error){
      return <PageError error={this.state.error} />
    }


    console.log("2/4. render()")
    return(
      <React.Fragment>

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badages__container">
              <img className="Badge_conf-logo" 
              src={confLogo} 
              alt="Conf logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              
              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges;