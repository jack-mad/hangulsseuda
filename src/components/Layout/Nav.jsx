import { useContext } from 'react'
import UsersContext from '../../context/Users/UsersContext'
import { Button, Container, Grid, Avatar, Text, Spacer } from '@nextui-org/react';
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
          <Grid xs={5} alignItems="center">
          <Text h1 css={{ textGradient: '45deg, $blue500 -20%, $pink500 50%'}} weight="bold"> 한글 쓰다 </Text>
          <Spacer x={1} />
            {
              authStatus ?
              <Link to="/">
                <Button css={{ linearGradient: '45deg, $purple500 -40%, $pink500 100%' }} auto>My board</Button>
              </Link>
              :
              <Link to="/">
                <Button color="" auto>Home</Button>
              </Link>
            }
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
