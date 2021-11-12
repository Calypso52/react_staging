import React, { Component } from 'react'

const DetailData = [
    {id: '01', content: '灵犀神剑'},
    {id: '02', content: '魏武青红'},
    {id: '03', content: '四法青云'}
]

export default class Detail extends Component {
    render() {
        // 接收 params 参数
        console.log(this.props);
        const { id, title } = this.props.match.params;
        const findResult = DetailData.find( detailObj => detailObj.id === id)
        return (
            <ul>
                <li>Id: { id }</li>
                <li>Title: { title }</li>
                <li>Message: { findResult.content }</li>
            </ul>
        )
    }
}
