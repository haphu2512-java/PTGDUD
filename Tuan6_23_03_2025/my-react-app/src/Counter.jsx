import { useState,useReducer } from 'react'

function reducer(state, action) {
	switch (action.type) {
	  case 'incremented_age':
		return { ...state, age: state.age + 1 };
	  default:
		return state;
	} 
  }

export default function Counter() {  
	const [state, dispatch] = useReducer(reducer, {  
				
				name: 'Taylor', age: 42
			
		}); 
	return (<>
		<button onClick={() =>{
			dispatch({ type:	'incremented_age' })      
			}}>        
			Increment age     
		</button>      
		
		<p>Hello! You are {state.age} and your name is {state.name	}.</p>    
		
	</>  );
}


