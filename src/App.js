import { Component } from "react";
import { Addtodo } from "./Components/Addtodo";
import { ListTodo } from "./Components/ListTodo";
import "./App.css";
export default class App extends Component {
  state = {
    list: [
      { name: "Html", isdone: false, id: 3 },
      { name: "Css", isdone: true, id: 0 },
      { name: "Js", isdone: false, id: 1 },
      { name: "Ruby", isdone: true, id: 2 },
    ],
  };
  handeleAdd(newtodo) {
    console.log(this.state.list.length);
    this.setState({
      list: [...this.state.list, newtodo], // spreding(...)copie des elemnts du table
    });
  }
  handeleEdit(edittitle, id) {
    this.setState({
      list: this.state.list.map((todo) =>
        todo.id == id ? { ...todo, name: edittitle } : todo
      ),
    });
  }
  handleDelit(id) {
    this.setState({
      list: this.state.list.filter((todo) => todo.id != id),
    });
  }
  handelcomplete(id) {
    this.setState({
      list: this.state.list.map((todo) =>
        todo.id == id ? { ...todo, isdone: !todo.isdone } : todo
      ),
    });
  }
  render() {
    return (
      <div className="App">
        <Addtodo
          handeleAddp={this.handeleAdd.bind(this)}
          l={this.state.list.length}
        />
        <ListTodo
          list={this.state.list}
          handelcomplete={this.handelcomplete.bind(this)}
          handeleEdit={this.handeleEdit.bind(this)}
          handleDelit={this.handleDelit.bind(this)}
        />
      </div>
    );
  }
}
