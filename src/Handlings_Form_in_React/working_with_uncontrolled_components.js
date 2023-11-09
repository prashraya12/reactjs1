import React from 'react';
import { useRef } from 'react';

const Form = () => {

    const txtTitle = useRef();
    const hexColor = useRef();
    
    console.log(txtTitle);

     const submit = (e) =>{

          e.preventDefault();
          const title = txtTitle.current.value;
          const color = hexColor.current.value;

          alert(`${title}, ${color}`)

          txtTitle.current.value = "";
          hexColor.current.value = "";


    }


  return (
    <div>
        <form onSubmit={submit}>
            <input ref={txtTitle}type="text" placeholder="color title..."/>
            
            <input type="color" ref={hexColor}/>

            <button>ADD</button>
        </form>
    </div>
  )
}

export default Form;
