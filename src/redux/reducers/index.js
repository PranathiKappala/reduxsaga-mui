let initialState = {
  value : 0,
  todos : []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {...state,value : state.value + 1}
      //case 'INCREMENT_IF_ODD':
        // return (state % 2 !== 0) ? state + 1 : state
      case 'DECREMENT':
        return {...state,value : state.value - 1}
      case 'ADD_TODO':
        let newArr = [...state.todos]
        newArr.push(action.payload)
        return {...state,todos:newArr}
      default:
        return state
    }
  }
  