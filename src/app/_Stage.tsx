'use client'
import styles from './stage.module.sass'
import Cell from '@/app/Cell'
import Clock from '@/app/Clock'
import Weather from '@/app/Weather'
import WeekWeathers from '@/app/WeekWeathers'
import {useContext} from 'react'
import {DogContext} from '@/provider/DogProvider'
import OptionButtons from '@/app/OptionButtons'

type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function Stage({}: Props) {
  // ... some codes
  const path = useContext(DogContext)
  return <>
    <div className={styles.container} style={{backgroundImage: `url(${path})`}}>
      <div className={styles.grid}>
        <div className={styles.weather}><Cell><Weather></Weather></Cell></div>
        <div className={styles.clock}><Cell><Clock></Clock></Cell></div>
        <div className={styles.weekly}><Cell><WeekWeathers></WeekWeathers></Cell></div>
        <div className={styles.config}><Cell><OptionButtons></OptionButtons></Cell></div>
      </div>
    </div>
  </>
}

export default Stage
