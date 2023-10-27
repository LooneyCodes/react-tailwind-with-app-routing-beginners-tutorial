import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

function root() {
  return (
    <>
        <Nav/>
        <Outlet />
    </>
  )
}

export default root