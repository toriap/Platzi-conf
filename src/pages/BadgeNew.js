import React from "react";
import md5 from 'md5'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"
import PageLoading from "../components/PageLoading"
import api from '../api'


class BadgeNew extends React.Component{
  state={
    loading: false,
    error: null,
    form: {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
  }};

  handleChange = e =>{
    // const nextForm = this.state.form //primera forma de actualizar los datos en el state
    // nextForm[e.target.name] = e.target.value;
    this.setState({
      // form: nextForm, primera forma de actualizar los datos en el state
      form : {
        ...this.state.form, 
        [e.target.name] : e.target.value,
        avatarURL: `https://www.gravatar.com/avatar/${md5(e.target.value)}?d=identicon&s=200`,
      },
    });
  };

  handleSubmit = async e =>{
    e.preventDefault()
    this.setState({loading: true, error:null})
    try{
      await api.badges.create(this.state.form)
      this.setState({loading: false});


      this.props.history.push('/badges');

    } catch (error){
      this.setState({loading: false, error: error});
    }
  }

  render(){
    if (this.state.loading){
      return <PageLoading />
    }
    return (
      <React.Fragment>

        <div className="BadgeNew__hero">
      <img className="img-fluid BadgeNew__hero-image" src={header} alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
              firstName={this.state.form.firstName || 'FRIST_NAME'}
              lastName={this.state.form.lastName || 'LAST_NAME'}
              twitter={this.state.form.twitter || 'twitter'}
              jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
              email={this.state.form.email || 'EMAIL'}
              avatarURL="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" 
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;