import { useContext, useState } from 'react'
import UsersContext from './../../context/Users/UsersContext'
import { Container, Grid, Card, Col, Row, Input, Text, Spacer, Button, Avatar } from '@nextui-org/react';


export default function Signup() {
  const ctxUser = useContext(UsersContext)

  const {
    signupUser
  } = ctxUser


  const [data, setData] = useState({
    name:"",
    lastname:"",
    username: "",
    password: "",
    avatar:""
  })

  const handleChange = (event) => {

    setData({
      ...data,
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signupUser(data)
  }
  return (
    <>
      <Container fluid css={{ my: "20vh" }}>
        <Grid.Container gap={1} justify="center">
          <Grid xs></Grid>
          <Grid xs={8} justify="center">
            <Grid xs={12} sm={5}>
              <Card cover css={{ w: '100%' }}>
                <Card.Header css={{
                  position: 'absolute', zIndex: 1, bgBlur: '#ffffff',
                  borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                }}>
                  <Col>
                    <Text
                      h1
                      css={{
                        textGradient: '45deg, $purple500 -20%, $pink500 100%'
                      }}
                      weight="bold"
                    >
                      Sign Up
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body>
                  <Card.Image
                    src='https://images.alphacoders.com/596/thumb-1920-596282.jpg'
                    height="100%"
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
                      <Row>
                        <Col>
                          <Text h3>Name</Text>
                          <Input bordered color="primary" css={{ w: '100%', my: '1%' }} name="name" required
                            value={data.name}
                            onChange={(evt) => { handleChange(evt) }}
                          />
                        </Col>
                        <Spacer x={1} />
                        <Col >
                          <Text h3>Lastname</Text>
                          <Input bordered color="primary" css={{ w: '100%', my: '1%' }} name="lastname" required
                            value={data.lastname}
                            onChange={(evt) => { handleChange(evt) }} />
                        </Col>
                      </Row>
                      <Text h3>Username</Text>
                      <Input bordered color="primary" css={{ w: '100%', my: '1%' }} name="username" required
                        value={data.username}
                        onChange={(evt) => { handleChange(evt) }}
                      />
                      <Text h3>Password</Text>
                      <Input bordered color="primary" css={{ w: '100%', my: '1%' }} name="password" type="password" required
                        value={data.password}
                        onChange={(evt) => { handleChange(evt) }} />
                      <Spacer y={1} />
                      <Text h3>Avatar</Text>
                      <Grid.Container gap={1} justify="center">
                      <Grid xs={3}>
                        <input type="radio" id="a1"value="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/alien_1f47d.png" name="avatar" onChange={(evt) => { handleChange(evt) }} />
                        <label htmlFor="a1">
                        <Avatar size="xl" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/alien_1f47d.png" color="primary"  bordered squared zoomed/>
                        </label>
                      </Grid>
                      <Grid xs={3}>
                        <input type="radio" id="a2"value="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/cat-face_1f431.png" name="avatar" onChange={(evt) => { handleChange(evt) }} />
                        <label htmlFor="a2">
                        <Avatar size="xl" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/cat-face_1f431.png" color="primary"  bordered squared zoomed/>
                        </label>
                      </Grid>
                      <Grid xs={3}>
                        <input type="radio" id="a3"value="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/robot_1f916.png" name="avatar" onChange={(evt) => { handleChange(evt) }} />
                        <label htmlFor="a3">
                        <Avatar size="xl" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/robot_1f916.png" color="primary"  bordered squared zoomed/>
                        </label>
                        </Grid>
                        <Grid xs={3}>
                        <input type="radio" id="a4"value="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/unicorn_1f984.png" name="avatar" onChange={(evt) => { handleChange(evt) }} />
                        <label htmlFor="a4">
                        <Avatar size="xl" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/unicorn_1f984.png" color="primary"  bordered squared zoomed/>
                        </label>
                        </Grid>
                        <Grid xs={3}>
                        <input type="radio" id="a5"value="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/panda_1f43c.png" name="avatar" onChange={(evt) => { handleChange(evt) }} />
                        <label htmlFor="a5">
                        <Avatar size="xl" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/panda_1f43c.png" color="primary"  bordered squared zoomed/>
                        </label>
                        </Grid>
                        <Grid xs={3}>
                        <input type="radio" id="a6"value="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/dog-face_1f436.png" name="avatar" onChange={(evt) => { handleChange(evt) }} />
                        <label htmlFor="a6">
                        <Avatar size="xl" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/dog-face_1f436.png" color="primary"  bordered squared zoomed/>
                        </label>
                        </Grid>
                        <Grid xs={3}>
                        <input type="radio" id="a7"value="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/dragon-face_1f432.png" name="avatar" onChange={(evt) => { handleChange(evt) }} />
                        <label htmlFor="a7">
                        <Avatar size="xl" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/dragon-face_1f432.png" color="primary"  bordered squared zoomed/>
                        </label>
                        </Grid>
                        <Grid xs={3}>
                        <input type="radio" id="a8"value="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/lion_1f981.png" name="avatar" onChange={(evt) => { handleChange(evt) }} />
                        <label htmlFor="a8">
                        <Avatar size="xl" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/lion_1f981.png" color="primary"  bordered squared zoomed/>
                        </label>
                        </Grid>
                      </Grid.Container>
                      <Spacer y={1} />
                      <Button color="gradient" rounded shadow size="xl" css={{ w: '100%', my: '5%' }}>
                        Sign up
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
