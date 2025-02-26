import { useState } from "react";

export const TodoForm = ({onAddTodo})=>{
    const [inputValue , setInputValue] = useState({});
    //todo handle functions
const handleInputChange = (value)=> setInputValue({id:value,content:value,checked:false});
const handleFormSubmit =(e)=>{
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id:' ',content:'',checked:false});
}

    return(
        <section className="form ">
        <form className="d-flex  " onSubmit={handleFormSubmit} > 
            <div>
                <input type="text" className="todo-input rounded-start-3 fs-5 p-3  border-0 " autoComplete="off" value={inputValue.content} onChange={(event)=> handleInputChange(event.target.value)} />
            </div>
            <div><button type="submit" className="todo-btn fs-5  text-white fw-bold  rounded-end-3 p-3 border-0 ">Add </button></div>
        </form>
    </section>
    )
}