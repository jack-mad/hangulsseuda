import React from 'react'
import { Card, Text, Spacer, Grid, Row } from '@nextui-org/react';
import { Link } from 'react-router-dom';
export default function LevelCard({ data , title, disabled }) {
  return (
    <>
      <Card bordered shadow={true} color={ disabled ? 'secondary' : 'success' }>
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
                          <Text h1 size={100} color={ disabled ? '$gray500' : 'primary' } weight="bold">{item.character}</Text>
                        </Row>
                      </Card.Body>
                      <Card.Footer justify="center">
                        <Row wrap='wrap' justify="space-between">
                          <Text h3>
                            {item.name}
                          </Text>
                          <Text h4 css={{ fontWeight: "$semibold" }} color={ disabled ? 'secondary' : 'success' }>
                            { disabled ? 'Coming soon' : 'Available' }
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
