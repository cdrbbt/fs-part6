import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'
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

const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    console.log('vote', anecdote)
    props.voteAnecdote(anecdote)
    props.changeNotification('Vote accepted', 5)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {props.anecdotes.map(anecdote =>
        <div key={anecdote.id}>
         <Anecdote anecdote={anecdote} handleClick={() => vote(anecdote)}/>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  const filteredList = state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
  return {
    anecdotes: filteredList
  }
}

export default connect(mapStateToProps, { voteAnecdote, changeNotification })(AnecdoteList)