import React from 'react'
import ReactDOM from 'react-dom';

export class EyeTraningPage extends React.Component {

    onClick(){
        console.log('Проверка')
    }
    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'35px auto 22px auto'}}>Тренировка глаз</div>
                <div class='EyeTraningPage-changing'>
                    <button id='button1' >Разминка</button>
                    <button id='button2' >Восстановление</button>
                </div>
                <div class='EyeTraningPage-trainigsToday'>
                    <div>Тренировок сегодня:</div>
                    <div>1</div>
                </div>
                <div style={{margin:'0 auto'}}>
                    <div onClick={this.onClick = this.onClick.bind(this)} style={{backgroundColor: "transparent",border:'none'}}><img src="./ButtonStart.png"  /></div>
                </div>
                <div style={{margin:'33px auto 0px auto'}}>Нажмите, чтобы начать</div>
            </div>
        )
    }
}