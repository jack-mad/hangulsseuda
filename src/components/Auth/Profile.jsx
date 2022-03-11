import React from 'react'
import {Link } from 'react-router-dom'
import { Card, Text, Grid, Spacer, Row} from '@nextui-org/react';
import UsersContext from '../../context/Users/UsersContext'
import { useContext } from 'react'


export default function Profile() {
  const ctxUser = useContext(UsersContext)

  const { currentUser } = ctxUser


  return (
    <>

      <Text h1 size={100} css={{ textGradient: '45deg, $purple500 0%, $pink500 100%' }} weight="bold">내 프로필 - My profile</Text>
      <Grid.Container gap={3} justify="center">
        <Grid xs={10} md={8}>
          <Card bordered shadow={true} color='gradient'>
            <Card.Header>
              <Spacer x={1} />
              <Text h1 color="white" weight="bold" > Information</Text>
            </Card.Header>
            <Grid.Container gap={3} justify="center">
              <Grid xs={12} md={6} >
              <Card color="success">
            <Card.Image
                    src={currentUser.avatar}
                    css={{ background: 'success', mt:'20px' }}
                    objectFit='cover'
                    width={160}
                    height={160}
                    alt="Breathing app icon"
                  />
            </Card>
              </Grid>
              <Grid >
                <Text h1  color="white" weight="bold" >Name : {currentUser.name} {currentUser.lastname} </Text>
                
                <Text h1 color="white" weight="bold" >Username: {currentUser.username}</Text>
                <Text h1 color="white" weight="bold" > Lessons: {currentUser.achievements.length -1} completed </Text>
              </Grid>
            </Grid.Container> 
           </Card>
        </Grid>
        <Grid xs={10} md={8}>
          <Card bordered shadow={true} color='gradient'>
            <Card.Header>
              <Spacer x={1} />
              <Text h1 color="white" weight="bold" > Achievements </Text>
            </Card.Header>
            
            <Grid.Container gap={2} justify="flex-start">
              {currentUser.achievements.map((item, index) => (
                <Grid xs={6} sm={4} md={3} lg={2} key={index}>
                  <Card hoverable clickable color="secondary">
                    <Link to={'/lesson/' + item.character}>
                      <Card.Body>
                        <Row justify="center">
                          <Text h1 color='warning' weight="bold">{item.character}</Text>
                        </Row>
                      </Card.Body>
                      <Card.Footer justify="center">
                        <Row wrap='wrap' justify="space-between">
                        <Text h4 css={{ fontWeight: "$semibold" }} color='success'>
                          ⭐ 
                          </Text>
                          <Text h4 css={{ fontWeight: "$semibold" }} color='success'>
                          Done
                          </Text>
                        </Row>
                      </Card.Footer>
                    </Link>
                  </Card>
                </Grid>
              ))}
            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}
