import React from 'react'
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {

    let myStyle = {
        minHeight: "70vh",
        margin: "50px auto"
    }

    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">Todos List </h3>

            {props.todos.length === 0 ? "No Todos to Display" :
                props.todos.map((todo) => {
                    return (
                        <>
                            <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            <hr />
                        </>
                    )
                })
            }
        </div>
    )
}
