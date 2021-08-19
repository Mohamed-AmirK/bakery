import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      emailIsValid: regex.test(e.target.value)
    })
  }

  emailIsValidChange = (e) => {
    this.setState({ emailIsValid: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
      passwordIsValid: e.target.value.length > 5
    })
    console.log(e.target.value.length > 5)

  }

  // handleRememberMeChange = (e) => {
  //   this.setState({
  //     rememberMe: e.target.value,
  //     rememberMeIsValid:regex.test(e.target.value),
  //     console.log(rememberMeIsValid)

  //   })
  // }

  // handleSubmit = (e) => {
  //   this.setState({
      
  //   })
  // }



  render() {
    console.log(this.state)
    return (
      <>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleEmailChange} value={this.state.email} />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never</small> */}</div>
          <div className="form-group">
            <label for="exampleInputPassword1">Mot de passe</label>
            <input type="password" className="form-control" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} /></div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" onChange={this.handleRememberMeChange} value={this.state.rememberMe}>Check me</label></div>
          <button type="submit" className="btn btn-primary">Submit</button></form>
      </>
    )
  }
}



export default App;
