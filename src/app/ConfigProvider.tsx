'use client'
import {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState} from 'react'

type configType = {
  isFullscreen: boolean,
  setIsFullscreen: Dispatch<SetStateAction<boolean>>
}
type Props = {
  children: ReactNode
}

export const ConfigContext = createContext({} as configType)
// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function ConfigProvider({children}: Props) {
  // ... some codes
  const [isFullscreen, setIsFullscreen] = useState(false)
  useEffect(() => {
    if(isFullscreen) {
      document.querySelector('main')!.requestFullscreen()
    } else {
      // isFullscreen === true ならdocument.fullscreenElement に値が入っているはずだが、
      // 初回起動時のみ、カラなのにfalseという状況が生じるので、カラならexitしないという処理が必要になってる
      document.fullscreenElement ? document.exitFullscreen() : null
    }
  }, [isFullscreen])

  return <>
    <ConfigContext.Provider value={{isFullscreen, setIsFullscreen}}>
      {children}
    </ConfigContext.Provider>
  </>
}

export default ConfigProvider
