import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import './index.css'

export default class Header extends Component {
    // 对接受文件进行类型限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        // 解构赋值
        const { keyCode, target } = event;
        // react没有vue的keyup.enter方法来确认回车键是否被按下，所以只能判断回车的编码是多少
        if(keyCode !== 13) return;
        // 添加的todo名字不能为空
        if(target.value.trim() === '') {
            alert('输入不能为空');
            return;
        }
        // target.value：输入input框的数据
        // 准备好一个todo对象
        const todoObj = {id: uuid(), name: target.value, done: false};
        // 传递给父组件
        this.props.addTodo(todoObj);
        target.value = '';
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
