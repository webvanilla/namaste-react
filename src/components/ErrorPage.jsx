import React from 'react'
import { Link, useRouteError } from 'react-router'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
        <h2>{error.status} {error.statusText}</h2>
       <p>Go back to <Link to="/">Home</Link></p>
    </div>
  )
}

export default ErrorPage