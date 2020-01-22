import React from 'react'
import ReactDOM from 'react-dom';

export class EyeTraningPage extends React.Component {
    constructor(){
        super()

        this.state = {
            status: 'start', ///////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            mode: 'warm up'
        }
        
        this.onClick = this.onClick.bind(this)
        this.goBack = this.goBack.bind(this)
        this.changeMode1 = this.changeMode1.bind(this)
        this.changeMode2 = this.changeMode2.bind(this)


    }

    onClick(){
        this.setState({
            status: 'process'
        })
    }
    goBack(){
        this.setState({
            status: 'start'
        })
    }
    changeMode1(){
        this.setState({
            mode: 'warm up'
        })
    }
    changeMode2(){
        this.setState({
            mode: 'recovery'
        })
    }
    render(){
        return(
            <div>
            {
                this.state.status ==='start' ? 
                <EyeTraningStart onButtonClick = {this.onClick} onChangeClick1 = {this.changeMode1} onChangeClick2 = {this.changeMode2}/> 
                :
                this.state.mode === 'warm up' ? <Timer onButtonClick = {this.goBack} /> 
                :
                this.state.mode === 'recovery' ? 'Работает' 
                :'penis' 
             } 
            
            </div>
        )
    }
}

class EyeTraningStart extends React.Component {
    constructor(){
        super()

        this.state = {
            click: true,
            check1: true,
            check2: false
        }
    }
    onClick(){
        this.setState({
            click: false
        })
        this.props.onButtonClick();
    }
    changeMode1(){
        this.setState({
            check1: true,
            check2: false
        })
        this.props.onChangeClick1();
    }
    changeMode2(){
        this.setState({
            check2: true,
            check1: false
        })
        this.props.onChangeClick2();
    }

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'35px auto 22px auto'}}>Тренировка глаз</div>
                <div class='EyeTraningPage-changing'>
                    <div 
                    id='button1' 
                    onClick={this.changeMode1 = this.changeMode1.bind(this)}
                    style={{backgroundColor:`${ this.state.check1 === true && this.state.check2 === false ? "#6b6b6f" : "#333336" }`}}
                    >
                        <div style={{margin:'auto 0'}}>Разминка</div>
                    </div>
                    <div 
                    id='button2'
                    onClick={this.changeMode2 = this.changeMode2.bind(this)}
                    style={{backgroundColor:`${ this.state.check2 === true && this.state.check1 === false ? "#6b6b6f" : "#333336" }`}}
                    >
                        <div style={{margin:'auto 0'}}>Восстановление</div>
                    </div>
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
                                <div class="ButtonCircles4_3"></div>
                                <div class="ButtonCircles4_3_1"></div>
                                <div class="ButtonCircles4_3_2"></div>
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
          seconds: 15,
          screen: 3,
          goBack: false
        };
    }
  
    tick() {
        if(this.state.screen === 10){
            clearInterval(this.interval)
            
        }
        if(this.state.seconds === 0 ){
            this.setState({
                screen: this.state.screen + 1 ,
                seconds: 16
            })
        }
        if(this.state.seconds !== 0){
            this.setState(state => ({
                seconds: state.seconds - 1   ////!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              }));
        }else{clearInterval(this.interval)}
    }
    tak(){
        this.setState({
            screen: this.state.screen + 1
        })
    }
    Start(){
        this.interval = setInterval(() => this.tick(), 1000);
    }
    onClick(){
        this.setState({
            goBack: true
        })
        this.props.onButtonClick();

    }
  
    render() {
      return (
        <div class='EyeTraningPage'>
            <div style={{margin:'35px auto 22px auto',fontSize:'20px', fontWeight:'bold'}}>Тренировка глаз</div>
            <div style={{margin:'35px auto 55px auto',fontSize:'65px'}}>
                {this.state.screen === 0 || this.state.screen > 9? '' : this.state.seconds}
            </div>
        {
            this.state.screen === 0? <StartScreen onButtonClick={this.Start = this.Start.bind(this)} /> :
            this.state.screen === 1? <ExerciseScreen1 /> :
            this.state.screen === 2? <ExerciseScreen2 /> :
            this.state.screen === 3? <ExerciseScreen3 /> :
            this.state.screen === 4? <ExerciseScreen4 /> :
            this.state.screen === 5? <ExerciseScreen5 /> :
            this.state.screen === 6? <ExerciseScreen6 /> :
            this.state.screen === 7? <ExerciseScreen7 /> :
            this.state.screen === 8? <ExerciseScreen8 /> :
            this.state.screen === 9? <ExerciseScreen9 /> :
            
            <FinalScreen onButtonClick = {this.onClick.bind(this)}/>
        }
           {this.state.seconds === 0? <audio src="./2.m4a" autoPlay></audio> : this.tick}
        </div>
      );
    }
  }

class StartScreen extends React.Component{
    constructor(){
        super()

        this.state ={
            status: false
        }
    }
    onClick(){
        this.setState({
            status: true
        })
        this.props.onButtonClick()
    }

    render(){
        return(
            <div onClick={this.onClick = this.onClick.bind(this)}>
                Knopka

            </div>
        )
    }
}
class ExerciseScreen1 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>
                    Расслабьтесь
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>
                    <div class="Eye">
                        <div class="Eye1" style={{
                            position:'relative',
                            left:'4px',
                        }}></div> 
                        <div class="Pupil" style={{
                            animationName:'none',
                            margin:'0px auto'
                        }}></div>
                        <div class="PupilSmall" style={{
                            animationName:'none',
                            margin:'0px auto'
                        }}></div> 
                        <div class="ClosedEye2" style={{
                            
                            animationName:'eyeAnimationClose',
                            animationDuration:'0.1s',
                            animationTimingFunction:'ease-in-out',
                            animationIterationCount:'1',
                            animationDelay:'1s',
                            animationFillMode:'backwards',
                            
                            position:'relative',
                            bottom:'300px',
                            left:'1px',
                            
                        }}>
                       </div> 
                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>
                    Закройте глаза до сигнала
                </div>
            </div>
        )
    }
}
class ExerciseScreen2 extends React.Component{

    render(){
        return(
            
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>
                    Вверх-вниз
                </div>
                <div style={{margin:'0px auto'}}>
                    <div class="Eye">
                        <div class="Eye1" style={{
                            margin:'0 auto'
                        }}></div>    
                        <div class="Pupil" style={{
                            animationName:'eyeAnimationUpDown',
                            animationDuration:'4',
                            animationIterationCount:'10',
                        }} ></div>                  
                        <div class="PupilSmall" style={{
                            animationName:'smallEyeAnimationUpDown',
                            animationDuration:'4',
                            animationIterationCount:'10',
                        }}></div>
                        <div class="Background" style={{
                            transform:'rotate(44deg)',
                            margin:'0 auto',
                            bottom:'303px'
                        }}></div>
                    </div>
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
                <div style={{margin:'0px auto'}}>
                    <div class="Eye">
                        <div class="Eye1" style={{
                            margin:'0px auto'
                        }}></div>    
                        <div class="Pupil" style={{
                            animationName:'none',
                            margin:'0px auto'
                        }}>
                        </div>
                        <div class="PupilSmall" style={{
                            animationName:'none',
                            margin:'0px auto'
                        }}></div>
                        <div class="Background" style={{
                            margin:'0px auto'
                        }}></div>
                        <div class="ClosedEye2"
                        style={{
                            position:'relative',
                            bottom:'496px',
                            margin:'0px auto',
                            borderTop:'6px solid rgb(61, 148, 242)', 
                            borderLeft:"6px solid rgb(61, 148, 242)",
                            animationName:'eyeAnimationClip',
                            animationDuration:"1s",
                            WebkitAnimationIterationCount:'20',
                            animationTimingFunction:"linear"
                        }}></div>
                        
                    
                    </div>
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
                <div style={{margin:'0px auto'}}>
                    <div class="Eye">
                        <div class="Eye1"></div>    
                        <div class="Pupil"></div>
                        <div class="PupilSmall"></div>
                    </div>
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
                <div style={{margin:'0px auto'}}>
                    <div class="Eye">
                        <div class="Eye1"></div>    
                        <div class="Pupil"></div>
                        <div class="PupilSmall"></div>
                    </div>
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
                <div style={{margin:'0px auto'}}>
                    <div class="Eye">
                        <div class="Eye1"></div>    
                        <div class="Pupil"></div>
                        <div class="PupilSmall"></div>
                    </div>
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
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>
                    Восьмерка
                </div>
                <div style={{margin:'0px auto'}}>
                    <div class="Eye">
                        <div class="Eye1"></div>    
                        <div class="Pupil" style=
                        {{
                            animationName:'eyeAnimationEight',
                            animationDuration:'3.6s',
                            animationIterationCount:'10',
                            animationTimingFunction:'linear'
                        }}>
                            
                        </div>
                        <div class="PupilSmall" style=
                        {{
                            animationName:'smallEyeAnimationEight',
                            animationDuration:'3.6s',
                            animationIterationCount:'10',
                            animationTimingFunction:'linear'
                        }}>
                        </div>
                        <div class="Background"></div>
                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold',textAlign:'center'}}>
                    Пусть витя текст напишет, мне в падлу
                </div>
            </div>
        )
    }
}
class ExerciseScreen8 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>
                    Ходики
                </div>
                <div style={{margin:'0px auto'}}>
                    <div class="Eye">
                        <div class="Eye1"></div>    
                        <div class="Pupil"></div>
                        <div class="PupilSmall"></div>
                        
                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold',textAlign:'center'}}>
                    Мне надоело писать текст припашу витю
                </div>
            </div>
        )
    }
}
class ExerciseScreen9 extends React.Component{

    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'bold'}}>
                    Вблизи вдали
                </div>
                <div style={{margin:'0px auto'}}>
                    <div class="Eye">
                        <div style={{

                            animationName:'nearAndFar1',
                            animationDuration:'5s',
                            animationIterationCount:'10',
                            opacity:'0',



                            

                        }}><img src="./1111.png" /></div>
                        <div style={{

                            animationName:'nearAndFar2',
                            animationDuration:'5s',
                            animationIterationCount:'10',
                            opacity:'1',
                            
                            position:'relative',
                            bottom:'297px'


                        }}><img src="./2222.png" /></div>
                        
                    </div>
                </div>
                <div style={{margin:'100px auto 0px auto',fontSize:'16px',fontWeight:'bold',textAlign:'center'}}>
                    Протяните вашу  который стоит далеко от вас,<br />
                    теперь объекта на ладонь и наоборот
                </div>
            </div>
        )
    }
}

class FinalScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            status: false
        }
    }

    onClick(){
        this.setState({
            status: true
        })
        this.props.onButtonClick();
    }


    render(){
        return(
            <div class='EyeTraningPage'>
                <div style={{margin:'40px auto 0px auto',fontSize:'18px',fontWeight:'bold'}}>
                    Готово!
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'normal'}}>
                    Тренировка завершена
                </div>
                <div style={{margin:'0px auto'}}>
                    <div class="AcceptCircle">
                        <div class="AcceptCheck">
                            <div class="AcceptCheck1"></div>
                        </div>
                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'thin',textAlign:'center', width:'250px',height:'35px',backgroundColor:"#6b6b6f",borderRadius:'50px'}}>
                    <div onClick={this.onClick = this.onClick.bind(this)} style={{margin:' 9px'}}>Вернуться на главную</div>
                </div>
            </div>
        )
    }
}