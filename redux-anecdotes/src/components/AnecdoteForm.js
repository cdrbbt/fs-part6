import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const submitAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(content))
    dispatch(changeNotification('Anecdoted added'))
    setTimeout(() => dispatch(resetNotification()), 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={submitAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm