import React from 'react'
import ReactDOM from 'react-dom';

import {Pages} from './component/Pages'
import {Start} from './component/Start'
import { useRoutes } from './routes';
import {BrowserRouter as Router} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';







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
      token: '',
      userId: '',
      
      login: '',
      logout: '',
      


    }
  }
  render(){
    
    return(
      <AuthContext.Provider value={
        this.state.token, this.state.login, this.state.logout, this.state.userId
      }>
        <App />  
      </AuthContext.Provider>
      
    )
  }
  
}
//{this.state.page ==='start' ? <Start /> : <Pages /> }