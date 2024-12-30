function Child(props){
    
    return (
        <div className="bg-warning">

<h2>hello this is child file</h2>

<button className="btn btn-info" onClick={props.increment}>+</button>

<button className="btn btn-primary" onClick={props.decrement}>-</button>

        </div>
    )
} 
export default Child;