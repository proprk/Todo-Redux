import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todoslice'

const TodoInput = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch();
    
    const handleAdd = () => {
        if(text.trim()==="") return;
        dispatch(addTodo(text))
        setText("")
    }

    return (
        <>
            <div className="flex justify-center items-center gap-2 m-auto">
                <input 
                    type= "text" 
                    className= "border outline-none rounded-sm h-10 w-60 px-2" 
                    placeholder= "Enter todo"
                    value = {text}
                    onChange ={(e)=>{setText(e.target.value)}}
                />
                <button onClick={handleAdd} className=" bg-orange-500 text-white h-10 p-2 rounded-sm hover:cursor-pointer">Add Task</button>
            </div>
        </>
    )
}

export default TodoInput;