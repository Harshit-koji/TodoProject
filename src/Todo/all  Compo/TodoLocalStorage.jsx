//*main variables (localStorage,)
const todoKey = "reactTodo";



export const getLocalStorageItems = ()=>{
    const rawTodo = localStorage.getItem(todoKey);
if(!rawTodo) return [];
return JSON.parse(rawTodo);
};



export const setLocalStorageItems = (task)=>{
    return localStorage.setItem(todoKey, JSON.stringify(task));
}