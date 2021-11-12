import React, { Component } from 'react'
import qs from 'querystring'

const DetailData = [
    {id: '01', content: '灵犀神剑'},
    {id: '02', content: '魏武青红'},
    {id: '03', content: '四法青云'}
]

export default class Detail extends Component {
    render() {
        console.log(this.props);
        // 接收 params 参数
        // const { id, title } = this.props.match.params;

        // 接收 search 参数
        const { search } = this.props.location;
        const { id, title } = qs.parse(search.slice(1));

        const findResult = DetailData.find( detailObj => detailObj.id === id);
        return (
            <ul>
                <li>Id: { id }</li>
                <li>Title: { title }</li>
                <li>Message: { findResult.content }</li>
            </ul>
        )
    }
}
