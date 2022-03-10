import { useReducer } from 'react'
import UsersReducer from './UsersReducer'
import UsersContext from './UsersContext'
import axiosClient from './../../config/axios'

const UsersState = (props) => {

	const initialState = {
		currentUser: {
			name: "",
			lastname: "",
			username: "",
			avatar: ""
		},
		authStatus: false
	}

	const [globalState, dispatch] = useReducer(UsersReducer, initialState)

	const signupUser = async (form) => {

		const res = await axiosClient.post("/api/users/signup", form)

		const token = res.data.data

		dispatch({
			type: "REGISTRO_EXITOSO",
			payload: token
		})

	}

	const verifyingToken = async () => {

		// 1. VERIFICACIÓN DE TOKEN

		const token = localStorage.getItem("token")

		if (!token){
			return delete axiosClient.defaults.headers.common["x-auth-token"]
		}

		// ADJUNTO EL TOKEN A LA SIGUIENTE PETICIÓN DE AXIOS
		axiosClient.defaults.headers.common["x-auth-token"] = token

		// 2. REALIZAR PETICIÓN AXIOS
		const res = await axiosClient.get("/api/users/verify")
		
		const userData = res.data.data

		dispatch({
			type: "VERIFICAR_TOKEN",
			payload: userData
		})

	}
	
	const signinUser = async (form) => {

		const res = await axiosClient.post("/api/users/signin", form)

		const token = res.data.data

		dispatch({
			type: "LOGIN_EXITOSO",
			payload: token
		})


	}

	const logoutUser = async () => {

		console.log("Cerrando sesión")

		dispatch({
			type: "CERRAR_SESION"
		})

	}

	const addLesson = async (json) => {

		const res = await axiosClient.post("/api/users/lesson/add", json)
		console.log(res);
		// const token = res.data.data
	
		// dispatch({
		// 	type: "REGISTRO_EXITOSO",
		// 	payload: token
		// })
	
	}


	return (
		<UsersContext.Provider
			value={{
				currentUser: globalState.currentUser,
				authStatus: globalState.authStatus,
				signupUser,
				verifyingToken,
				signinUser,
				logoutUser,
				addLesson
			}}
		>
			{props.children}
		</UsersContext.Provider>
	)

}
 


export default UsersState