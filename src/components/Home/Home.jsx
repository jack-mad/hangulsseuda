import React from 'react'
import { useContext } from 'react'
import UsersContext from '../../context/Users/UsersContext'
import Publicinfo from './Publicinfo';
import Board from './Board';

export default function Home() {
  const ctxUser = useContext(UsersContext)

    const {
        authStatus
    } = ctxUser
  return (
    <>
      {
        authStatus ?
        <Board />
        :
        <Publicinfo />
      }
    </>
  )
}
