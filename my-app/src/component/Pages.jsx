import React from 'react'
import ReactDOM from 'react-dom'

import {EyeTraningPage} from './EyeTraning'
import {SettingsPage} from './Settings'
import {MyProfilePage} from './MyProfile'


export class Pages extends React.Component{
    constructor(){
        super()

        this.state = {
            page: 1
        }
    }

    OnEyeClick(){
        this.setState({
            page: 1
        })
        console.log('1')
    }
    OnSetClick(){
        this.setState({
            page: 2
        })
        console.log('2')
    }   
    OnMpClick(){
        this.setState({
            page: 3
        })
        console.log('3')
    }

    render(){
        return(
            <div id='Area'>
                <div id = "Content">
                {
                    this.state.page === 1? <EyeTraningPage /> : 
                    this.state.page === 2? <SettingsPage />:<MyProfilePage />
                }
                </div>
                <div id = 'Menu'>
                    <div style={{display:'flex'}}>
                        <div style={{display:'flex',margin:'auto',marginTop:'20px'}} onClick={this.OnSetClick = this.OnSetClick.bind(this)}><SettingsButton /></div>
                        <div style={{display:'flex',margin:'auto 30px'}} onClick={this.OnEyeClick = this.OnEyeClick.bind(this)}><EyeButton /></div>
                        <div style={{display:'flex',margin:'auto',marginTop:'20px'}} onClick={this.OnMpClick = this.OnMpClick.bind(this)}><MyProfileButton /></div>
                    </div>
                </div>
            </div>
        )
    }
}
class EyeButton extends React.Component{
    render(){
        return(
            <div class = "BigMenuButtom">
                <img style={{width:'40px',margin:"auto",filter:'invert(1)'}} src="./eyeIcon.svg" alt="oпa" />
            </div>
        )
    }
}
class SettingsButton extends React.Component{
    render(){
        return(
            <div class = "SmallMenuButtom">
                <img style={{width:'45px',margin:"auto",filter:'invert(1)'}} src="./Settings.svg" alt="oпa" />
            </div>
        )
    }
}
class MyProfileButton extends React.Component{
    render(){
        return(
            <div class = "SmallMenuButtom">
                <img style={{width:'23px',margin:"auto",filter:'invert(1)'}} src="./Account.svg" alt="oпa" />
            </div>
        )
    }
}






