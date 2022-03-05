import { useContext } from 'react'
import UsersContext from '../../context/Users/UsersContext'
import { Button, Container, Grid, Avatar, Text} from '@nextui-org/react';
import { Link } from 'react-router-dom'

export default function Nav() {
  const ctxUser = useContext(UsersContext)

    const {
        currentUser,
        authStatus,
        logoutUser
    } = ctxUser
  return (
    <>
      <Container fluid >
        <Grid.Container gap={2} justify="center" alignItems="center">
          <Grid xs >
            <Link to="/">
              <Button auto>Home</Button>
            </Link>
          </Grid>
          <Grid xs></Grid>
          <Grid xs={6} justify="flex-end">
          {
            authStatus ?
              <Grid.Container gap={2} justify="flex-end" alignItems="center">
                <Grid>
                  <Text h4> 안녕하세요 {currentUser.name} ! </Text>
                </Grid>
                <Grid>
                <Link to="/profile">
                  <Avatar size="lg" src={currentUser.avatar} color="primary" bordered squared zoomed></Avatar>
                </Link>
                </Grid>
                <Grid>
                  <Link to="/" onClick={() => { logoutUser() }}>
                    <Button color="error" auto>Sign Out</Button>
                  </Link>
                </Grid>
              </Grid.Container>
            :
            <Grid.Container gap={2} justify="flex-end" alignItems="center">
                <Grid>
                  <Text h4> Join us, it's free ! </Text>
                </Grid>
                <Grid>
                <Link to="/signup">
                  <Button color="gradient" auto>Sign Up</Button>
                </Link>
                </Grid>
                <Grid>
                <Link to="/signin">
                <Button color="gradient" auto>Sign In</Button>
              </Link>
                </Grid>
              </Grid.Container>
          }

          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}
