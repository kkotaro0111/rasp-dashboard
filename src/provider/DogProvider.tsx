'use client'
import {createContext, ReactNode, useEffect, useState} from 'react'

type Props = {
  children: ReactNode
}

export const DogContext = createContext('')

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function DogProvider({children}: Props) {
  // ... some codes
  const [path, setPath] = useState('')
  const url = 'https://dog.ceo/api/breeds/image/random'
  async function fetchData () {
    const response = await fetch(url)
    const resJson = await response.json()
    setPath(resJson.message)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return <>
    <DogContext.Provider value={path}>
      {children}
    </DogContext.Provider>

  </>
}

export default DogProvider
