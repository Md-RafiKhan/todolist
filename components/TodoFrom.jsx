
import {usestate} from "react";

import { assNewTodo } from "../redux/actions";


const TodoFrom = () => {

    const [text, setText] = usestate("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(Text));

        setText('');

    }

    const onInputchange = (e) => {
        setText(e.target.value);
    }

    return(
        <form className="from" onSubmit={onFormSubmit}>
            <input placeholder="Enter new todo...." 
            className="input"
            onChange={onInputchange}
            vslie={text}
            />
        </form>
    )
}

export default TodoFrom;