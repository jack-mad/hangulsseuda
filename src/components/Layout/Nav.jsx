import React from 'react'
import { Button, Container, Grid } from '@nextui-org/react';
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <>
      <Container fluid >

      <Grid.Container gap={2} justify="center">
        <Grid xs >
        <Link to="/">
          <Button size="xl">Home</Button>
        </Link>
        </Grid>
        <Grid xs={6}></Grid>
        <Grid xs justify="flex-end">
        <Button.Group size="xl">
          <Link to="/signup">
          <Button>Sign Up</Button>
          </Link> &nbsp;&nbsp;&nbsp;
          <Link to="/signin">
          <Button>Sign In</Button>
          </Link>
          {/* <Button>•••</Button> */}
        </Button.Group>
        </Grid>
      </Grid.Container>

      
      </Container>
    </>
  )
}
