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
                    <div style={{display:'flex',margin:'auto'}} onClick={this.OnSetClick = this.OnSetClick.bind(this)}><SettingsButton /></div>
                    <div style={{display:'flex',margin:'auto 30px'}} onClick={this.OnEyeClick = this.OnEyeClick.bind(this)}><EyeButton /></div>
                    <div style={{display:'flex',margin:'auto'}} onClick={this.OnMpClick = this.OnMpClick.bind(this)}><MyProfileButton /></div>
                </div>
            </div>
        )
    }
}
class EyeButton extends React.Component{
    render(){
        return(
            <div class = "BigMenuButtom">
                <img style={{margin: "20px 18px"}} src="/Images/MenuButtons/EyeIcon.png" />
            </div>
        )
    }
}
class SettingsButton extends React.Component{
    render(){
        return(
            <div class = "SmallMenuButtom">
                <img style={{margin: "12px 10px"}} src="/Images/MenuButtons/EyeIcon.png" />
            </div>
        )
    }
}
class MyProfileButton extends React.Component{
    render(){
        return(
            <div class = "SmallMenuButtom">
                <img style={{margin: "12px 10px"}} src="/Images/MenuButtons/EyeIcon.png" />
            </div>
        )
    }
}






