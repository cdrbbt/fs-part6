import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(store => store.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const renderNotification = () => {
    if ( notification === '' ) return null
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }

  return (
    <>
    {renderNotification()}
    </>
  )
}

export default Notification