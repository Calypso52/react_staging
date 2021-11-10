import React, { Component } from 'react'
import Item from '../Item'
import Loading from '../Loading'

export default class List extends Component {
    
    render() {
        const { userProfiles, isFirst, isLoading, err } = this.props;
        return (
            <div className="row">
                {
                    isFirst ? <h2>Please enter key words</h2> :
                    isLoading ? <Loading/> : 
                    err ? <h2 style={{ color: 'red' }}>{ err }</h2> :
                    userProfiles.map( profile => {
                        return <Item 
                                    key={profile.id}
                                    {...profile}
                                />
                    })
                }
            </div>
        )
    }
}
