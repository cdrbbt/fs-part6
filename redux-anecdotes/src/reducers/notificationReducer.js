const defaultNotification = 'Things are working as intended'

const reducer = (state = defaultNotification, action) => {
  switch (action.type) {
    case 'NOTIFY': return action.text
    case 'RESET': return defaultNotification
  default: return state
  }
}


export const changeNotification = (text) => {
  return {
    type: 'NOTIFY',
    text
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET'
  }
}

export default reducer