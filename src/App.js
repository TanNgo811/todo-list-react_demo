import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css'
import './components/toDoItems.css';
import ToDoItem from "./components/toDoItem";

class App extends Component{
  constructor(){
    super();
    this.state = {
      toDoItems: [
        {
          title: "Go Shopping",
          isComplete: true
        },
        {
          title: "Shopping",
          isComplete: false
        },
        {
          title: "Playing",
          isComplete: true
        },
        {
          title: "Going out w/ Ur Girl",
          isComplete: false
        }
      ]
    };
    // this.toDoItems = [
    //   {
    //     title: "Go Shopping",
    //     isComplete: true
    //   },
    //   {
    //     title: "Shopping",
    //     isComplete: false
    //   },
    //   {
    //     title: "Playing",
    //     isComplete: true
    //   },
    //   {
    //     title: "Going out w/ Ur Girl",
    //     isComplete: false
    //   }
    // ];
    
  }

  onItemClicked(item) {
    // console.log('Item Clicked', item);
    return (event) => {
      const isComplete = item.isComplete;
      const { toDoItems } = this.state;
      const index = this.state.toDoItems.indexOf(item);
      this.setState({
        toDoItems: [
          ...toDoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...toDoItems.slice(index + 1)
        ]
      });
      console.log("Item Clicked");
    };
  }

  render(){
    const { toDoItems } = this.state;
    if (toDoItems.length){
      return (
        <div className="App">
          {
            toDoItems.length && toDoItems.map((item, index) =>
              <ToDoItem
                onClick={ 
                  this.onItemClicked(item)
                }
                key={ index }
                item={ item }
                
              /> 
            )
          }
        </div>
      );
    }
    
  }
}



export default App;
