'use client'
import {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState} from 'react'

type configType = {
  isFullscreen: boolean,
  setIsFullscreen: Dispatch<SetStateAction<boolean>>,
  isOpenConfig: boolean,
  setIsOpenConfig: Dispatch<SetStateAction<boolean>>,
  timezone: string,
  setTimezone: Dispatch<SetStateAction<string>>,
}
type Props = {
  children: ReactNode
}

export const ConfigContext = createContext({} as configType)
// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function ConfigProvider({children}: Props) {
  // ... some codes
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isOpenConfig, setIsOpenConfig] = useState(true)
  const [timezone, setTimezone] = useState("GMT")
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
    <ConfigContext.Provider value={{isFullscreen, setIsFullscreen, isOpenConfig, setIsOpenConfig, timezone, setTimezone}}>
      {children}
    </ConfigContext.Provider>
  </>
}

export default ConfigProvider
