import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@nextui-org/react';
import Nav from './Nav'

export default function Layout() {
  return (
    <>
      <Nav />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  )
}
