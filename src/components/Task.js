import React, { Component } from 'react';

class Task extends Component {

    styleCompleted() {
        return{
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    } 
    
    render() {
        const {task} = this.props;

        return <div style={this.styleCompleted()}> 
            {task.title} -- 
            {task.description} -- 
            {task.done} -- 
            {task.id}
            <input type='checkbox' onChange={this.props.checkDone.bind(this, task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                X
            </button>
            </div>
    }
}

const btnDelete = {
    background: 'blue',
    cursor: 'pointer'
}

export default Task;