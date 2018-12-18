const FETCH_USERS = 'list/FETCH_USERS'

export const loadDataAsyncAction = () => (dispatch, getState) => {

    fetch(`https://randomuser.me/api/?results=${100}`)
        .then(res => res.json())
        .then(users => {
            const usersArray = users.results
            dispatch(fetchUsers(usersArray))
        })
}

const fetchUsers = (users) => ({
    type: FETCH_USERS,
    users
})

const INITIAL_STATE = {
    users: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FETCH_USERS:
            return {
                ...state,
                users: action.users
            }

        default:
            return state
    }
}