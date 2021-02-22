const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const sortAnecdotes = (anecdotes => anecdotes.sort((a,b) => b.votes - a.votes))

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE': {
      const anecdoteToUpdate = state.find(a => a.id === action.data.id)
      const updatedAnecdote = { ...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1 }
      const updatedAnecdotes = state.filter(a => a.id !== action.data.id).concat(updatedAnecdote)
      return sortAnecdotes(updatedAnecdotes)
    }
    case 'ADD': {
      const newAnecdote = asObject(action.data.anecdote)
      const updatedAnecdotes = state.concat(newAnecdote)
      return sortAnecdotes(updatedAnecdotes)
    }
    case 'INIT': {
      return action.anecdotes
    }
    default: return state
  }   
}

export const voteAnecdote = (id) => {
  return {
    type:'VOTE',
    data: {
      id
    }
  }
}

export const addAnecdote = (anecdote) => {
  return {
    type: 'ADD',
    data: {
      anecdote
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT',
    anecdotes
  }
}

export default reducer