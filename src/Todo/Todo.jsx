import {  useState } from "react"

import { TodoForm, } from "./all  Compo/TodoForm";
import { TodoList } from "./all  Compo/TodoList";
import { TodoDate } from "./all  Compo/TodoDate";
import { getLocalStorageItems, setLocalStorageItems } from "./all  Compo/TodoLocalStorage";




export const Todo = ()=>{

    //todo get to localStorage
const [task , setTask] = useState(()=> getLocalStorageItems());

//todo  Add to localStorage
setLocalStorageItems(task);

//todo HandleFormSubmit function
const handleFormSubmit = (inputValue) => {
    const {id ,content, checked}= inputValue;
    //! checked if content is empty or not.
    if (!content) return;
    //! checked if the data is already present or not.
    const ifTodoContentMatched = task.find((curtElem)=>curtElem.content===content);
    if(ifTodoContentMatched)return;
   
    setTask((prevTask)=>[...prevTask, {id,content,checked}]);
    // setTask((prevTask) => console.log(prevTask))
};
//todo handleDeleteTodo function
const handleDeleteTodo = (value)=>{
    // console.log(task);
    // console.log(value);
    const updatedValue = ()=> task.filter((curTask)=> curTask.content !== value);
setTask(updatedValue);
    
}
//todo handleCheckedTodo function
const handleCheckedTodo=(content)=>{
    const updatedTask = task.map((curTask)=>{
        if(curTask.content===content){
 return{...curTask,checked: !curTask.checked}
        }else{ 
            return curTask;
        }
    })
    setTask(updatedTask);
}
//todo handleClearAllBtn function
const handleClearAllBtn = ()=> setTask([]);



    return(
       <section className="todo-container">
        <header>
          <h1><strong className="text-info">Created by Harshit K.</strong></h1>
            <h1 className="text-white fw-bold fs-1 text-center">Todo List</h1>
           <TodoDate  />
        </header>  
        <TodoForm  onAddTodo ={handleFormSubmit} />
        <section className="myUnOrderList">
        <ul  className="todoUl   p-2  rounded-5">
                {
                    task.map((curTask)=>{
                        return( 
                            <TodoList key={curTask.id} data={curTask.content} checked={curTask.checked} onHandleDeleteTodo={handleDeleteTodo} onHandleCheckedTodo={handleCheckedTodo} />  
                    
                       )
                    })
                }
           </ul>
        </section>
        <section>
            <button className="btn btn-danger " onClick={handleClearAllBtn}>Clear All</button>
        </section>
         </section>
    )


}

