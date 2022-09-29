import { Component } from "react";

export  class Addtodo extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            Titletodo:""
        }
    }
    add=()=>{this.props.handeleAddp({name:this.state.Titletodo,isdone:false})
 this.setState({
    Titletodo:""
})
}
    render(){
        return(
            <div>
            <input type="text" onChange={
                (e)=>this.setState({Titletodo:e.target.value})
            }
            value={this.state.Titletodo} />
            <button onClick={this.add}>Add</button>

            </div>
        )
    }
}