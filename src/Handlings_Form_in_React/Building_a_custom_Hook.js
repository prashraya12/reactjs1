
// #building a custom hHook
import React from 'react';
import { useState } from 'react';


function useInput(initialValue) {

    const [value, setValue] = useState(initialValue);
    return [
            {
                value, onChange: (e) => setValue(e.target.value)
            }, 
            () => setValue(initialValue)
    ];

}


const Form2 = () => {

    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = 
    useState("#000000");
    
   
     const submit = (e) =>{

          e.preventDefault();

          alert(`${titleProps.value}, ${colorProps.value}`);

          resetTitle();
          resetColor();

    };
  return (
    <div>
        <form>
            <input 
            {...titleProps} type="text" placeholder="color title..."/>
            
            <input {...colorProps} type="color" />

            <button onClick={submit}>ADD</button>
        </form>
    </div>
  )
}

export default Form2;
