import {useContext} from 'react'
import Album2 from './Album2'
import { apiContext } from './ApiContextProvider'

function Album1() {

let [albums,setAlbums]=useContext(apiContext)

  return (
    <div>Album1
      <Album2/> 
      <h2 className='text-danger'>no of albums{albums.length}</h2>
    </div>
  )
}

export default Album1