import React, { useEffect} from 'react';
import {useState} from 'react';
import {loginCribwise, loginNavvis} from '../service/api'
import {Link} from 'react-router-dom'
import Main from './Main'

function useLogin(){
    const [state, setState] = useState(false)
    const [cribwiseStatus, setCribwiseStatus] = useState(400)
    const [connectCribwiseOk, setConnectCribwiseOK] = useState(true)

        async function login(){       
            //collect information for cribwise
            const nameForCribwise = document.getElementById("nameForCribwise").value
            console.log("nameForCribwise", nameForCribwise)
            const passwordForCribwise = document.getElementById("passwordForCribwise").value
            const urlForCribwise = document.getElementById("urlForCribwise").value

            if(nameForCribwise == "" && passwordForCribwise == "" &&  urlForCribwise == "" ){
                alert("Please fill the fields")
            }

            const cribwiseResponse = await loginCribwise(nameForCribwise, passwordForCribwise, urlForCribwise)
            if(cribwiseResponse === 200){
                alert("You have scuessfully logged in to Cribwise")
                setConnectCribwiseOK(false);
                if(state === true){
                    localStorage.setItem("nameForCribwise", nameForCribwise)
                    localStorage.setItem("passwordForCribwise", passwordForCribwise)
                    localStorage.setItem("urlForCribwise", urlForCribwise)
                }        

            // var data = [];
            // data.push(nameForCribwise);
            // data.push(passwordForCribwise);
            // data.push(urlForCribwise);
            

            // var data_string = JSON.stringify(data);

            // var file = new Blob([data_string],{type:"text"})
            // var anchor = document.createElement("a");
            // anchor.href = URL.createObjectURL(file);
            // anchor.download = "Desktop/save.txt";
            // anchor.click();     
            }else{
                alert("please check your credentials");
            }       
        }
        const onchangeBtn = () =>{
            setState(!state)
        }
    return {login, onchangeBtn, connectCribwiseOk}
}

//333333333333333333333333333333333333333333333333333333333333333333333

function useNavvisLogin(){

    const [state, setState] = useState(false)
    const [statusCodeNavvis, setStatusCodeNavvis] = useState(400);
    const [connectNavvisOk, setConnectNavvisOK] = useState(true)
    console.log(state);

        async function loginNavvis1(){
            //collecting information for nnavis
            const nameForNavvis = document.getElementById("nameForNavvis").value
            const passwordForNavvis = document.getElementById("passwordForNavvis").value
            const urlForNavvis = document.getElementById("urlForNavvis").value

            console.log(nameForNavvis, passwordForNavvis, urlForNavvis)

            const navvisResponse = await loginNavvis(nameForNavvis, passwordForNavvis, urlForNavvis)      
            setStatusCodeNavvis(navvisResponse)
            console.log('disable button inside function:', connectNavvisOk)
        
            if(navvisResponse === 200){
                setConnectNavvisOK(false);
                alert("You have scuessfully logged in to Navvis");
                console.log('disable button inside if:', connectNavvisOk)
                if(state === true){
                    localStorage.setItem("nameForNavvis", nameForNavvis)
                    localStorage.setItem("passwordForNavvis", passwordForNavvis)
                    localStorage.setItem("urlForNavvis", urlForNavvis)
                }  
            // var data = [];
            // data.push(nameForNavvis);
            // data.push(passwordForNavvis);
            // data.push(urlForNavvis);

            // var data_string = JSON.stringify(data);

            // var file = new Blob([data_string],{type:"text"})
            // var anchor = document.createElement("a");
            // anchor.href = URL.createObjectURL(file);
            // anchor.download = "Desktop/save.txt";
            // anchor.click();     
            }if(navvisResponse === 401){
                alert("please check your credentials");
            }      
        }
        const onchangeBtn1 = () =>{
            setState(!state)
        }
      return {loginNavvis1, onchangeBtn1, connectNavvisOk}
}

//333333333333333333333333333333333333333333333333333333333333333333333

function LoginCribwise(){
const {login , onchangeBtn, connectCribwiseOk} = useLogin();
const {loginNavvis1 , onchangeBtn1, connectNavvisOk} = useNavvisLogin();
console.log('disable button inside value:', connectNavvisOk)



    useEffect(()=>{ 
        if (typeof(Storage) !== "undefined") {
            document.getElementById("nameForCribwise").value = localStorage.getItem("nameForCribwise")
            document.getElementById("passwordForCribwise").value = localStorage.getItem("passwordForCribwise")
            document.getElementById("urlForCribwise").value = localStorage.getItem("urlForCribwise")
            document.getElementById("nameForNavvis").value = localStorage.getItem("nameForNavvis")
            document.getElementById("passwordForNavvis").value = localStorage.getItem("passwordForNavvis")
            document.getElementById("urlForNavvis").value = localStorage.getItem("urlForNavvis")
        } else{
        
        }          
    }, [])

    useEffect(()=>{
        localStorage.removeItem("nameForCribwise");
        localStorage.removeItem("passwordForCribwise");
        localStorage.removeItem("urlForCribwise");
    },[])
    
    return(
            <div className='w3-row'>
                    {/* Navvis Form */}
                <div className='w3-col s6 container'>
                    <div className='screen'>
                        <div class="screen__content">
                            <h2 className='headings'>Credential for Cribwise</h2>
                            <form className='login'>
                            <div class="login__field">
                                <i class="login__icon fas fa fa-user"></i>
                                <input id='nameForCribwise' required type="text" className='login__input' placeholder='Enter User NAme' />
                            </div>
                            <div class="login__field">
					            <i class="login__icon fas fa fa-lock"></i>
                                <input id='passwordForCribwise' required   type="text" className='login__input' placeholder='password' />
                            </div>
                            <div class="login__field">
					            <i class="login__icon fas fa fa-lock"></i>
                                <input id='urlForCribwise' required   type="text" className='login__input' placeholder='url' />
                            </div>
                            <span>
                                <input className="checkbox"  id="rememberMe" type="checkbox" onChange={onchangeBtn}/> 
                                <label className='rememberMeLable'>Remember me</label>
                            </span>  <br/>                      
                            
                                <button className='button login__submit' type='button'onClick={login}>
                                <span class="button__text">Log In Now</span>
				            	<i class="button__icon fas fa fa-chevron-right"></i>
                                </button>
                            </form>  
                        </div> 
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>		
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
                {/* Navvis Form */}
                <div className='w3-col s6 container'>
                    <div className='screen'>
                        <div class="screen__content">
                        <h2 className='headings'>Credential for Navvis</h2>
                        <form className='login'>           
                        <div class="login__field">
                            <i class="login__icon fas fa fa-user"></i>         
                            <input id='nameForNavvis' required   type="text" className='login__input' placeholder='Enter User Name'/>
                        </div>
                        
                        <div class="login__field">
                            <i class="login__icon fas fa fa-lock"></i>   
                            <input id='passwordForNavvis' required   type="text" className='login__input' placeholder='password' />
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa fa-user"></i> 
                            <input id='urlForNavvis' required type="text" className='login__input' placeholder='url' />
                        </div>
                        <span>
                            <input className="checkbox"  id="rememberMe" type="checkbox" onChange={onchangeBtn1}/>
                            <label className='rememberMeLable'>Remember me</label> 
                        </span> <br/>
                        <button className='button login__submit' type='button'onClick={loginNavvis1}>
                                <span class="button__text">Log In Now</span>
				            	<i class="button__icon far fa fa-chevron-right"></i>
                        </button>
                        </form> 
                        </div> 
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>		
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
           <center>
                <div className='w3-row'>
                    <div className= 'w3-center connectBtnDiv'>
                        <Link  to="/details" >
                            <button type='button' id="connectBtn" disabled={connectCribwiseOk===true|| connectNavvisOk===true?true:false}  className='buttonConnect button login__submit'>Connect
                                <i class="button__icon far fa fa-chevron-right"></i>
                            </button>
                        </Link> 
                    </div>
                </div>    
            </center>    
        </div>
    );
}

export default LoginCribwise;