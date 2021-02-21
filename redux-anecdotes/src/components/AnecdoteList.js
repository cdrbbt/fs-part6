import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

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

  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
         <Anecdote anecdote={anecdote} handleClick={() => vote(anecdote.id)}/>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList