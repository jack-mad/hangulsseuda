import React from 'react'
import { Card, Text } from '@nextui-org/react';


export default function Home() {
  return (
    <>
      <Card bordered shadow={false} hoverable >
      <Text
          h1
          size={200}
          css={{
            textGradient: '45deg, $blue500 -20%, $pink500 50%'
          }}
          weight="bold"
        > 한글 쓰다
        </Text>
        <Text
          h1
          size={100}
          css={{
            textGradient: '45deg, $purple500 -20%, $pink500 100%'
          }}
          weight="bold"
        >
          Hangulsseuda
        </Text>
        <Text
          h1
          size={50}
          css={{
            textGradient: '45deg, $yellow500 -20%, $red500 100%'
          }}
          weight="bold"
        >
          A MERN Web App for learning to write Korean
        </Text>
      </Card>
    </>
  )
}
