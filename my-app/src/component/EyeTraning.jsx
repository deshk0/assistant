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
          seconds: 1,
          screen:  0,
          start: false,
          goBack: false,
        };
    }
  
    tick() {
        if(this.state.screen === 10){
            clearInterval(this.interval)
            
        }
        if(this.state.seconds === 0){
            this.setState({
                screen: this.state.screen + 1 ,
                seconds: 21
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
            <div class="timer"style={{margin:'35px auto 55px auto',fontSize:'65px'}}>
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
        document.getElementById("myBtn").disabled = true;
        this.props.onButtonClick()
    }

    render(){
        return(
            <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{margin:'10px',textAlign:'center'}}>Рекомендации</div>
                
                <div style={{margin:'10px',textAlign:'center'}}>
                    В комплексе набор упражнений, 
                    во время которых нужно смотреть в направления,
                    указываемые точкой.
                </div>

                <div style={{margin:'10px',textAlign:'center'}}>
                    Точка показывает только направление — взгляд перемещайте до упора,
                    но не сильно.
                </div>

                <div style={{margin:'10px',textAlign:'center'}}>
                    В крайних точках задерживайте взгляд на секунду.
                </div>

                <div style={{margin:'10px',textAlign:'center'}}>
                    После выполнения каждого упражнения можно легонько зажмуриться или
                    поморгать пару секунд – 
                    это помогает расслабиться глазам.
                </div>

                <div style={{margin:'10px',textAlign:'center'}}>
                    Общее время упражнения: 3 минуты 25 секунд.
                </div>

                <div style={{margin:'30px 10px 10px 10px',textAlign:'center'}}>Больше не показывать</div>
                <button id='myBtn' onClick={this.onClick = this.onClick.bind(this)}
                    style={{
                        margin:'10px auto',
                        textAlign:'center',
                        width:'170px',
                        height:'35px',
                        backgroundColor:"#6b6b6f",
                        borderRadius:'10px',
                        border: 'none',
                        font: 'inherit',
                        color: 'inherit',
                        
                    }}>Начать
                </button>
                
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
                    <img src="./Eye.svg" style={{height:'300px', width:'300px',position:'relative',bottom:'73px'}} />

                        <div class="Pupil" style={{
                            animationName:'none',
                            margin:'0px auto',
                            bottom:"249px",
                            left:'5px',
                        }}></div>
                        <div class="PupilSmall" style={{
                            animationName:'none',
                            margin:'0px auto',
                            bottom:"303px",
                            left:'5px',

                        }}></div> 
                       
                       <img src="./EyeBlue.svg" style={{
                            animationName:'eyeAnimationClose',
                            animationDuration:'0.1s',
                            animationTimingFunction:'ease-in-out',
                            animationIterationCount:'1',
                            animationDelay:'0.5s',
                            animationFillMode:'backwards',

                            

                            height:'300px',
                            width:'300px',
                            position:'relative',
                            bottom:'485px'

                        }}/>
                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',}}>
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
                    <img src="./Eye.svg" style={{height:'300px', width:'300px',position:'relative',bottom:'73px'}} />
 
                        <div class="Pupil" style={{
                            bottom:'253px',
                            animationName:'eyeAnimationUpDown',
                            animationDuration:'4',
                            animationIterationCount:'10',
                            
                            
                        }} ></div>                  
                        <div class="PupilSmall" style={{
                            bottom:'307px',
                            animationName:'smallEyeAnimationUpDown',
                            animationDuration:'4',
                            animationIterationCount:'10',
                            

                        }}></div>
                        <div class="Background" style={{
                            transform:'rotate(44deg)',
                            margin:'0 auto',
                            bottom:'420px'
                        }}></div>
                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',textAlign:'center'}}>
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

                        <img src="./Eye.svg" style={{height:'300px', width:'300px',position:'relative',bottom:'73px',right:'3px',}} />
                        <div class="Pupil" style={{
                            animationName:'nichego',
                            bottom:'250px',
                        }}></div>
                        <div class="PupilSmall" style={{
                            animationName:'nichego',
                            bottom:'305px',
                        }}></div>
                        <img src="./EyeBlue.svg" style={{
                            height:'300px',
                            width:'300px',
                            position:'relative',
                            bottom:'485px',
                            right:'3px',
                            animationName:'eyeAnimationClip',
                            animationDuration:'0.3s',
                            animationIterationCount:"100",
                            animationTimingFunction:'linear'
                            }} />

                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px', textAlign:'center'}}>
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
                    <img src="./Eye.svg" style={{height:'300px', width:'300px',position:'relative',bottom:'73px'}} />
 
                        <div class="Pupil" style={{
                            bottom:'253px',
                            animationName:'eyeAnimationLeftRight',
                            animationDuration:'4s',
                            animationIterationCount:'10',
                            
                            
                        }} ></div>                  
                        <div class="PupilSmall" style={{
                            bottom:'307px',
                            animationName:'smallEyeAnimationLeftRight',
                            animationDuration:'4s',
                            animationIterationCount:'10',
                            

                        }}></div>
                        <div class="Background" style={{
                            transform:'rotate(44deg)',
                            margin:'0 auto',
                            bottom:'420px'
                        }}></div>
                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px', textAlign:'center'}}>
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
                    <img src="./Eye.svg" style={{height:'300px', width:'300px',position:'relative',bottom:'73px'}} />
 
                        <div class="Pupil" style={{
                            bottom:'253px',
                            animationName:'eyeAnimationClock',
                            animationDuration:'4s',
                            animationIterationCount:'10',
                            animationTimingFunction:'cubic-bezier(0.52,-0.05, 0.45, 1.08)'
                            
                           
                            
                            
                        }} ></div>                  
                        <div class="PupilSmall" style={{
                            bottom:'307px',
                            animationName:'smallEyeAnimationClock',
                            animationDuration:'4s',
                            animationIterationCount:'10',
                            animationTimingFunction:'cubic-bezier(0.52,-0.05, 0.45, 1.08)'
                            
                           
                            

                        }}></div>
                        <div class="Background" style={{
                            transform:'rotate(44deg)',
                            margin:'0 auto',
                            bottom:'420px'
                        }}></div>
                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px', textAlign:'center'}}>
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
                    <img src="./Eye.svg" style={{height:'300px', width:'300px',position:'relative',bottom:'73px'}} />
 
                        <div class="Pupil" style={{
                            
                            bottom:'253px',
                            animationName:'eyeAnimationCircle',
                            animationDuration:'2.5s',
                            animationIterationCount:'1000',
                            animationTimingFunction:'linear'
                         
                        }} ></div>                  
                        <div class="PupilSmall" style={{
                            
                            bottom:'307px',
                            animationName:'smallEyeAnimationCircle',
                            animationDuration:'2.5s',
                            animationIterationCount:'1000',
                            animationTimingFunction:'linear'

                        }}></div>
                        <div class="Background" style={{
                            transform:'rotate(44deg)',
                            margin:'0 auto',
                            bottom:'420px'
                        }}></div>
                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',textAlign:'center'}}>
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
                        <img src="./Eye.svg" style={{height:'300px', width:'300px',position:'relative',bottom:'73px'}} />
 
                        <div class="Pupil" style={{
                            
                            bottom:'253px',
                            animationName:'eyeAnimationEight',
                            animationDuration:'3s',
                            animationIterationCount:'1000',
                            animationTimingFunction:'linear'
                         
                        }} ></div>                  
                        <div class="PupilSmall" style={{
                            
                            bottom:'307px',
                            animationName:'smallEyeAnimationEight',
                            animationDuration:'3s',
                            animationIterationCount:'1000',
                            animationTimingFunction:'linear'

                        }}></div>
                        <div class="Background" style={{
                            transform:'rotate(44deg)',
                            margin:'0 auto',
                            bottom:'420px'
                        }}></div>
                        <img src="./Infinity.svg" style={{height:'300px', width:'300px',position:'relative',bottom:'495px'}} />
                        <div class="TrajectoryDot" style={{
                            
                            bottom:'655px',
                            left:'-2px',
                            animationName:'trajectoryDot',
                            animationDuration:'3s',
                            animationIterationCount:'1000',
                            animationTimingFunction:'linear'

                        }}></div>

                    </div>
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',textAlign:'center'}}>
                    Рисуйте перед собой перевернутую восьмерку,
                    <br/> или знак бесконечности.
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
                    Диагонали
                </div>
                <div style={{margin:'0px auto'}}>
                    <div class="Eye">
                        <img src="./Eye.svg" style={{height:'300px', width:'300px',position:'relative',bottom:'73px'}} />
 
                        <div class="Pupil" style={{
                            
                            bottom:'253px',
                            animationName:'eyeAnimationHourglass',
                            animationDuration:'2.8s',
                            animationIterationCount:'10',
                            animationTimingFunction:'linear'
                         
                        }} ></div>                  
                        <div class="PupilSmall" style={{
                            
                            bottom:'307px',
                            animationName:'smallEyeAnimationHourglass',
                            animationDuration:'2.8s',
                            animationIterationCount:'10',
                            animationTimingFunction:'linear'

                        }}></div>
                        <div class="Background" style={{
                            transform:'rotate(44deg)',
                            margin:'0 auto',
                            bottom:'420px'
                        }}></div>
                    </div>
                </div>

                <div style={{margin:'0px auto 0px auto',fontSize:'16px',textAlign:'center'}}>
                    Посмотрите в верхний левый угол, затем в левый нижний
                    теперь в правый верхний и в правый нижний
                    <br />и снова повторяйте траекторию 
                    
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
                            animationDuration:'3s',
                            animationIterationCount:'10',
                            animationTimingFunction:'linear'   

                        }}><img src="./background.svg" style={{height:'157px'}} /></div>
                        <div style={{

                            animationName:'nearAndFar2',
                            animationDuration:'3s',
                            animationIterationCount:'10',
                    
                            position:'relative',
                            bottom:'113px',
                            left:'81px',
                            animationTimingFunction:'linear'


                        }}><img src="./hand.svg" style={{width:'125px'}} /></div>
                        
                    </div>
                </div>
                <div style={{margin:'auto 0px auto',fontSize:'16px',textAlign:'center'}}>
                    Протяните перед собой руку 
                    <br />сфокусируйте взгляд на ней,
                    а теперь переводите взгляд на предмет вдали и обратно.
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
                    <img src="./right.svg" alt='Sosi' style={{width:'105px',margin:'50px 0', filter:'invert(1)'}} />
                </div>
                <div style={{margin:'0px auto 0px auto',fontSize:'16px',fontWeight:'thin',textAlign:'center', width:'250px',height:'35px',backgroundColor:"#6b6b6f",borderRadius:'50px'}}>
                    <div onClick={this.onClick = this.onClick.bind(this)} style={{margin:' 9px'}}>Вернуться на главную</div>
                </div>
            </div>
        )
    }
}