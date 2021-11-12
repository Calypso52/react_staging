import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生HTML中靠a标签跳转到不同页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* 在 React 中靠路由链接实现切换组件 */}
                            <NavLink activeClassName="activeColor" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="activeColor" className="list-group-item" to="/home">Home</NavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/* 严格匹配，不写就是模糊匹配。不开启严格匹配会出问题才开，不然都不开 */}
                                <Switch>
                                    <Route path="/about" component={ About } />
                                    <Route path="/home" component={ Home } />
                                    <Redirect from="/" to="/about" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
