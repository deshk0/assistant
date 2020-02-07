import React from 'react'
import ReactDOM from 'react-dom';

import {Pages} from './component/Pages'
import {Start} from './component/Start'



export class MyApp extends React.Component{
  constructor(){
    super()

    this.state = {
      page: 'start',


    }
  }

  render(){
    return(
      <div>
    
      {this.state.page ==='start' ? <Start /> : <Pages /> }
      
      </div>
      
    )
  }
  
}