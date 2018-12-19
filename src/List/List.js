import React from 'react'

import { connect } from 'react-redux'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './list.css'

class List extends React.Component {

    state = {
        searchText: '',
        defaultPageSize: 5,
        currentPage: 0,
    }

    componentDidMount() {
        this.setPageNumberFromUrl()
    }

    setPageNumberFromUrl = () => {

        if (typeof (this.props.match.params.id) == 'number') {
            console.log(this.props.match.params.id)
            this.setState({ currentPage: Number(this.props.match.params.id) - 1 })
        }
    }

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
                    showPaginationTop={true}
                    showPaginationBottom={false}
                    showPageSizeOptions={false}
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
                    showPageJump={false}
                    defaultPageSize={this.state.defaultPageSize}
                    page={this.state.currentPage}
                    onPageChange={(newPage) => { this.setState({ currentPage: newPage }) }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.list.users
})

export default connect(
    mapStateToProps,
)(List)