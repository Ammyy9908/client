import React from 'react';
import {Link} from 'react-router-dom'
import image from '../images/background.jfif' 
import image1 from '../images/background1.jfif' 
import image2 from '../images/background2.jpg' 
import image3 from '../images/background3.jpg' 

function FrontPage(){

    return(
        <>
      <div className='w3-row-padding'>
          <div className='w3-quarter sideBody'>
            <h2 className='heading'>Library</h2>
            <div className='sourceBody'>
            <h3>Source</h3>
            <ul>
             <Link to="/login">  <li>Cribwise</li></Link>
                <li>Monitor</li>
            </ul>
            </div>
         
          <div className='destinationBody'>
            <h3>Destination</h3>
            <ul>
                <li>Navvis</li>
                <li>Faro</li>
            </ul>
          </div> 
          </div>
          <div className='w3-threequarter w3-display-container'>
             <img className='imageBackground' src={image2} alt="Lights"/>
          </div>     
     </div>      
        </>
    )
}

export default FrontPage;