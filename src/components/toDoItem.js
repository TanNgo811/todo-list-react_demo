import React, { Component } from 'react';
import './toDoItems.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkComplete from '../img/checked.svg';

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
        let url = checkImg;
        if (item.isComplete){
            url = checkComplete;
        }
        let className = 'ToDoItem';
        if (item.isComplete){
            className += ' ToDoItem-complete';
        }

        return(
            <div className = { classNames('ToDoItem', {
                'ToDoItem-complete': item.isComplete
            })}>
                <img  onClick = { onClick } src= { url } width = {16}/>
                <p>{ this.props.item.title }</p>   
            </div>
        );
    }
}


export default ToDoItem;