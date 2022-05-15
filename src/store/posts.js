
const initialState = []

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'posts/addPost': {
            return [...state, action.payload]
        }
        case 'posts/postDelete': {
            return state.filter((post) => post.id !== action.payload)
        }
        case 'posts/postsLoaded': {
            return action.payload
        }
        default:
            return state
    }
}

// Thunk function
export const fetchPosts = async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    dispatch({ type: 'posts/postsLoaded', payload: data })
}

export function saveNewTodo(text) {
    return async function saveNewTodoThunk(dispatch, getState) {
        const initialTodo = { text }
        // const response = await client.post('/fakeApi/todos', { todo: initialTodo })
        // dispatch({ type: 'todos/todoAdded', payload: response.todo })
    }
}
