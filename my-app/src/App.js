
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from 'react'




function App() {

  const[value,setValue]=useState('');
  const[todoList,setTodolist]=useState([]);


   const handleChange  = (e) => {
    e.preventDefault()
    setValue(e.target.value)
      
    
   }

   const addTololist  = (e) => {
    e.preventDefault()

    const newTodo = {
      id: Math.floor(Math.random()*1000),
      value:value
      
    }
     
    

    setTodolist(prev=> [...prev,newTodo])

  

    setValue('')

   
    

    
    }
   
      
   
   

 
  return (
   

    <div className="container text-center ">
   
      <div className="col mt-5">
      <form  onSubmit={addTololist}>
      <div className="input-group mb-3">

  <input type='text' 
  className=' form-control' 
  placeholder='Entrez le to do list'  
  onChange={handleChange}
   value={value} 
   style={{borderRadius:8}} >

   </input>

  <button type="submit" 
  className="btn btn-primary p-2   ms-2" >
    Ajouter</button>
  </div>


  </form> 
  
      <h1 className='tite'>Afficher mes Todolist </h1>
      {
      todoList.map(value=> {
        return <>
           <li key={value.id}>{value.value}</li>
        
        
        </>
      })
      }
      
     </div>
    </div>
  


  );
}

export default App;
