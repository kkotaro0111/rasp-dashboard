

import styles from './Weather.module.sass'
import Image from 'next/image'
import {WeatherContext} from '@/provider/WeatherProvider'
import {useContext} from 'react'
import {ConfigContext} from '@/provider/ConfigProvider'

type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function Weather({}: Props) {
  const {weatherData} = useContext(WeatherContext)
  const {location} = useContext(ConfigContext)
  // ... some codes
  return <>
    {weatherData && weatherData.current &&
      <>
        <div className={styles.container}>
          <div className={styles.spot}>{location.name}</div>
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
              <div className={styles.rainValue}>{Math.round(weatherData.current.rain * 4 * 10 ) / 10} mm/h</div>
            </div>
            <div className={styles.precipiationProbablity}>
              <div className={styles.precipiationProbablityIcon}><Image src='/icon_prePro.svg' fill={true} alt='' /></div>
              <div className={styles.precipiationProbablityValue}>{Math.round(weatherData.daily.precipitation_probability_max[0] * 10) / 10} %</div>
            </div>

          </div>
        </div>
      </>
    }
  </>
}

export default Weather
