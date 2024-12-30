import { useState } from 'react';
import {useForm} from 'react-hook-form'

function Forndemo(){

    let {register,handleSubmit,formState:{errors}}=useForm()
    //form submit
 //   let submitForm=(data)=>{
   //     console.log(data)
    

//form submit
let submitForm=(userObj)=>{
    //make HTTP post request to store userObj in local API
    fetch("http://localhost:4000/users",{
    method:"POST",
    headers:{
    'Content-Type':'application/json',
    },
    body:JSON.stringify(userObj)
    })
    .then(res=>res.json())
    .then(message=>console.log(message))
    .catch(err=>console.log("error is",err))
    };
    return(
        <div className="container">
    <h1 className="text-dark">Form</h1>
    <div className='row'>
        <div className='col-11 col-sm-8 col-md-6 mx auto'>
            <form onSubmit={handleSubmit(submitForm)}>

                {/*username*/}
                <input 
                type='text'
                id='username'
                className='form-control mb-3'   
                placeholder='username'
                {...register('username',{required:"username is required",minLength:'4'})}/>
                {/*username validation errors messages*/}
                {errors.username?.type=='required' && <p className='text-danger'>username is required</p>}
                {errors.username?.type=='minLength' && <p className='text-danger'>min length is 4</p>}
                <button type='submit'    className='btn btn-dark'>add</button>
            </form>
        </div>
    </div>

        </div>
    )
}
export default Forndemo;