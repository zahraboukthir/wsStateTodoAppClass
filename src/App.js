import { Component } from "react";
import { Addtodo } from "./Components/Addtodo";
import { ListTodo } from "./Components/ListTodo";
import './App.css'
export default class App extends Component{

  state = { list:[{name:"Html",isdone:false},
  {name:"Css",isdone:true},
  {name:"Js",isdone:false},
  {name:"Ruby",isdone:true},
  ]
  }
handeleAdd(newtodo){
this.setState({
list:[...this.state.list,newtodo]  // spreding(...)copie des elemnts du table
})
}
  render(){
    return(
      <div className="App">
        <Addtodo  handeleAddp={this.handeleAdd.bind(this)}/>
        <ListTodo list={this.state.list}/>

      </div>
    )
  }

}