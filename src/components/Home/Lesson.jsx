import { useRef } from 'react'

import { Text, Card, Grid, Spacer, Row, Button } from '@nextui-org/react'
import CanvasDraw from 'react-canvas-draw'


export default function Lesson() {

  const main = useRef(null)
  const r1 = useRef(null)
  const r2 = useRef(null)
  const r3 = useRef(null)
  const r4 = useRef(null)

  const mainClear = () => {
    main.current.clear()
  }
  const mainUndo = () => {
    main.current.undo()
  }

  const r1Clear = () => {
    r1.current.clear()
  }
  const r1Undo = () => {
    r1.current.undo()
  }

  const r2Clear = () => {
    r2.current.clear()
  }
  const r2Undo = () => {
    r2.current.undo()
  }

  const r3Clear = () => {
    r3.current.clear()
  }
  const r3Undo = () => {
    r3.current.undo()
  }

  const r4Clear = () => {
    r4.current.clear()
  }
  const r4Undo = () => {
    r4.current.undo()
  }

  const saveLesson =[]

  const saveAll = () => {
    saveLesson.push(main.current.getSaveData())
    saveLesson.push(r1.current.getSaveData())
    saveLesson.push(r2.current.getSaveData())
    saveLesson.push(r3.current.getSaveData())
    saveLesson.push(r4.current.getSaveData())

    console.log(saveLesson);

    main.current.clear();
    r1.current.clear();
    r2.current.clear();
    r3.current.clear();
    r4.current.clear();
  }

  return (
    <>
      <Text h1 size={100} css={{ textGradient: '45deg, $purple500 -40%, $pink500 100%' }} weight="bold">수업 - Lesson 1.1</Text>
      <Grid.Container gap={3}>
        <Grid xs={5}>
          <Card bordered shadow={true} css={{ background: '$blue200' }} >
            <Card.Header>
              <Spacer x={1} />
              <Text h1 size={80}color="$blue500" weight="bold" >The vowel A</Text>
            </Card.Header>
            <Card.Body css={{ pt: '0px', mt: '-80px'}}>

              <Grid.Container gap={2}>
                <Row >
                  <Grid xs={12} justify="center" alignItems="center" >
                  <Text h1 color="secondary" size={300} weight="bold" >ㅏ</Text>
                  </Grid>
                </Row>
                <Row justify="center" alignItems="center">
                  <Grid>
                    <Button onClick={() => { saveAll() }} color="success" size="xl" auto><Text h2 color="white" weight="bold">Save and Next lesson</Text></Button>
                  </Grid>
                  
                </Row>
              </Grid.Container>

            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={7}>
          <Card bordered shadow={true} css={{ background: '$blue200' }} >
            <Card.Header>
              <Spacer x={1} />
              <Text h1 color="$blue500" weight="bold" >Intro: Please draw above the letter correctly.</Text>
            </Card.Header>
            <Card.Body>

              <Grid.Container gap={2}>
                <Row >
                  <Grid xs={12} justify="center" alignItems="center" >
                    <CanvasDraw lazyRadius={0} brushRadius={14} hideGrid={true} imgSrc='https://i.ibb.co/FDD6yPq/a.png' width={400} height={400} ref={main} />
                  </Grid>
                </Row>
                <Row justify="center" alignItems="center">
                  <Grid>
                    <Button onClick={() => mainUndo()} color="primary" size="xl" auto> <img src="https://img.icons8.com/ios-filled/30/ffffff/undo.png" alt="Undo" /> </Button>
                  </Grid>
                  <Grid>
                    <Button onClick={() => mainClear()} color="error" size="xl" auto> <img src="https://img.icons8.com/ios-filled/30/ffffff/erase.png" alt="Erase" />  </Button>
                  </Grid>
                  
                </Row>
              </Grid.Container>

            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12}>
          <Card bordered shadow={true} css={{ background: '$blue200' }} >
            <Card.Header>
              <Spacer x={1} />
              <Text h1 color="$blue500" weight="bold" >5-Repeat: Please draw above each letter correctly.</Text>
            </Card.Header>

            <Grid.Container gap={2} justify="center">
              <Grid xs={3}>
              <Grid.Container gap={2}>
                  <Row >
                    <Grid xs={12} justify="center" alignItems="center" >
                      <CanvasDraw lazyRadius={0} brushRadius={14} hideGrid={true} imgSrc='https://i.ibb.co/FDD6yPq/a.png' ref={r1} />
                    </Grid>
                  </Row>
                  <Row justify="center" alignItems="center">
                    <Grid>
                      <Button onClick={() => r1Undo()} color="primary" size="xl" auto> <img src="https://img.icons8.com/ios-filled/30/ffffff/undo.png" alt="Undo" /> </Button>
                    </Grid>
                    <Grid>
                      <Button onClick={() => r1Clear()} color="error" size="xl" auto> <img src="https://img.icons8.com/ios-filled/30/ffffff/erase.png" alt="Erase" />  </Button>
                    </Grid>
                    
                  </Row>
                </Grid.Container>
              </Grid>
              <Grid xs={3}>
              <Grid.Container gap={2}>
                  <Row >
                    <Grid xs={12} justify="center" alignItems="center" >
                      <CanvasDraw lazyRadius={0} brushRadius={14} hideGrid={true} imgSrc='https://i.ibb.co/FDD6yPq/a.png' ref={r2} />
                    </Grid>
                  </Row>
                  <Row justify="center" alignItems="center">
                    <Grid>
                      <Button onClick={() => r2Undo()} color="primary" size="xl" auto> <img src="https://img.icons8.com/ios-filled/30/ffffff/undo.png" alt="Undo" /> </Button>
                    </Grid>
                    <Grid>
                      <Button onClick={() => r2Clear()} color="error" size="xl" auto> <img src="https://img.icons8.com/ios-filled/30/ffffff/erase.png" alt="Erase" />  </Button>
                    </Grid>
                    
                  </Row>
                </Grid.Container>
              </Grid>
              <Grid xs={3}>
              <Grid.Container gap={2}>
                  <Row >
                    <Grid xs={12} justify="center" alignItems="center" >
                      <CanvasDraw lazyRadius={0} brushRadius={14} hideGrid={true} imgSrc='https://i.ibb.co/FDD6yPq/a.png' ref={r3} />
                    </Grid>
                  </Row>
                  <Row justify="center" alignItems="center">
                    <Grid>
                      <Button onClick={() => r3Undo()} color="primary" size="xl" auto> <img src="https://img.icons8.com/ios-filled/30/ffffff/undo.png" alt="Undo" /> </Button>
                    </Grid>
                    <Grid>
                      <Button onClick={() => r3Clear()} color="error" size="xl" auto> <img src="https://img.icons8.com/ios-filled/30/ffffff/erase.png" alt="Erase" />  </Button>
                    </Grid>
                    
                  </Row>
                </Grid.Container>
              </Grid>
              <Grid xs={3}>
              <Grid.Container gap={2}>
                  <Row >
                    <Grid xs={12} justify="center" alignItems="center" >
                      <CanvasDraw lazyRadius={0} brushRadius={14} hideGrid={true} imgSrc='https://i.ibb.co/FDD6yPq/a.png' ref={r4} />
                    </Grid>
                  </Row>
                  <Row justify="center" alignItems="center">
                    <Grid>
                      <Button onClick={() => r4Undo()} color="primary" size="xl" auto> <img src="https://img.icons8.com/ios-filled/30/ffffff/undo.png" alt="Undo" /> </Button>
                    </Grid>
                    <Grid>
                      <Button onClick={() => r4Clear()} color="error" size="xl" auto> <img src="https://img.icons8.com/ios-filled/30/ffffff/erase.png" alt="Erase" />  </Button>
                    </Grid>
                    {/* <Grid>
                      <Button color="success" size="xl" auto> <img src="https://img.icons8.com/ios-glyphs/30/ffffff/checkmark--v1.png" alt="Checkmark" /> </Button>
                    </Grid> */}
                  </Row>
                </Grid.Container>
              </Grid>
            </Grid.Container>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  )
}
