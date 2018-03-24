import React, { Component } from 'react'
import './../css/todoitem.css'

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.createTasks = this.createTasks.bind(this)
        this.delete = this.delete.bind(this)
    }
    delete(key) {
        this.props.deleteItem(key)
    }
    createTasks(item) {
        return (<li  onClick={() => this.props.delete(item.key)} className="list" key={item.key}>{item.text}</li>)
    }

    render() {
        let todoEntries = this.props.entries,
            listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="list">
                    {listItems}
            </ul>
        )
    }
}

export default TodoItem