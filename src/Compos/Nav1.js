import React from 'react';
import { Link} from 'react-router-dom'
import { useHistory } from 'react-router';
import  {auth }  from '../firebase';




export default function Nav1({user}){
  const history = useHistory();
  return(
    <nav>
    <div ClassName="nav-wrapper">
    <a class="waves-effect waves-light btn-large"><i class="material-icons left">TODO APP</i></a>
      <ul id="nav-mobile" class="right ">
        { user? <button className="btn waves-effect waves-light" onClick={() =>{ 
         auth.signOut()
         history.push('/')
          
          
          
        }}>
          logout
        </button>
        :
        <>
        <li><Link to="./login">login</Link></li>
        <li><Link to="./signup">signup</Link></li>
        </>
        }
        
        <li>
        

        
        </li>
      </ul>
    </div>
  </nav>

  )
}