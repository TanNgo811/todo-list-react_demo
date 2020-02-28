import React, { Component } from 'react';
import './toDoItems.css';
import classNames from 'classnames'

class ToDoItem extends Component{
    // constructor(props){
    //     super(props);

    //     this.onItemClick = this.onItemClick.bind(this);
    // }

    // onItemClick() {
    //     this.props.item.isComplete = !this.props.item.isComplete;
    // }

    render(){
        const { item, onClick } = this.props;
        let className = 'ToDoItem';
        if (item.isComplete){
            className += ' ToDoItem-complete';
        }

        return(
            <div onClick = { onClick } className = { classNames('ToDoItem', {
                'ToDoItem-complete': item.isComplete
            })}>
                <p>{ this.props.item.title }</p>   
            </div>
        );
    }
}


export default ToDoItem;