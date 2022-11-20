import { createSlice } from '@reduxjs/toolkit'
const jwtToken = localStorage.getItem('jwt-token') || undefined

const initialState = {
  isLoggedIn: false,
  isGuestUser: false,
  user: {},
  jwt: null,
  socketId: null,
}

const sessionState = {
  ...initialState,
  isLoggedIn: Boolean(jwtToken),
  jwt: jwtToken,
}

const guestUserData = {
  name: 'Guest',
  email: 'guest@example.com',
}

const getFullJwt = (token) => {
  return `Bearer ${token}`
}

const userSlice = createSlice({
  name: 'user',
  initialState: sessionState,
  reducers: {
    login(state, { payload }) {
      state.isLoggedIn = true
      state.isGuestUser = false
      state.jwt = getFullJwt(payload)
    },

    loginAsGuest(state) {
      state.isLoggedIn = true
      state.isGuestUser = true
      state.user = guestUserData
    },

    logout(state) {
      Object.assign(state, initialState)
    },

    updateJwt(state, { payload }) {
      state.jwt = getFullJwt(payload)
    },

    updateSocketId(state, { payload }) {
      state.socketId = payload
    },

    updateUser(state, { payload }) {
      Object.assign(state.user, payload)
    },
  },
})

export const userReducers = userSlice.reducer
export default userSlice.actions
