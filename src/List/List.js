import React from 'react'

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './list.css'

class List extends React.Component {

    state = {
        users: [],
        searchText: '',
    }

    componentDidMount() {
        fetch(`https://randomuser.me/api/?results=${100}`)
            .then(res => res.json())
            .then(users => {
                console.dir(users.results)
                this.setState({ users: users.results })
            })
    }

    searchInputTextChangeHandler = (event) => {
        this.setState({ searchText: event.target.value })
    }

    render() {
        return (
            <div className='List-list'>
                <input
                    name={'searchInput'}
                    value={this.state.searchText}
                    onChange={this.searchInputTextChangeHandler}
                />

                <ReactTable
                    data={this.state.users}
                    filterable={true}
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
                    defaultPageSize={5}
                />
            </div>
        )
    }
}

export default List