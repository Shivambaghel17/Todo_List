import './App.css';
import  React , {useState} from 'react';
import TodoList from './TodoList';

 function App(){
     const [todo,setTodo] = useState();
     const [items,setItems]=useState([]);

   
     const chan = (event) => {
       setTodo(event.target.value);
      // setItems(todo);
     }

     const cli = () => {
         setItems((olditems)=>{
              return [...olditems,todo];
         });
         setTodo('');
     }
     const deleteItem = (id) => {
        console.log("deleted");

         setItems((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                 return index !== id;
            })
         })
    }
     
     
     return(
            
         <>
         < div className='root'>
           <h1>
             Todo  List 📃
           </h1>
            <input type="text" placeholder="Enter some todos" onChange={chan} value={todo}/>
            <button onClick={cli}>ADD</button>

            <ul>
              {items.map((currValue,index)=>{
              //   return <li>{currValue}</li>
              return  <TodoList
              key={index}
              id={index}
               text={currValue}
               onSelect={deleteItem}/>
              })}
           </ul>
           
        </div>
         </>
     );
 }

 export default App;