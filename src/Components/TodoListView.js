import React from 'react';

function TodoListView({todoListProp}) {

    //const {todoListProp} = props;    

    //state store 

    // const [
    //     todoList
    //     // , 
    //     // setTodoList
    // ] = React.useState(
    //     // [
    //     //     { label: "one", done: false }
    //     // ]
    //     [
    //         { label: "one", done: false },
    //         { label: "two", done: false },
    //         { label: "three", done: false }
    //     ]
    // );
    
    return(
        <>
            {   
                todoListProp.map(
                    (todo,i) => {
                        return (
                            <React.Fragment key={i}>
                            {
                                JSON.stringify(todo)
                            }
                            <br/>
                            </React.Fragment>
                        );

                    }
                )
            }
        </>
    );

}

export default TodoListView;