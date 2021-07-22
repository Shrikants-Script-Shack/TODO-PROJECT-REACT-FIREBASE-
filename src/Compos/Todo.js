import React from 'react'
import { useState,useEffect } from 'react';
import  {db }  from '../firebase';
import { useHistory } from 'react-router-dom';



export default function Todo({user}) {
    const [text, settext] = useState('')
    const [mytodo ,settodo] = useState([])
    const history =useHistory();



    useEffect(() => {
        if(user)
        {
        const docRef = db.collection('todos').doc(user.uid)
        var unsubscribe =docRef.onSnapshot(docSnap=>{
            if(docSnap.exists){
                console.log(docSnap.data().todos)
                settodo(docSnap.data().todos)
            }else{
                alert("no docs");
                console.log("no docs")
            }
        })
        }
        else {
            history.push('/login')
        }
        return () => {
            unsubscribe()
        }
    }, [])


    const addtodo=()=>{
        db.collection('todos').doc(user.uid).set(
            {
                todos:[...mytodo,text]
            }
        )
    }

    return (
        <div>
           <div class="input-field col s6 container" >
               <h1>TODO</h1>
           <input type="text" placeholder="ADD TODO" value={text} onChange={(e) =>settext(e.target.value)} />
           <button type="submit" className="btn waves-effect waves-light"  onClick={()=>addtodo()} >
          ADDtodo
        </button>
        <ul className="collection">
            {
              mytodo.map(todo=>{
                  return <li className="collection-item">{todo}</li>
              })
            }
      
    </ul>

       
        </div>
        </div>
    )
}
