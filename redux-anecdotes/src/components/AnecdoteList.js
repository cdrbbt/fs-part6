import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification, resetNotification } from '../reducers/notificationReducer'
import Filter from './Filter'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        {`has ${anecdote.votes}`} 
        <button onClick={handleClick}>vote</button> 
      </div>
    </div>
  )

}

const AnecdoteList = () => {

  const anecdotes = useSelector(state => {
    const filteredList = state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
    return filteredList
  })
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    console.log('vote', anecdote)
    dispatch(voteAnecdote(anecdote))
    dispatch(changeNotification('Vote accepted', 5))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
         <Anecdote anecdote={anecdote} handleClick={() => vote(anecdote)}/>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList