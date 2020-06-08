import React from "react"

class BadgeForm extends React.Component{
  // state = {};//esto se hace por que al iniciar la pagina leera el form y como esta vacio dara error asi que inicializamos state asi sea vacio para que no nos suelte error la pagina
  // handleChange =(e) =>{
  //   // console.log({ 
  //   //   name: e.target.name,
  //   //   value: e.target.value, 
  //   // });

  //   this.setState({
  //     [e.target.name]: e.target.value,//con el [e.target.name] el programa reconocera el name si es fisrtName, lastName etc y lo guardara en su rspectiva variable
  //   })
  // };

  handleClick =(e) =>{
    console.log("Button was clicked");
  }
  // handleSubmit =(e) =>{
  //   e.preventDefault();
  //   console.log("Form was submitted");
  //   console.log(this.state)
  // }
  render () {
    return (
    <div>
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input onChange={this.props.onChange} 
          className="form-control" 
          type="text" 
          name="firstName"
          value={this.props.formValues.firstName}//esto se pone para que el valor tomando en el form no se agregue en 2 sitios distintos yq ue me ocupe mas memoria
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input onChange={this.props.onChange} 
          className="form-control" 
          type="text" 
          name="lastName"
          value={this.props.formValues.lastName}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input onChange={this.props.onChange} 
          className="form-control" 
          type="email" 
          name="email"
          value={this.props.formValues.email}
          />
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <input onChange={this.props.onChange} 
          className="form-control" 
          type="text" 
          name="jobTitle"
          value={this.props.formValues.jobTitle}
          />
        </div>

        <div className="form-group">
          <label>Twitter</label>
          <input onChange={this.props.onChange} 
          className="form-control" 
          type="text" 
          name="twitter"
          value={this.props.formValues.twitter}
          />
        </div>

        <button 
        onClick={this.handleClick} 
        className="btn btn-primary">
        save
        </button>

        {this.props.error && (
          <p className="text-danger">{this.props.error.message}</p>)}
      </form>
    </div>
    )
  }
}

export default BadgeForm;