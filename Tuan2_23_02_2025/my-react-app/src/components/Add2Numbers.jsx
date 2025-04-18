import { useState } from 'react'

function Add2Numbers() {

    var[a,setA] = useState(0);
    var[b,setB] = useState(0);
   
    // var [result,setResult] = useState(a+b);
    var[result,setResult] = useState(0);

    function handleChangeA(e){
        setA(parseInt(e.target.value));
    }

    function handleChangeB(e){
        setB(parseInt(e.target.value));
    }

    function handleClick(){
        setResult(a+b);
        console.log(a+b);
    }

    return(
        <>
            <input onChange={handleChangeA} type="text" placeholder='input1' />
            <br />
            <input onChange={handleChangeB} type="text" placeholder='input2' />
            <br />
            <button onClick={handleClick}>Click me</button>
            <br />
            <span>{result}</span>
        </>
    );
    
}

export default Add2Numbers