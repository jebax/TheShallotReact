import React from 'react'
import '../styles/title.css'
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
