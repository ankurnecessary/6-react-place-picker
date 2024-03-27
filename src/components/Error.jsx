import React from 'react'
import PropTypes from 'prop-types'

export default function Error ({ title, message, onConfirm }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  )
}

Error.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func
}
