'use client'
import styles from './configWindow.module.sass'
import Image from 'next/image'
import {useContext, useEffect, useState} from 'react'
import {ConfigContext} from '@/provider/ConfigProvider'
import Timezone from '@/app/Timezone'
import WeatherSpot from '@/app/weatherSpot'
type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function configWindow({}: Props) {
  // ... some codes
  const {isOpenConfig, setIsOpenConfig} = useContext(ConfigContext)

  return <>
    <div className={`${styles.container} ${isOpenConfig ? styles.opened : ''}`}>
      <div className={styles.frame}>
        <div className={styles.header}>
          <div className={styles.title}>Config</div>
          <div className={styles.close} onClick={() => setIsOpenConfig(false)}><Image src={`/icon_close.svg`} width={40} height={40} alt='Close Modal' /></div>
        </div>
        <div className={styles.content}>
          <div className={styles.line}>
            <div className={styles.label}>Timezone</div>
            <div className={styles.inputArea}>
              <Timezone />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.label}>Weather Spot</div>
            <div className={styles.inputArea}>
              <WeatherSpot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default configWindow
