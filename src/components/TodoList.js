/**
 *
 * Created by ypj on 18-3-20.
 */
/**
 * Created by ypj on 18-3-18.
 */
import React , {Component} from 'react'
import TodoItem from './TodoItem'
import './../css/todolist.css'


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
        this.deleteItem = this.deleteItem.bind(this)
    }
    addItem = (e) => {
        let arr = this.state.items;
        if(this._inputElement.value !== ""){
            arr.unshift(this._inputElement.value);
            this.setState({
                    items:arr
                }
            );
            this._inputElement.value = "";
            console.log(arr);
        }
        e.preventDefault();
    }
    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        })

        this.setState({
            items: filteredItems
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.addItem} className="from">
                    <input className="input" autoFocus ref={ (a) =>{this._inputElement = a}} placeholder="请输入待做事项"/>
                    <button className="button" type="submit">确定</button>
                </form>
                <TodoItem entries={this.state.items} delete={this.deleteItem}/>

            </div>)
    }

}
export default TodoList
