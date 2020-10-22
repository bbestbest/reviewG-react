import React, { useState, createContext, useEffect, useContext, useReducer } from 'react'

const ActionContext = createContext({})

const Catagories = {
  types: {
    action: 'action',
    adventure: 'adventure',
    rpg: 'rpg',
    simulation: 'simulation',
    strategy: 'strategy',
    sport: 'sport'
  }
}

function reducer (catagories,)