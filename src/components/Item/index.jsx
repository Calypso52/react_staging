import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './idex.css'

export default class Item extends Component {

    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    state = {
        mouse: false,
        bgColor: 'while',
        deleteBtnShow: 'none'
    }

    // 鼠标移入移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag});
            if(flag) {
                this.setState({bgColor: '#aaa'});
                this.setState({deleteBtnShow: 'block'});
            } else {
                this.setState({bgColor: 'white'});
                this.setState({deleteBtnShow: 'none'});
            }
        }
    }

    // 勾选、取消勾选的回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        }
    }

    // 删除一个todo
    handleDelete = (id) => {
        if(window.confirm('Are you sure to delete？')) {
            this.props.deleteTodo(id);
        }
    }

    render() {
        const { id, name, done } = this.props

        return (
            <li
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
                style={{ backgroundColor: this.state.bgColor }}
            >
                <label>
                    <input 
                        type="checkbox" 
                        checked={ done }
                        onChange={ this.handleCheck(id) }
                    />
                    <span>{ name }</span>
                </label>
                <button 
                    className="btn btn-danger" 
                    style={{ display: this.state.deleteBtnShow }}
                    onClick={ () => this.handleDelete(id) }
                >
                    删除
                </button>
            </li>
        )
    }
}
