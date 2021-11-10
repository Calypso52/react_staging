import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    Search = () => {
        // 获取用户的输入
        const { value: keyWord } = this.keyWordElement;
        // 发送请求前通知App更新状态
        this.props.updateAppState({isFirst: false, isLoading: true});
        // 发送网络请求
        axios
            .get(`https://api.github.com/search/users?q=${keyWord}`)
            .then(
                response => {
                    // 请求成功后通知App更新状态
                    this.props.updateAppState({userProfiles: response.data.items, isLoading: false});
                },
                error => {
                    // 失败后通知App更新状态
                    this.props.updateAppState({isLoading: false, err: error.message});
                }
            )

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={ c => this.keyWordElement = c } type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={ this.Search }>Search</button>
                </div>
            </section>
        )
    }
}
