import React from 'react'
import '../styles/Title.css'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <Link
      to={{ pathname: '/' }}
      id='shallotTitle'
    >
      The Shallot
    </Link>
  )
}

export default Title
