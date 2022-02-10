import React from "react"

function ToDoItem(props){
    const completedStyle ={
        fontStyle : "italic",
        color : "grey",
        textDecoration : "like-through"
    }
    
    return(
    <div className="todo-item">
    <input type='checkbox' 
    checked={props.item.completed} 
    onChange={(event) => props.handleChange(props.item.id)}
     />
    <p style = {props.item.completed ? completedStyle:null }>{props.item.text}</p>   
    </div>
    
    )
    
}
export default ToDoItem



