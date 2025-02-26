import { MdCheckCircle, MdDeleteForever } from "react-icons/md";
export const TodoList = ({data,checked,onHandleDeleteTodo,onHandleCheckedTodo})=>{
    const  changeAble = checked ? "checkList" : "notCheckList"
    const liChangeAbleStyle = {border:checked? "7px solid red" :"7px solid #00ffee"}
    return(
        <li  className={`todo-item  rounded-5  m-3 fs-4 `} style={liChangeAbleStyle}>
        <span className={`${changeAble} todo-item-content `}>{data}</span>
     <span className=" icon-btn d-flex ">
     <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)}> <MdCheckCircle /> </button>
     <button className="delete-btn" onClick={()=> onHandleDeleteTodo(data)} > <MdDeleteForever /> </button>
     </span>
     </li>
    )
}