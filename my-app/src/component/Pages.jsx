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
                    <div><button onClick={this.OnEyeClick = this.OnEyeClick.bind(this)}>EYE</button></div>
                    <div><button onClick={this.OnSetClick = this.OnSetClick.bind(this)}>SET.</button></div>
                    <div><button onClick={this.OnMpClick = this.OnMpClick.bind(this)}>MP</button></div>
                </div>
            </div>
        )
    }
}









/*

ВАРИАНТ 1

export class Pages extends React.Component{
    constructor(){
        super()

        this.state = {
            page: 0
        }
    }

    render(){
        return(
            <div>
                <EyeTraningPage />
                <SettingsPage />
                <MyProfilePage />
            </div>
        )
    }
}
*/
