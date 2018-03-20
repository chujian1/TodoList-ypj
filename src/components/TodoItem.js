import React, { Component } from 'react'
import './../css/todoitem.css'

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.createTasks = this.createTasks.bind(this)
        this.delete = this.delete.bind(this)
    }
    delete(index) {
        this.props.delete(index)
    }
    createTasks(item,index) {
        return (<li  onClick={() => this.delete(index)} className="list" key={index}>{item}</li>)
    }

    render() {
        let todoEntries = this.props.entries,
            listItems = todoEntries.map(this.createTasks)
        return (
            <ul className="list">
                {listItems}
            </ul>
        )
    }
}

export default TodoItem