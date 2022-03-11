import { useContext, useEffect } from 'react'

import { Navigate } from 'react-router-dom'
import UsersContext from '../context/Users/UsersContext'


export default function Auth({ component: Component }) {

	const userCtx = useContext(UsersContext)

	const { 
		authStatus, 
		verifyingToken } = userCtx


	useEffect(() => {
		verifyingToken()
	}, [authStatus, verifyingToken])


  return (
	<div>

		{
			authStatus ?
			
			(<Component />)
			:
			
			(<Navigate replace to ="/" />)
		}

		
	</div>
  )
}