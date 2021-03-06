import anecdoteService from '../services/anecdotes'

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
      const updatedAnecdotes = state.filter(a => a.id !== action.anecdote.id).concat(action.anecdote)
      return sortAnecdotes(updatedAnecdotes)
    }
    case 'ADD': {
      const updatedAnecdotes = state.concat(action.anecdote)
      return sortAnecdotes(updatedAnecdotes)
    }
    case 'INIT': {
      return action.anecdotes
    }
    default: return state
  }   
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.vote(anecdote)
    dispatch ({
      type:'VOTE',
      anecdote: updatedAnecdote
    })
  }
}

export const addAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD',
      anecdote
      })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()

    dispatch({
      type: 'INIT',
      anecdotes: sortAnecdotes(anecdotes)
    })
  }
}

export default reducer