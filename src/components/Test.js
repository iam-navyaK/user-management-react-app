import { useState } from "react";


function Test(){
{/*use state hook*/}
let[condition,setCondition]=useState(true);
let changeCondition=()=>{
  setCondition(!condition) 
}
  
  return(
    <div>
<h1>demo of conditional rendering</h1>
<div>
  <button className="btn btn-warning" onClick={changeCondition}>
    {
      condition===true?"give send off":"give wish"
    }
  </button>
  {
    condition===true?(<h2 className="text=info">hello</h2>):(<h2 className="text-info">good bye</h2>)
  }
</div>

</div>
  )
}
export default Test;