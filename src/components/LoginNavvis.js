import React, { useEffect , useRef} from 'react';
import {useState} from 'react';
import {loginNavvis} from '../service/api'
import {Link} from 'react-router-dom'

function useLogin(){

    const [state, setState] = useState(false)
    console.log(state);

    async function login(){
        
        //collecting information for nnavis

        const nameForNavvis = document.getElementById("nameForNavvis").value
        const passwordForNavvis = document.getElementById("passwordForNavvis").value
        const urlForNavvis = document.getElementById("urlForNavvis").value

        console.log(nameForNavvis, passwordForNavvis, urlForNavvis)

        const navvisResponse = await loginNavvis(nameForNavvis, passwordForNavvis, urlForNavvis)      
        

        if(navvisResponse === 200){
            if(state === true){
                localStorage.setItem("nameForNavvis", nameForNavvis)
                localStorage.setItem("passwordForNavvis", passwordForNavvis)
                localStorage.setItem("urlForNavvis", urlForNavvis)
            }        

        var data = [];
        data.push(nameForNavvis);
        data.push(passwordForNavvis);
        data.push(urlForNavvis);

        var data_string = JSON.stringify(data);

        var file = new Blob([data_string],{type:"text"})
        var anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(file);
        anchor.download = "Desktop/save.txt";
        anchor.click();     
        }
        
    }

    const onchangeBtn = () =>{
        setState(!state)
    }

    return {login, onchangeBtn}

}

function LoginNavvis(){

    const {login , onchangeBtn} = useLogin();

    useEffect(()=>{ 
        if (typeof(Storage) !== "undefined") {
            document.getElementById("nameForNavvis").value = localStorage.getItem("nameForNavvis")
            document.getElementById("passwordForNavvis").value = localStorage.getItem("passwordForNavvis")
            document.getElementById("urlForNavvis").value = localStorage.getItem("urlForNavvis")
        } else{
        
        }          
    }, [])

    // useEffect(()=>{
    //     localStorage.removeItem("nameForNavvis");
    //     localStorage.removeItem("passwordForNavvis");
    //     localStorage.removeItem("urlForNavvis");
    // },[])
    
    return(

                    <form className='form'>                    

                        <h2>Credential for Navvis</h2>
                        <label>User name: <input id='nameForNavvis'  type="text" placeholder='name'/> </label><br/>
                    
                        <label>Password:<input id='passwordForNavvis'  type="text" placeholder='password' /> </label><br/>
                        <label>URL: <input id='urlForNavvis'  type="text" placeholder='url' /> </label><br/><br/>  
                         
                        <span>
                              <input className="checkbox"  id="rememberMe" type="checkbox" onChange={onchangeBtn}/>
                                <label className='rememberMeLable'>Remember me</label> 
                        </span>

                        <div className='connectBtn'>
                            <button  type='button'onClick={login}>Submit</button>
                        </div>
                    </form> 
    );
}

export default LoginNavvis;