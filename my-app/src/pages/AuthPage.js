import React from 'react'
import ReactDOM from 'react-dom';


export class AuthPage extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',

            token: '',
            userId:''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onRegister = this.onRegister.bind(this)
        this.onLogin = this.onLogin.bind(this)
        this.Proverka = this.Proverka.bind(this)



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
        .then(this.props.onButtonClick())
    }
    Proverka(){
        console.log(this.state.token)
        console.log(this.state.userId)

    }


    render(){
        return(
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
                    <button onClick={this.Proverka}>Proverka</button>
                </div>
            </div>
        )
    }
}

export class AuthPage2 extends React.Component{
      render(){
        return(
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
                    <button onClick={this.Proverka}>Proverka</button>
                </div>
            </div>
        )
    }
}