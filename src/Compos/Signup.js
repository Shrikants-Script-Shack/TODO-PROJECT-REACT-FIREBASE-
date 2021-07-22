import React ,{useState} from 'react';

import  {auth }  from '../firebase';

import { useHistory } from 'react-router-dom';


export default function Signup(){
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const history = useHistory();
    const handlesubmit= async(e)=>{
        e.preventDefault();
        console.log(email,password)
        try {
            const result= await auth.createUserWithEmailAndPassword(email,password);
       alert(`user with email ${result.user.email} created`);
            history.push('/')
        } catch (error) {
            alert(error.message);
        }
       

    }
  return(
    <div>
         
         <form onSubmit={(e) =>handlesubmit(e)}>
         <div className="input-field col s6 container">
         <h1>plz signup!!</h1>
          <input type="email" placeholder="email" value={email} onChange={(e) =>setemail(e.target.value)}  /> 
          <input type="password" placeholder="pass" value={password} onChange={(e) =>setpassword(e.target.value)}  /> 
          <button type="submit" className="btn waves-effect waves-light"  >
          Submit
        </button>
        </div>
         </form>

     </div>

  )
}