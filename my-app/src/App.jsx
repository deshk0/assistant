import React from 'react'
import ReactDOM from 'react-dom';

import {Pages} from './component/Pages'
import {Start} from './component/Start'
import { useRoutes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage';
import { AuthPage2 } from './pages/AuthPage';







class App extends React.Component{
  constructor(){
    super()

  }
  
  render(){
    const routes = useRoutes(false)
    return(
      <Router>
        <div>
          {routes}
        </div>
      </Router>
    )
  }
  
}


export class MyApp extends React.Component{
  constructor(){
    super()

    this.state = {
      tokenState: false,

      token: '',
      userId: '',
      
      login: '',
      logout: '',
      
    }
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onRegister = this.onRegister.bind(this)
    this.onLogin = this.onLogin.bind(this)

  }
  componentDidMount(){
    if(localStorage.getItem('userData') !== null){
      this.setState({
        tokenState: true
      })
    }
  }

  onChangeEmail(event){
    this.setState({
      email: event.target.value,
    })
    
    console.log(this.state.email)
  }
  onChangePassword(event){
    this.setState({
      password: event.target.value,
    })

    console.log(this.state.password)
  }
  onRegister(){
    fetch(`/api/auth/register`, {
        method: 'POST',
        headers:{
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
    })
  }
  onLogin(){
    fetch(`/api/auth/login`, {
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    //.then(response => this.setState({
    //    token: response.token,
    //    userId: response.userId
    //}))
    .then(response => localStorage.setItem('userData', JSON.stringify({
      token: response.token,
      userId: response.userId
    })))
    .then(localStorage.getItem('userData') !== null ? '' : this.setState({tokenState: true}))
  }

  
  render(){
    
    return(
      <div>
        {this.state.tokenState === false ?             
            <div>
                <h1>Auth Page</h1>
                <div>
                    <input
                    id="InputEmail"
                    onChange={this.onChangeEmail}
                    
                    ></input>
                    <input
                    id="InputPassword"
                    onChange={this.onChangePassword}
                    
                    ></input>
                    <button onClick={this.onRegister}>Register</button>
                    <button onClick={this.onLogin}>Login</button>
                </div>
            </div> : <Pages /> }
      </div>
      
    )
  } 
  
}
//{this.state.page ==='start' ? <Start /> : <Pages /> }
//const routes = useRoutes(false)