'use client'

import styles from './dailyWeather.module.sass'
import Image from 'next/image'
import {WeatherContext} from '@/app/WeatherProvider'
import {useContext} from 'react'

type Props = {
  index: number
}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function weather({index}: Props) {
  const {weatherData} = useContext(WeatherContext)
  // ... some codes
  return <>
    {weatherData && weatherData.current &&
      <>
        <div className={styles.container}>
          <div className={styles.date}>03/28</div>
          <div className={styles.weather}>
            <Image src={`/weather_${weatherData.daily.weather_code[index].toString().padStart(2, '0')}.svg`} fill={true} alt='' priority />
          </div>
          <div className={styles.temperature}>
            <div className={styles.maxTemp}>{Math.round(weatherData.daily.temperature_2m_max[index] * 10) / 10}°</div>
            |
            <div className={styles.minTemp}>{Math.round(weatherData.daily.temperature_2m_min[index] * 10) / 10}°</div>
          </div>
          <div className={styles.props}>
            <div className={styles.rain}>
              <div className={styles.rainIcon}><Image src='/icon_rainSum.svg' fill={true} alt='' /></div>
              <div className={styles.rainValue}>{Math.round(weatherData.daily.rain_sum[index] * 10) / 10} mm</div>
            </div>
            <div className={styles.precipiationProbablity}>
              <div className={styles.precipiationProbablityIcon}><Image src='/icon_prePro.svg' fill={true} alt='' /></div>
              <div className={styles.precipiationProbablityValue}>{weatherData.daily.precipitation_probability_max[index]} %</div>
            </div>

          </div>
        </div>
      </>
    }
  </>
}

export default weather