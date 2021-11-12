import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr: [
            {id: '01', title: '飞龙在天'},
            {id: '02', title: '五虎断魂'},
            {id: '03', title: '刑天之逆'}
        ]
    }
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={ msgObj.id }>
                                    {/* 像路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{ msgObj.title }</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                    <hr />
                    {/* 声明接收params参数 */}
                    <Route path='/home/message/detail/:id/:title' component={ Detail } />
                </ul>
            </div>
        )
    }
}
