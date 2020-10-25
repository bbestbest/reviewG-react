import React, { useState, createContext, useContext, useEffect, useMemo } from 'react'

const AuthContext = createContext({})

export function Provider ({ children }) {
  const [isLogin, setIsLogin] = useState(false)
  const [globalUsername, setGlobalUsername] = useState('')
  const [usernameId, setUsernameId] = useState(0)
  const [isToken, setIsToken] = useState('')

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, globalUsername, setGlobalUsername, usernameId, setUsernameId, isToken, setIsToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function CurrentUser ({ children }) {
  const { isLogin, setIsLogin } = useContext(AuthContext)
  const { globalUsername, setGlobalUsername } = useContext(AuthContext)
  const { isToken, setIsToken } = useContext(AuthContext)
  const { usernameId, setUsernameId } = useContext(AuthContext)

  useEffect(() => {
    if (isLogin) {
      window.localStorage.setItem('Login', JSON.stringify(isLogin))
      window.localStorage.setItem('Username', JSON.stringify(globalUsername))
      window.localStorage.setItem('Token', JSON.stringify(isToken))
      window.localStorage.setItem('UserId', JSON.stringify(usernameId))
    }
  }, [{ isLogin, globalUsername, isToken, usernameId }])
  useMemo(() => {
    if (!isLogin) {
      setIsLogin(JSON.parse(window.localStorage.getItem('Login')))
      setGlobalUsername(JSON.parse(window.localStorage.getItem('Username')))
      setIsToken(JSON.parse(window.localStorage.getItem('Token')))
      setUsernameId(JSON.parse(window.localStorage.getItem('UserId')))
    }
  }, [])

  return <div>{children}</div>
}

export default AuthContext
