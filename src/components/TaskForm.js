import React, { Component } from 'react';

class TaskForm extends Component {
  
    state = {
        title: '',
        description: ''
    }
    
    alEnviar = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    alEscribir = evto => {
        console.log(evto.target.name, evto.target.value);
        this.setState({
            [evto.target.name]: evto.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.alEnviar}>
                <input 
                    type='text'
                    name='title' 
                    placeholder='Enter a task' 
                    onChange={this.alEscribir}
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                    name='description'
                    placeholder='Enter a description' 
                    onChange={this.alEscribir}
                    value={this.state.description}/>
                <input type='submit'/>
            </form>
        )
    }
}

export default TaskForm;