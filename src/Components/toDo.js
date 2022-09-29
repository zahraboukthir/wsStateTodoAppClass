import { Component } from "react";

export default class ToDo extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.todo.isdone} />
        <p>{this.props.todo.name}</p>
        <button>Edit</button>
        <button>X</button>
      </div>
    );
  }
}
