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

    /* 玩的就是 history 身上的API */

    pushShow = (id, title) => {
        // push 跳转 + 携带 params 参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`);

        // push 跳转 + 携带 search 参数
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);

        // push 跳转 + 携带 state 参数
        this.props.history.push('/home/message/detail', {id, title});
    }

    replaceShow = (id, title) => {
        // replace 跳转 + 携带 params 参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`);

        // replace 跳转 + 携带 search 参数
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);

        // replace 跳转 + 携带 state 参数
        this.props.history.replace('/home/message/detail', {id, title});
    }

    back = () => {
        this.props.history.goBack();
    }

    forward = () => {
        this.props.history.goForward();
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
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{ msgObj.title }</Link>&nbsp;&nbsp; */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{ msgObj.title }</Link>&nbsp;&nbsp; */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{pathname: '/home/message/detail', state: {id: msgObj.id, title: msgObj.title}}}>{ msgObj.title }</Link>&nbsp;&nbsp;
                                    &nbsp;&nbsp;<button onClick={ () => this.pushShow(msgObj.id, msgObj.title) }>Push查看</button>
                                    &nbsp;&nbsp;&nbsp;<button onClick={ () => this.replaceShow(msgObj.id, msgObj.title) }>Replace查看</button>
                                </li>
                            )
                        })
                    }
                    <hr />
                    {/* 声明接收params参数 */}
                    {/* <Route path='/home/message/detail/:id/:title' component={ Detail } /> */}

                    {/* search参数无需声明接收 */}
                    {/* <Route path='/home/message/detail' component={ Detail } /> */}

                    {/* state无需声明接收 */}
                    <Route path='/home/message/detail' component={ Detail } />

                    <br />
                    <button onClick={ this.back }>Back</button>&nbsp;&nbsp;
                    <button onClick={ this.forward }>Forward</button>
                </ul>
            </div>
        )
    }
}
