import './One.css';

function One(props){
console.log(props)
    return(
        <h1 className='heading'>{props.data}</h1>
    )}
export default One;