import React, { useState, createContext, useContext, useEffect } from 'react'

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
    console.log(usernameId)
  })
  return <div>{children}</div>
}

export default AuthContext
