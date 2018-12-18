import React from 'react'

import './list.css'

class List extends React.Component {

    state = {
        usersData: []
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=${20}`)
            .then(res => res.json())
            .then(users => this.setState({ usersData: users }))
    }

    render() {
        return (
            <div className='List-list'>
                {
                    this.state.usersData && this.state.usersData.results &&
                        this.state.usersData.results.map
                        ?
                        this.state.usersData.results.map(user => {
                            return (
                                <div
                                    key={user.login.uuid}
                                >
                                    <div>
                                        {
                                            `${user.name.title} ${user.name.first} ${user.name.last}`
                                        }
                                    </div>
                                    <div>
                                        <a href="mailto:{user.email}">{user.email}</a>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                        :
                        'Loading'
                }
            </div>
        )
    }
}

export default List