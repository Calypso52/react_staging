import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        const { avatar_url: userAvatar, login: userName, html_url: userPage } = this.props; // profile
        return (
            <div className="card">
                <a href={ userPage } target="_blank" rel="noreferrer">
                    <img alt="avatar" src={ userAvatar } style={{ width: '100px' }} />
                </a>
                <p className="card-text">{ userName }</p>
            </div>
        )
    }
}
