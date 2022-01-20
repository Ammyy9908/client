import Reacr from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{

  function logout(){
    // localStorage.clear();
    localStorage.clear();
    window.location.href = '/';
}

    return(
        <div className='w3-row-padding header'>
            <div className='w3-col s3'>
            <i class="w3-xxlarge fa fa-home iconHome">  </i>
              <Link to="/"><h3 className='home'>Home</h3></Link>
              </div>
            <div className='logout'>
              <div>
                    <a href="#" onClick={logout}>LOGOUT</a>
              </div>
            </div>
        </div>
)};

export default Header;