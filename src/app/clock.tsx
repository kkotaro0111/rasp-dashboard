

import styles from './clock.module.sass'
import {useEffect, useRef, useState} from 'react'
import useInterval from 'use-interval'
type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function clock({}: Props) {
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')
  const intervalRef = useRef(0)

  useInterval(() => {
    const date = getDate()
    setCurrentDate(formattingDate(date))
    setCurrentTime(formattingTime(date))
  }, 1000)

  function getDate () {
    return new Date()
  }

  function formattingDate(date:Date) {
    return `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2,'0')}/${(date.getDate()).toString().padStart(2,'0')} ${week[date.getDay()]}`
  }
  function formattingTime (date:Date) {
    return `${(date.getHours()).toString().padStart(2,'0')}:${(date.getMinutes()).toString().padStart(2,'0')}:${(date.getSeconds()).toString().padStart(2,'0')}`
  }
  

  // ... some codes
  return <>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.date}>{currentDate}</div>
        <div className={styles.currentTime}>{currentTime}</div>
      </div>
    </div>
  </>
}

export default clock
