import React from 'react';
import { useRef, useState } from 'react';

const Form1 = () => {

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");
    
   

     const submit = (e) =>{

          e.preventDefault();

          alert(`${title}, ${color}`)

          setTitle("");
          setColor("#000000");



    };


  return (
    <div>
        <form onSubmit={submit}>
            <input value={title} type="text" placeholder="color title..." onChange={(event) =>
            
                setTitle(event.target.value)
            
            }/>
            
            <input  value={color} type="color" onChange={(event) =>
            
            setTitle(event.target.value)
        
        }/>

            <button>ADD</button>
        </form>
    </div>
  )
}

export default Form1;
