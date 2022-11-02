import React, {Component} from "react";
import "./App.css";

class App extends Component{
  btnStyle = {
    color: "fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor:"pointer",
    float:"right"
  }

  getStyle = () =>{
    return {
      padding:"10px",
      borderBottom:"1px #ccc dotted",
      TextDecoation: 'none'
    }
  }

  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true
    },
    {
      id: "2",
      title: "청소하기",
      completed: false
    },
  ];
  
  render(){
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
      {this.todoData.map(data=> (
        <div style={this.getStyle()} key={data.id}>
          <input type="checkbox" defaultChecked={false}/>
           {data.title}
          <button style={this.btnStyle}></button>
      </div>
      ))}
        </div>
      </div>
    );
  }
}
export default App;