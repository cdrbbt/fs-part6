const defaultNotification = ''

const reducer = (state = defaultNotification, action) => {
  switch (action.type) {
    case 'NOTIFY': return action.text
    case 'RESET': return defaultNotification
  default: return state
  }
}


let currentTimeout = null

export const changeNotification = (text, seconds) => {
  return dispatch => {
    dispatch({
      type: 'NOTIFY',
      text
    })
    clearTimeout(currentTimeout)
    currentTimeout = setTimeout(() => (dispatch(resetNotification())), seconds*1000 )
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET'
  }
}

export default reducer