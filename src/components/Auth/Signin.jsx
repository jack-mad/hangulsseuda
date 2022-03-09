import {useContext, useState} from 'react'
import UsersContext from './../../context/Users/UsersContext'
import { Container, Grid, Card, Col, Input, Text, Spacer, Button  } from '@nextui-org/react';


export default function Signin() {
  const ctxUser = useContext(UsersContext)

  const {
    signinUser
  } = ctxUser


  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (event) => {

    setData({
      ...data,
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signinUser(data)
  }
  return (
    <>
      <Container fluid css={{ my: "20vh" }}>
        <Grid.Container gap={1} justify="center">
          <Grid xs></Grid>
          <Grid xs={10} md={8} lg={6} xl={5} justify="center">
            <Grid xs={12} sm={5}>
              <Card cover css={{ w: '100%' }}>
                <Card.Header css={{ position: 'absolute', zIndex: 1, bgBlur: '#000000',
                    borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)', }}>
                  <Col>
                    <Text
                      h1
                      css={{
                        textGradient: '45deg, $yellow500 0%, $red500 100%'
                      }}
                      weight="bold"
                    >
                      Sign In
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body>
                  <Card.Image
                    src='https://images.unsplash.com/photo-1538485399081-7191377e8241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VvdWx8ZW58MHx8MHx8&w=1000&q=80'
                    height={350}
                    width="100%"
                    alt="Card example background"
                  />
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={12} sm={7}>
              <Card cover css={{ w: '100%', py: '5%' }}>
                <Card.Body>
                  <Container>
                  <form onSubmit={(evt) => { handleSubmit(evt) }}>
                    <Text h3>Username</Text>
                    <Input bordered color="primary" css={{ w: '100%', my:'1%'}} name="username" required 
                      value={data.username}
                      onChange={(evt) => { handleChange(evt) }}
                    />
                    <Spacer y={1} />
                    <Text h3>Password</Text>
                    <Input bordered color="primary" css={{ w: '100%', my:'1%'}} name="password" type="password" required 
                      value={data.password}
                      onChange={(evt) => { handleChange(evt) }}/>
                    <Spacer y={1} />
                    <Button color="gradient" rounded shadow size="xl" css={{ w: '100%', my:'5%'}}>
                        Sign in
                    </Button>
                  </form>
                  </Container>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
          <Grid xs></Grid>
        </Grid.Container>
      </Container>
    </>
  )
}
