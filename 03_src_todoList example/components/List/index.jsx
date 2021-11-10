import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        // 接父组件传下来的props
        const { todos, updateTodo, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {/* 因为写js所以要用{}框起来，jsx语法是遇到<用HTML规则解析，遇到{（代码块）用js规则解析 */}
                {
                    todos.map( todo => {
                        return <Item 
                                    key={ todo.id } 
                                    {...todo}
                                    updateTodo={ updateTodo }
                                    deleteTodo={ deleteTodo }
                                />
                    })
                }
            </ul>
        )
    }
}
