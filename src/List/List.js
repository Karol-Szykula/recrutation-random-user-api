import React from 'react'

import { connect } from 'react-redux'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './list.css'

class List extends React.Component {

    state = {
        searchText: '',
        defaultPageSize: 5,
        currentPage: 1
    }

    // componentDidMount() {
    //     fetch(`https://randomuser.me/api/?results=${100}`)
    //         .then(res => res.json())
    //         .then(users => {
    //             this.setState({ users: users.results })
    //         })
    // }

    searchInputTextChangeHandler = (event) => {
        this.setState({ searchText: event.target.value })
    }

    render() {
        let users = this.props.users
        if (this.state.searchText) {
            users = this.props.users.filter(user => {
                return user.name.first.includes(this.state.searchText) || user.name.last.includes(this.state.searchText)
            })
        }

        return (
            <div className='List-list'>
                <div
                    className={'input-search'}
                >
                    <input
                        name={'searchInput'}
                        placeholder={'Search Text'}
                        value={this.state.searchText}
                        onChange={this.searchInputTextChangeHandler}
                    />
                </div>

                <ReactTable
                    className={'-striped'}
                    data={users}
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
                    defaultPageSize={this.state.defaultPageSize}
                    currentPage={this.state.currentPage}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.list.users
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)