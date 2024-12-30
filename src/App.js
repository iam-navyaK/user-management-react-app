import './App.css';
import One from './components/one/One';
import img1 from './images/1.jpg';
import { CiSaveDown1 } from "react-icons/ci";
import Test from './components/Test'
import Parent from './components/Parent'
import Fetchfile from './components/Fetchfile'
import Formdemo from './components/Formdemo'
import Forndemo2 from './components/Forndemo2'


let names = ["hina", "meena", "tina", "keena"];

let user1 = "data1";
let user2 = "data2";
let user3 = "data3";

function App() {

 return (
    <div className="main">
      {/* Bootstrap */}
      <div>
        <p className="text-black lead">hello bootstrap</p>
      </div>
       {/*add images */}
      <div>
        <img src={img1} width="200px" alt="Sample" />
      </div>
      {/*add icons*/}
      <div>
        <button className='btn btn-warning'><CiSaveDown1/>
         save
        </button>
      </div>
      {/* Map Over Names */}
      {names.map((name) => (
        <h2 key={name}>{name}</h2>
      ))}

      {/* Nesting of Component One */}
      <div>
        <One data={user1} />
        <One data={user2} />
        <One data={user3} />
      </div>
      {/*conditional rendering*/}
      <Test/>
      {/*add parent*/}
      <Parent/>
      {/*adding Fetchfile*/}
      <Fetchfile/>
      {/*adding formdemo*/}
      <Formdemo/>
      <Forndemo2/>
      {/*adding todo application*/}
    
     {/* <div class ='col-sm-4'><AddToDo /></div>
      <div class ='col-sm-4'><ToDoCount /></div>
      <div class ='col-sm-4'><ToDoList /></div>*/}
      
   
    </div>
  );
}

export default App;
