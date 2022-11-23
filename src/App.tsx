import { ThemeProvider } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { createMemoryRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import { RootState } from "./redux/store"
import { MuiTheme } from "./settings/MuiTheme"

function App() {
  
  const { email } = useSelector((state : RootState)=> state.auth)

  const loggedRouter = createMemoryRouter([
    {
      path : '/',
      element : <Home />
    }
  ])

  const router = createMemoryRouter([
    {
      path : '/',
      element : <Login />
    },
    {
      path : '/sign-up',
      element : <SignUp />
    }
  ])

  return (
   <ThemeProvider theme={MuiTheme} >
     <RouterProvider router={email ? loggedRouter : router} />
   </ThemeProvider>
  )
}

export default App
