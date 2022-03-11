import React from 'react'
import { useContext } from 'react'
import UsersContext from '../../context/Users/UsersContext'
import { Card, Text, Spacer, Grid, Row } from '@nextui-org/react';
import { Link } from 'react-router-dom';
export default function LevelCard({ data , title, disabled }) {
  const ctxUser = useContext(UsersContext)
  const { currentUser } = ctxUser
  
  const lessons = currentUser.achievements.map((e)=>{ return e.character })

  console.log(lessons);
  return (
    <>
      <Card bordered shadow={true} color={ disabled ? 'secondary' : 'gradient' }>
            <Card.Header>
              <Spacer x={1} />
              <Text h1 color="white" weight="bold" > Level {title[0]} : {title[1]} </Text>
            </Card.Header>
            <Grid.Container gap={2} justify="flex-start">
              {data.map((item, index) => (
                <Grid xs={6} sm={4} md={3} lg={2}key={index}>
                    <Card hoverable clickable >
                    <Link to={'/lesson/'+ item.name }>
                      <Card.Body>
                        <Row justify="center">
                          <Text h1 size={100} color={ disabled ? '$gray500' : lessons.includes(item.name) > 0 ? 'success' : 'error' } weight="bold">{item.character}</Text>
                        </Row>
                      </Card.Body>
                      <Card.Footer justify="center">
                        <Row wrap='wrap' justify="space-between">
                          <Text h3>
                            {item.name}
                          </Text>
                          <Text h4 css={{ fontWeight: "$semibold" }} color={ disabled ? 'secondary' : lessons.includes(item.name) > 0 ? 'success' : 'error' }>
                            { disabled ? 'Coming soon' : lessons.includes(item.name) > 0 ? 'Done' : 'Available'  }
                          </Text>
                        </Row>
                      </Card.Footer>
                      </Link>
                    </Card>
                </Grid>
              ))}
            </Grid.Container>
          </Card>
    </>
  )
}
