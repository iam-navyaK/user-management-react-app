//here we are sending data from child to parent 
//first we crearted function in parent component
//later that function need to be sent to child so in child attachemnt <child/> we have 
//said that function in child attachment then alter in child we used prop
import Child from './Child'
import {useState} from 'react';
function Parent(){ 

    let [counter,setCounter]=useState(0) ;

    //incr
    let increment=()=>{
        setCounter(counter+1)
    }

    //decrement
    let decrement=()=>{
        setCounter(counter-1)
    }
       return(
        <div className='bg-info'> 
        <h1>this is parent file</h1>
        <h2>{counter}</h2>
        <Child increment={increment} decrement={decrement}/>
        </div>
    )
}
export default Parent;