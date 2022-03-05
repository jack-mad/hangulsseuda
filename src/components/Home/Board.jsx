import React from 'react'
import { Card, Text, Spacer, Grid, Row } from '@nextui-org/react';


export default function Home() {
  const list = [
    {
      title: 'i',
      img: 'ㅣ',
      price: 'Easy peasy'
    },
    {
      title: 'a',
      img: 'ㅏ',
      price: 'Easy peasy'
    },
    {
      title: 'a (Open)',
      img: 'ㅓ',
      price: 'Easy peasy'
    },
    {
      title: 'u (Open)',
      img: 'ㅡ',
      price: 'Easy peasy'
    },
    {
      title: 'u',
      img: 'ㅜ',
      price: 'Easy peasy'
    },
    {
      title: 'o',
      img: 'ㅗ',
      price: 'Easy peasy'
    },
    {
      title: 'ng',
      img: 'ㅇ',
      price: 'Easy peasy'
    }
  ];

  return (
    <>
      <Text h1 size={100} css={{ textGradient: '45deg, $purple500 -40%, $pink500 100%' }} weight="bold">내 보드 - My board</Text>
      <Grid.Container gap={3}>
        <Grid xs={12}>
          <Card bordered shadow={true} color="success" >
            <Card.Header>
              <Spacer x={1} />
              <Text h1 color="white" weight="bold" > Level 1 : Vowels </Text>
            </Card.Header>
            <Grid.Container gap={2} justify="flex-start">
              {list.map((item, index) => (
                <Grid xs={6} sm={3} lg={2} key={index}>
                  <Card hoverable clickable>
                    <Card.Body>
                      {/* <Card.Image
                        objectFit="cover"
                        src={item.img}
                        width='100%'
                        height={140}
                        alt={item.title}
                      /> */}
                      <Row justify="center">
                        <Text h1 size={100} color="primary" weight="bold">{item.img}</Text>
                      </Row>
                    </Card.Body>
                    <Card.Footer justify="flex-start">
                      <Row wrap='wrap' justify="space-between">
                        <Text h4>
                          {item.title}
                        </Text>
                        <Text css={{ color: "$green500", fontWeight: "$semibold" }}>
                          {item.price}
                        </Text>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              ))}
            </Grid.Container>
          </Card>
        </Grid>
        <Grid xs={12}>
          <Card bordered shadow={true} css={{ background: "$gray300" }} >
            <Card.Header>
              <Spacer x={1} />
              <Text h1 css={{ color: "$gray600"}} weight="bold" > Level 2 : Diphthongs </Text>
            </Card.Header>
            <Text h1 size={70} css={{ textGradient: '45deg, $gray400 -40%, $gray600 100%' }} weight="bold">Coming Soon</Text>
          </Card>
        </Grid>
        <Grid xs={12}>
          <Card bordered shadow={true} css={{ background: "$gray300" }} >
            <Card.Header>
              <Spacer x={1} />
              <Text h1 css={{ color: "$gray600"}} weight="bold" > Level 3 : First consonants </Text>
            </Card.Header>
            <Text h1 size={70} css={{ textGradient: '45deg, $gray400 -40%, $gray600 100%' }} weight="bold">Coming Soon</Text>
          </Card>
        </Grid>
        <Grid xs={12}>
          <Card bordered shadow={true} css={{ background: "$gray300" }} >
            <Card.Header>
              <Spacer x={1} />
              <Text h1 css={{ color: "$gray600"}} weight="bold" > Level n : n consonants </Text>
            </Card.Header>
            <Text h1 size={70} css={{ textGradient: '45deg, $gray400 -40%, $gray600 100%' }} weight="bold">Coming Soon</Text>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}
