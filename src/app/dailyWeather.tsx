

import styles from './dailyWeather.module.sass'
import Image from 'next/image'
import {WeatherContext} from '@/provider/WeatherProvider'
import {useContext} from 'react'

type Props = {
  index: number
}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function weather({index}: Props) {
  const {weatherData} = useContext(WeatherContext)
  // ... some codes
  function targetDay () {
    const utcMilliSec = Date.now() + (24 * 60 * 60 * 1000) * index
    const date:Date = new Date()
    date.setTime(utcMilliSec)
    return formattingDate(date)
  }
  function formattingDate(date:Date) {
    return `${(date.getMonth() + 1).toString().padStart(2,'0')}/${(date.getDate()).toString().padStart(2,'0')}`
  }

  return <>
    {weatherData && weatherData.current &&
      <>
        <div className={styles.container}>
          <div className={styles.date}>{targetDay()}</div>
          <div className={styles.weather}>
            <Image src={`/weather_${weatherData.daily.weather_code[index].toString().padStart(2, '0')}.svg`} fill={true} alt='' priority />
          </div>
          <div className={styles.temperature}>
            <div className={styles.maxTemp}>{Math.round(weatherData.daily.temperature_2m_max[index] * 10) / 10}°</div>
            <div className={styles.minTemp}>{Math.round(weatherData.daily.temperature_2m_min[index] * 10) / 10}°</div>
          </div>
          <div className={styles.props}>
            <div className={styles.precipitationProbability}>
              <div className={styles.precipitationProbabilityIcon}><Image src='/icon_prePro.svg' fill={true} alt='' /></div>
              <div className={styles.precipitationProbabilityValue}>{weatherData.daily.precipitation_probability_max[index]} %</div>
            </div>

          </div>
        </div>
      </>
    }
  </>
}

export default weather
