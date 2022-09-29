import { Component } from "react";
import ToDo from "./toDo";

export class ListTodo extends Component{
    constructor(props){
super(props)
console.log(props)
    }
    render(){
        return(
            <div>
              {this.props.list.map(
              (todo)=><ToDo todo={todo}/>
              )}
            </div>
        )
    
    }
       
}