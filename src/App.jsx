// 创建“外壳”组件
import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import { v4 as uuid } from 'uuid'
import './App.css'


// 创建并暴露App组件
export default class App extends React.Component{
    // 状态在哪里，操作状态的方法就在那里

    // 初始化
    state = {
        todos: [
            {id: uuid(), name: '画龙点睛', done: true},
            {id: uuid(), name: '秋水人家', done: true},
            {id: uuid(), name: '逍遥江湖', done: false},
            {id: uuid(), name: '四法青云', done: true},
        ]
    }

    // addTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) => {
        // 获取原todos
        const { todos } = this.state
        // 追加一个todo
        const newTodos = [todoObj, ...todos];
        // 更新状态
        this.setState({todos: newTodos})
    }

    // 更新todo对象
    updateTodo = (id, done) => {
        const { todos } = this.state;
        // 加工数据
        const newTodos = todos.map( todoObj => {
            if(todoObj.id === id) return {...todoObj, done}
            else return todoObj;
        })

        this.setState({todos: newTodos});
    }

    // 删除
    deleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter(todoObj => {
            return todoObj.id !== id
        });
        // 更新状态
        this.setState({todos: newTodos});
    }

    // 用于全选
    checkAllTodo = (done) => {
        const { todos } = this.state;
        const newTodos = todos.map(todoObj => {
            return {...todoObj, done}
        });
        this.setState({todos: newTodos});
    }

    clearDone = () => {
        const { todos } = this.state;
        const newTodos = todos.filter(todoObj => {
            return !todoObj.done
        });
        this.setState({todos: newTodos});
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={ this.addTodo }/>
                    <List 
                        todos={ todos }
                        updateTodo={ this.updateTodo }
                        deleteTodo={ this.deleteTodo }
                    />
                    <Footer
                        todos={ todos }
                        checkAllTodo={ this.checkAllTodo }
                        clearDone={ this.clearDone }
                    />
                </div>
            </div>
        )
    }
}