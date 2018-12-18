const FETCH_USERS = 'list/FETCH_USERS'

export const loadDataAsyncAction = () => (dispatch, getState) => {
    dispatch(fetchUsers())
}

const fetchUsers = (users) => ({
    type: FETCH_USERS,
    users
})

const INITIAL_STATE = {
    users: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action) {

        case FETCH_USERS:
            return {
                ...state,
                users: action.users
            }

        default:
            return state
    }
}