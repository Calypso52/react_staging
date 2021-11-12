import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    back = () => {
        this.props.history.goBack();
    }

    forward = () => {
        this.props.history.goForward();
    }

    go = () => {
        this.props.history.go(-2);
    }

    render() {
        console.log('Header: ', this.props);
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={ this.back }>Back</button>&nbsp;&nbsp;
                <button onClick={ this.forward }>Forward</button>&nbsp;&nbsp;
                <button onClick={ this.go }>Go</button>
            </div>
            
        )
    }
}

// 暴露 withRouter 函数的返回值，作用是接收一个一般组件，然后在它身上加上路由组件特有的那三个东西（history，location，match）
export default withRouter(Header)