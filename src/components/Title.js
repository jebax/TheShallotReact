import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <Link
      to={{ pathname: '/' }}
      id='shallot-title'
    >
      The Shallot
    </Link>
  )
}

export default Title
