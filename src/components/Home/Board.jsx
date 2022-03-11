import React from 'react'
import { Text, Grid ,Progress} from '@nextui-org/react';
import LevelCard from './LevelCard'
import { useState, useEffect } from 'react';
import axiosClient from '../../config/axios'

export default function Home() {
  
  const [newL1, setNewL1] = useState(null)
  const [newL2, setNewL2] = useState(null)
  const [newL3, setNewL3] = useState(null)
  const [newL4, setNewL4] = useState(null)
  const [newL5, setNewL5] = useState(null)
  const [newL6, setNewL6] = useState(null)
  const [newL7, setNewL7] = useState(null)
  const [newL8, setNewL8] = useState(null)

  useEffect(() => {
    const getL1 = async () => {
      const {data} = await axiosClient.get('/api/seed/level1')
      // console.log(data);
      setNewL1(data)
    }
    getL1();
  },[])

  useEffect(() => {
    const getL2 = async () => {
      const {data} = await axiosClient.get('/api/seed/level2')
      // console.log(data);
      setNewL2(data)
    }
    getL2();
  },[])

  useEffect(() => {
    const getL3 = async () => {
      const {data} = await axiosClient.get('/api/seed/level3')
      // console.log(data);
      setNewL3(data)
    }
    getL3();
  },[])

  useEffect(() => {
    const getL4 = async () => {
      const {data} = await axiosClient.get('/api/seed/level4')
      // console.log(data);
      setNewL4(data)
    }
    getL4();
  },[])

  useEffect(() => {
    const getL5 = async () => {
      const {data} = await axiosClient.get('/api/seed/level5')
      // console.log(data);
      setNewL5(data)
    }
    getL5();
  },[])

  useEffect(() => {
    const getL6 = async () => {
      const {data} = await axiosClient.get('/api/seed/level6')
      // console.log(data);
      setNewL6(data)
    }
    getL6();
  },[])

  useEffect(() => {
    const getL7 = async () => {
      const {data} = await axiosClient.get('/api/seed/level7')
      // console.log(data);
      setNewL7(data)
    }
    getL7();
  },[])

  useEffect(() => {
    const getL8 = async () => {
      const {data} = await axiosClient.get('/api/seed/level8')
      // console.log(data);
      setNewL8(data)
    }
    getL8();
  },[])

  return (
    <>
      <Text h1 size={100} css={{ textGradient: '45deg, $purple500 0%, $pink500 100%' }} weight="bold">내 보드 - My board</Text>
      <Grid.Container gap={3}>
        <Grid xs={12}>
          {
            newL1?
              <LevelCard data={newL1.data} title={newL1.title} disabled={false}/>
            :
              <Progress indeterminated value={50} color="secondary" status="secondary" />
          }
        </Grid>
        <Grid xs={12}>
          {
            newL2?
              <LevelCard data={newL2.data} title={newL2.title} disabled={false}/>
            :
              <Progress indeterminated value={50} color="secondary" status="secondary" />
          }
        </Grid>
        <Grid xs={12}>
          {
            newL3?
              <LevelCard data={newL3.data} title={newL3.title} disabled={false}/>
            :
              <Progress indeterminated value={50} color="secondary" status="secondary" />
          }
        </Grid>
        <Grid xs={12}>
          {
            newL4?
              <LevelCard data={newL4.data} title={newL4.title} disabled={false}/>
            :
              <Progress indeterminated value={50} color="secondary" status="secondary" />
          }
        </Grid>
        <Grid xs={12}>
          {
            newL5?
              <LevelCard data={newL5.data} title={newL5.title} disabled={false}/>
            :
              <Progress indeterminated value={50} color="secondary" status="secondary" />
          }
        </Grid>
        <Grid xs={12}>
          {
            newL6?
              <LevelCard data={newL6.data} title={newL6.title} disabled={false}/>
            :
              <Progress indeterminated value={50} color="secondary" status="secondary" />
          }
        </Grid>
        <Grid xs={12}>
          {
            newL7?
              <LevelCard data={newL7.data} title={newL7.title} disabled={false}/>
            :
              <Progress indeterminated value={50} color="secondary" status="secondary" />
          }
        </Grid>
        <Grid xs={12}>
          {
            newL8?
              <LevelCard data={newL8.data} title={newL8.title} disabled={false}/>
            :
              <Progress indeterminated value={50} color="secondary" status="secondary" />
          }
        </Grid>
        
      </Grid.Container>
    </>
  )
}
