const defaultFilter = ''

const reducer = (state = defaultFilter, action) => {
  switch (action.type) {
    case 'SET_FILTER': return action.filter
    default: return state
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export default reducer