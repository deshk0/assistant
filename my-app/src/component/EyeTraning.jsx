import React from 'react'
import ReactDOM from 'react-dom';

export class EyeTraningPage extends React.Component {
    constructor(){
        super()

        this.state = {
            status: 'start'
        }
        
        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        this.setState({
            status: 'process'
        })
    }
    render(){
        return(
            
            <div>{this.state.status ==='start' ? <EyeTraningStart onButtonClick = {this.onClick} /> : <Timer /> }</div>
        )
    }
}

class EyeTraningStart extends React.Component {
    constructor(){
        super()

        this.state = {
            click: true
        }
    }
    onClick(){
        this.setState({
            click: false
        })
        this.props.onButtonClick();
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
                    <div>21</div>
                </div>
                <div style={{margin:'0 auto'}}>
                    <div id="MainButtonStart" onClick={this.onClick = this.onClick.bind(this)}>
                        <div style={{margin:'0 5px 0 0'}}>
                            <div class='ButtonCircle1'>
                                <div class="ButtonCircles1_1"></div>
                                <div class="ButtonCircles1_2"></div>
                            </div>
                            <div class='ButtonCircle2'>
                                <div class="ButtonCircles2_1"></div>
                                <div class="ButtonCircles2_2"></div>
                            </div>
                        </div>
                        <div style={{margin:'0 0 0 10px'}}>
                            <div class='ButtonCircle3'>
                                <div class="ButtonCircles3_1"></div>
                                <div class="ButtonCircles3_2"></div>
                            </div>
                            <div class='ButtonCircle4'>
                                <div class="ButtonCircles4_1"></div>
                                <div class="ButtonCircles4_2"></div>
                            </div>
                        </div>
                        
                    </div>  
                </div>
                <div style={{margin:'33px auto 0px auto'}}>Нажмите, чтобы начать</div>
            </div>
        )
    }
}

class Timer extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { 
          seconds: 5,
          screen: 1
        };
    }
  
    tick() {
        if(this.state.seconds === 0 ){
            this.setState({
                screen: this.state.screen + 1 ,
                seconds: 6
            })
        }
        if(this.state.seconds !== 0){
            this.setState(state => ({
                seconds: state.seconds - 1
              }));
        }else{clearInterval(this.interval)}
    }
    tak(){
        this.setState({
            screen: this.state.screen + 1
        })
    }
    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
    }
  
    render() {
      return (
        <div class='EyeTraningPage'>
            <div style={{margin:'35px auto 22px auto',fontSize:'20px', fontWeight:'bold'}}>Тренировка глаз</div>
            <div style={{margin:'35px auto 55px auto',fontSize:'65px'}}>{this.state.seconds === 0? <audio src="./da.mp3" autoPlay></audio> : this.tick, this.state.seconds}</div>
          {this.state.screen === 1? <ExerciseScreen1 /> :
           this.state.screen === 2? <ExerciseScreen2 /> :
           this.state.screen === 3? <ExerciseScreen3 /> :
           this.state.screen === 4? <ExerciseScreen4 /> :
           this.state.screen === 5? <ExerciseScreen5 /> :
           this.state.screen === 6? <ExerciseScreen6 /> :
           this.state.screen === 7? <ExerciseScreen7 /> :
           this.state.screen === 8? <ExerciseScreen8 /> :
           this.state.screen === 9? <ExerciseScreen9 /> :
           'КОНЕЦ'}
           {this.state.seconds === 0? <audio src="./2.m4a" autoPlay></audio> : ''}
        </div>
      );
    }
  }

class ExerciseScreen1 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Расслабьтесь</div>
                <div style={{margin:'0px auto'}}>
                    <img  src="./Images/Eye/ClosedEye.png"/>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Закройте глаза до сигнала</div>
            </div>
        )
    }
}
class ExerciseScreen2 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Вверх-вниз</div>
                <div style={{margin:'40px auto'}}>
                    <img style={{position:'absolute',left:'165px',bottom:'350px'}}  src="./Images/Eye/Eye.png" />
                    <img  src="./Images/Eye/EyeBack.png"/>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold',textAlign:'center'}}>
                    Плавно переводите взгляд сверху в низ,<br />
                    а мысленно продолжаем движение глаз за макушку головы и подбородок
                </div>
            </div>
        )
    }
}
class ExerciseScreen3 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Расслабьтесь</div>
                <div style={{margin:'40px auto'}}>
                    <img style={{position:'absolute',left:'165px',bottom:'350px'}}  src="./Images/Eye/Eye.png" />
                    <img  src="./Images/Eye/EyeBack.png"/>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold', textAlign:'center'}}>
                    Поморгайте легко и часто,<br />примерно так, как машет крылышками мотылёк
                </div>
            </div>
        )
    }
}
class ExerciseScreen4 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Влево-вправо</div>
                <div style={{margin:'40px auto'}}>
                    <img style={{position:'absolute',left:'165px',bottom:'350px'}}  src="./Images/Eye/Eye.png" />
                    <img  src="./Images/Eye/EyeBack.png"/>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold', textAlign:'center'}}>
                    Плавно переводите взгляд слева на право,<br />а мысленно продолжаем движение глаз за ухо
                </div>
            </div>
        )
    }
}
class ExerciseScreen5 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Часики</div>
                <div style={{margin:'40px auto'}}>
                    <img style={{position:'absolute',left:'165px',bottom:'350px'}}  src="./Images/Eye/Eye.png" />
                    <img  src="./Images/Eye/EyeBack.png"/>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold', textAlign:'center'}}>
                    Представьте циферблад<br /> обозначте на нём 12, 3, 6 и 9 часов<br />
                    и перемещайте взгляд по этим точкам
                </div>
            </div>
        )
    }
}
class ExerciseScreen6 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Круговые вращения</div>
                <div style={{margin:'40px auto'}}>
                    <img style={{position:'absolute',left:'165px',bottom:'350px'}}  src="./Images/Eye/Eye.png" />
                    <img  src="./Images/Eye/EyeBack.png"/>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold',textAlign:'center'}}>
                    Представьте перед собой круг<br />
                    и чётко по его траектории ведите взгляд, рисуя его снова и снова
                </div>
            </div>
        )
    }
}
class ExerciseScreen7 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Расслабтесь</div>
                <div style={{margin:'40px auto'}}>
                    <img style={{position:'absolute',left:'165px',bottom:'350px'}}  src="./Images/Eye/Eye.png" />
                    <img  src="./Images/Eye/EyeBack.png"/>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Закройте глаза до сигнала</div>
            </div>
        )
    }
}
class ExerciseScreen8 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Расслабтесь</div>
                <div style={{margin:'40px auto'}}>
                    <img style={{position:'absolute',left:'165px',bottom:'350px'}}  src="./Images/Eye/Eye.png" />
                    <img  src="./Images/Eye/EyeBack.png"/>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Закройте глаза до сигнала</div>
            </div>
        )
    }
}
class ExerciseScreen9 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Расслабтесь</div>
                <div style={{margin:'40px auto'}}>
                    <img style={{position:'absolute',left:'165px',bottom:'350px'}}  src="./Images/Eye/Eye.png" />
                    <img  src="./Images/Eye/EyeBack.png"/>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>Закройте глаза до сигнала</div>
            </div>
        )
    }
}
