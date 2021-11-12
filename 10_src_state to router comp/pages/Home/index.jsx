import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                            <NavLink activeClassName="activeColor" className="list-group-item" to="/home/news">News</NavLink>
                        </li>
                        <li>
                            {/* <a className="list-group-item active" href="./home-message.html">Message</a> */}
                            <NavLink activeClassName="activeColor" className="list-group-item" to="/home/message">Message</NavLink>
                        </li>
                    </ul>
                    {/* 注册路由 */}
                    <Switch>
                        <Route path='/home/news' component={ News } />
                        <Route path='/home/message' component={ Message } />
                        <Redirect from='/' to='/home/news' />
                    </Switch>
                </div>

            </div>
        )
    }
}
