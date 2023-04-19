import React from 'react'
import Team from './Team'
import IndividualStats from './IndividualStats'
import Player from './Player'

const CompletedLeg = () => {
  return (
    <div>
        <h2>Leg</h2>
        <Team />
        <Player />
        <IndividualStats />
    </div>
  )
}

export default CompletedLeg
// when button clicked sent state to Main as a 'leg'
// should be able to add as many legs as possible