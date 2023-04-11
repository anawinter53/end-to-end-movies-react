import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
    <h1>Top TV</h1>
    <p style={{color: 'silver'}}>All about the smaller silver screen</p>
    <ul>
        <li><Link to='/shows'>Explore shows</Link></li>
        <li><Link to='/search'>Search for your favourite show</Link></li>
    </ul>
    </>
  )
}
