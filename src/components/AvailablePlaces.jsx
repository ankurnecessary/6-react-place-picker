import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Places from './Places.jsx'

export default function AvailablePlaces ({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/places')
      .then((response) => response.json())
      .then((resData) => setAvailablePlaces(resData.places))
  }, [])

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  )
}

AvailablePlaces.propTypes = {
  onSelectPlace: PropTypes.func.isRequired
}
