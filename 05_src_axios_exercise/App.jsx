import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

    state = { // 初始化状态
        userProfiles: [], // 初始值为数组
        isFirst: true, // 是否为第一次打开页面
        isLoading: false, // 发送请求前设为true，一旦收到改为false
        err: '' // 存储错误信息
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search
                    updateAppState={ this.updateAppState }
                />
                <List
                    {...this.state}
                />
            </div>
        )
    }
}
