import React from 'react';

function TodoCreator({onAdd}) {

    const [todo, updateTodo] = React.useState(
        {label:"label", done: false}
    );

    return (
        <>
        {"Our todo:" + JSON.stringify(todo)}
        <form onSubmit={(e) => {
            e.preventDefault();
            //Clicking on a "Submit" button, prevent it from submitting a form
            //https://www.w3schools.com/jsref/event_preventdefault.asp
            onAdd(todo);
        }}>

            <label>
                label:
                <input type="text"
                    onChange={
                        e => updateTodo(
                            {label:e.target.value,done:todo.done}
                        )
                    }
                />
            </label>
            <label>
                done:
                <input type="checkbox"
                    checked={todo.done}
                    onChange={
                        e => updateTodo(
                            {label:todo.label,done:!todo.done}
                        )
                    }
                />
            </label>
            <input type="submit"
                value="Add"
            />
        </form>
        </>
    );
}

export default TodoCreator;
