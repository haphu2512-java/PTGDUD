import { useState } from 'react'

function Name() {
    var [text,setText] = useState('default');

//   var text = 'default';

  function handleChange(e){
    setText(e.target.value);
  }

  function handleClick(){
     console.log(text);
  }
    return(
        <>
            <input onChange={handleChange} type="text" name="" id="" />
            <br />
            <button onClick={handleClick}>Click me</button>
            <br />
            <span>{text}</span>
        </>
    );
    
}

export default Name