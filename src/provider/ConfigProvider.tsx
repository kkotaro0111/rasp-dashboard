'use client'
import {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState} from 'react'
import {geoAPI} from '@/app/locationItem'

type configType = {
  isFullscreen: boolean,
  setIsFullscreen: Dispatch<SetStateAction<boolean>>,
  isOpenConfig: boolean,
  setIsOpenConfig: Dispatch<SetStateAction<boolean>>,
  timezone: string,
  setTimezone: Dispatch<SetStateAction<string>>,
  timezones: string[],
  location: geoAPI,
  setLocation: Dispatch<SetStateAction<geoAPI>>,
}
type Props = {
  children: ReactNode
}

export const ConfigContext = createContext({} as configType)
// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function ConfigProvider({children}: Props) {
  // ... some codes
  const ls_timezone = localStorage.getItem('timezone')
  const ls_location = localStorage.getItem('location')
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isOpenConfig, setIsOpenConfig] = useState(false)
  const [location, setLocation] = useState({} as geoAPI)
  const [timezone, setTimezone] = useState("GMT")
  const timezones = [
    'America/Los_Angeles',
    'America/Denver',
    'America/Chicago',
    'America/New_York',
    'America/Sao_Paulo',
    'GMT',
    'Europe/London',
    'Europe/Berlin',
    'Europe/Moscow',
    'Africa/Cairo',
    'Asia/Bangkok',
    'Asia/Singapore',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Pacific/Auckland',
  ]
  useEffect(() => {
    if( ls_timezone ) {
      setTimezone(ls_timezone)
    } else {
      const autoDetectTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isExistTimezone = timezones.includes(autoDetectTimezone)
      if (isExistTimezone) {
        setTimezone(autoDetectTimezone)
      }
    }

    if( ls_location ) {
      setLocation(JSON.parse(ls_location) as geoAPI)
    }
  }, [])
  useEffect(() => {
    if(isFullscreen) {
      document.querySelector('main')!.requestFullscreen()
    } else {
      // isFullscreen === true ならdocument.fullscreenElement に値が入っているはずだが、
      // 初回起動時のみ、カラなのにfalseという状況が生じるので、カラならexitしないという処理が必要になってる
      document.fullscreenElement ? document.exitFullscreen() : null
    }
  }, [isFullscreen])
  useEffect(() => {
    localStorage.setItem('timezone', timezone)
  }, [timezone])
  useEffect(() => {
    localStorage.setItem('location', JSON.stringify(location))
  }, [location])

  return <>
    <ConfigContext.Provider value={{isFullscreen, setIsFullscreen, isOpenConfig, setIsOpenConfig, timezone, setTimezone, timezones, location, setLocation}}>
      {children}
    </ConfigContext.Provider>
  </>
}

export default ConfigProvider
