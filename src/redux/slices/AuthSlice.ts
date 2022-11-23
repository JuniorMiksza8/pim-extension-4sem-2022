import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface AuthState {
  token: string | null
  refreshToken: string | null
  email: string | null
  
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  email: null,
}

interface AuthenticateData {
  token: string
  refreshToken: string
  email: string
}

export const AuthSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    authenticate: (state, action: PayloadAction<AuthenticateData>) => {
  
      state.token = action.payload.token

      state.refreshToken = action.payload.refreshToken

      state.email = action.payload.email
    },
    logout: (state) => {
      state.token = null
      state.refreshToken = null
      state.email = null
    },
  },
})

export const { authenticate, logout } = AuthSlice.actions

export default AuthSlice.reducer
