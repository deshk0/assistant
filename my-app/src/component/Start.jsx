import React from 'react'
import ReactDOM from 'react-dom';
import {SECRET_KEY} from './passwords'


export class Start extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = { 
            login: '',
            password: '',
        };
        
    }
    setLogin(login){
        this.setState({
            login: login
        })
        console.log(login)
    }
    setPassword(password){
        this.setState({
            password: password
        })
        console.log(password)
    }
    onClick(){
        let login = this.state.login
        let password = this.state.password

        fetch(`https://api.jsonbin.io/b`, {
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
                'secret-key': SECRET_KEY,
                'name': `${login}`
            },
            body: JSON.stringify({
                name: login,
                password: password
            })
    
        })

    }
    
    
    render(){
        return(
            <div>
                <LoginForm UserName = {this.setLogin = this.setLogin.bind(this)} />
                <LoginForm UserName = {this.setPassword = this.setPassword.bind(this)} />
                <button onClick={this.onClick = this.onClick.bind(this)} >Отправить</button>
            </div>
        )
    }
}
class LoginForm extends React.Component {//
    constructor(props) {
      super(props);
  
      this.state = {
        emailValid: false,
        value: ''
      };
    }
  
    onEmailChange(emailValid) {
      this.setState({
        emailValid,
      });
    }

    setValue(value){
        this.setState({
            emailValue: value
        })

        this.props.UserName(value)
        //console.log(`${value}`)
    }
  
    render() {
      return (
        <div>
            <div>{this.props.name}</div>
          <LoginInput 

            onValidChange={this.onEmailChange.bind(this)}
            onValue={this.setValue.bind(this)}
            onChange={this.setValue.bind(this)}
            
            
            />
        </div>
      );
    }
}


class LoginInput extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        valid: false,
      };
  
      this.validator = /\w\w/;
    }
  
    onChange(event) {
      const value = event.target.value;
      const valid = this.validator.test(value);
  
      if (valid !== this.state.valid) {
        this.setState({
          valid,
        });

        this.props.onValidChange(valid);
        
      }
      this.props.onValue(value);
    }

  
    render() {
      return (
        <input
          type="text"
          style={{
            border: `1px solid ${this.state.valid ? 'green' : 'red'}`,
          }}
          onChange={this.onChange.bind(this)}
        />
      );
    }
}


function createBin(){
    fetch('https://api.jsonbin.io/b', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
            'secret-key': SECRET_KEY,
        },
        body: JSON.stringify({
          name: {
            first : "Vitya",
            second : "Gay",
          },
            surname: 'Delux'
        })

    })
}
function readBin(){
  fetch('https://api.jsonbin.io/b/5e3ed77c79afb813dc1c1d96', {
      method: 'GET',
      headers:{
        'secret-key': SECRET_KEY,
      },
  })
  .then(response => response.json())
  .then(res => console.log(res))
}

// id = 5e3ed77c79afb813dc1c1d96
window.createBin = createBin;
window.readBin = readBin;
