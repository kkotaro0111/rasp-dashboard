'use client'

import styles from './weather.module.sass'
import Image from 'next/image'
import {WeatherContext} from '@/provider/WeatherProvider'
import {useContext} from 'react'

type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function weather({}: Props) {
  const {weatherData} = useContext(WeatherContext)
  // ... some codes
  return <>
    {weatherData && weatherData.current &&
      <>
        <div className={styles.container}>
          <div className={styles.weather}>
            <Image src={`/weather_${weatherData.current.weather_code.toString().padStart(2, '0')}.svg`} fill={true} alt='' priority />
          </div>
          <div className={styles.temperature}>
            <div className={styles.currentTemp}>{Math.round(weatherData.current.temperature_2m * 10) / 10}°</div>
            <div className={styles.maxTemp}>{Math.round(weatherData.daily.temperature_2m_max[0] * 10) / 10}°</div>
            <div className={styles.minTemp}>{Math.round(weatherData.daily.temperature_2m_min[0] * 10) / 10}°</div>
          </div>
          <div className={styles.props}>
            <div className={styles.rain}>
              <div className={styles.rainIcon}><Image src='/icon_rainSum.svg' fill={true} alt='' /></div>
              <div className={styles.rainValue}>{Math.round(weatherData.current.rain * 10 ) / 10} mm</div>
            </div>
            <div className={styles.precipiationProbablity}>
              <div className={styles.precipiationProbablityIcon}><Image src='/icon_prePro.svg' fill={true} alt='' /></div>
              <div className={styles.precipiationProbablityValue}>{Math.round(weatherData.current.precipitation * 10) / 10} %</div>
            </div>

          </div>
        </div>
      </>
    }
  </>
}

export default weather
