import {useSelector, useDispatch} from 'react-redux'
import {toggleTodo, removeTodo} from '../redux/todoslice'

const TodoList = () => {

    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch()

    if(todos.length === 0) {
        return ( <p className="">No Todos Added Yet</p> )
    }

    return (
        <>
            {todos.map((item) => (
                <div key={item.id} className="flex">
                    <div className={item.completed ? "line-through" : ""} onClick={()=>dispatch(toggleTodo(item.id))}>
                        {item.text}
                    </div>
                    <div className="hover:cursor-pointer" onClick={()=> dispatch(removeTodo(item.id))}> ❌</div>
                </div>
            ))}
        </>
    )
}

export default TodoList;