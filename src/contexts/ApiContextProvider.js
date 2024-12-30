import { createContext,useEffect,useState } from "react";

//create context object
export let apiContext=createContext()

//create context provider
function ApiContextProvider({children}){

    let[albums,setAlbums]=useState([])

    useEffect=>(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res=>res.json())
        .then(albums=>setAlbums(albums))
        .catch(err=>console.log(err))
    },[])
    return(
<apiContext.Provider value={{albums,setAlbums}}>
    {children}
</apiContext.Provider>
    )
}
export default ApiContextProvider;