import { useState } from 'react'

function Calculation(){

    var[a,setA] = useState(0);
    var[b,setB] = useState(0);
   
    var[operator,setOperator] = useState('+');
    var[result,setResult] = useState(0);


    function handleChangeA(e){
        setA(parseInt(e.target.value));
    }

    function handleChangeB(e){
        setB(parseInt(e.target.value));
    }

    function handleChangeOperator(e){
        setOperator(e.target.value);
    }

    function handleClick(){
        if(operator=="-"){
            setResult(a-b);
        } else if(operator=="*"){
            setResult(a*b);
        } else if(operator=="/"){
            setResult(a/b);
        } else {
            setResult(a+b);
        } 

 
        console.log(operator);
    }


    return(
        <>
            <input onChange={handleChangeA} type="text" placeholder='input a' />
            <br />
            <input onChange={handleChangeB} type="text" placeholder='input b' />
            <br />

            <input type="radio" onChange={handleChangeOperator} name="group" id="" value="+"/><span>+  </span>
            <input type="radio" onChange={handleChangeOperator} name="group" id="" value="-"/><span>-  </span>
            <input type="radio" onChange={handleChangeOperator} name="group" id="" value="*"/><span>*  </span>
            <input type="radio" onChange={handleChangeOperator} name="group" id="" value="/"/><span>/  </span>

            <br />
            <button onClick={handleClick}>Calculate</button>
            <br />
            <span>Result : {result}</span>
        </>
    );
}

export default Calculation