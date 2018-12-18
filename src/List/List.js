import React from 'react'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './list.css'

class List extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=${20}`)
            .then(res => res.json())
            .then(users => {
                console.dir(users.results)
                this.setState({ users: users.results })
            })
    }

    render() {
        return (
            <ReactTable
                data={this.state.users}
                // resolveData={(data) => data.map((user) => (user))}
                columns={[{
                    Header: 'Title',
                    accessor: 'name.title'
                }, {
                    Header: 'First Name',
                    accessor: 'name.first'
                }, {
                    Header: 'Last Name',
                    accessor: 'name.last'
                }]}
            />

        )
    }
}

export default List