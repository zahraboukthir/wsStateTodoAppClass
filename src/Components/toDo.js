import { Component } from "react";
import "./todo.css"
export default class ToDo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      edit: false,
      titletodo:this.props.todo.name,
      checked:this.props.todo.isdone
    };
    
  }
  edit=()=>{
    this.props.handeleEdit(this.state.titletodo,this.props.todo.id)
    this.setState({ edit: !this.state.edit });
  }
  handleInputChange=(event)=> {
    this.setState({ checked:!this.state.checked});
    this.props.handelcomplete(this.props.todo.id)
}

  
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.checked} onChange={this.handleInputChange}/>
        <p>{this.props.todo.name}</p>
        <button
          onClick={() => {
            this.setState({ edit: !this.state.edit });
            console.log(this.state.edit);
          }}
        >
          Edit
        </button>
        <div className={this.state.edit ? "edit":"editnone"} >
          <input type="text" value={this.state.titletodo} onChange={(e)=>this.setState({titletodo:e.target.value})}/>
          <button onClick={this.edit}>Save</button>
        </div>
        <button onClick={()=>this.props.handleDelit(this.props.todo.id)}> X</button>
      </div>
    );
  }
}
