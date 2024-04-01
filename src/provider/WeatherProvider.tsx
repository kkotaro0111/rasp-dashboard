'use client'
import {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react'
import { fetchWeatherApi } from 'openmeteo'
import {ConfigContext} from '@/provider/ConfigProvider'
import useInterval from 'use-interval'

type WeatherType = {
  current: {
    weather_code: number,
    precipitation: number,
    rain: number,
    temperature_2m: number
  },
  daily: {
    weather_code: Float32Array,
    temperature_2m_max: Float32Array,
    temperature_2m_min: Float32Array,
    rain_sum: Float32Array,
    precipitation_probability_max: Float32Array
  }
}

type WeatherContextType = {
  weatherData: WeatherType
}

type Props = {
  children: ReactNode
}

export const WeatherContext = createContext({} as WeatherContextType)
function WeatherProvider ({ children }: Props) {
  const [weatherData, setWeatherData] = useState<WeatherType>({} as WeatherType)
  const intervalRef = useRef(0)

  const {timezone, location} = useContext(ConfigContext)

  const params = {
    "latitude": location.latitude,
    "longitude": location.longitude,
    "current": ["temperature_2m", "precipitation", "rain", "weather_code"],
    "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "rain_sum", "precipitation_probability_max"],
    "timezone": timezone,
    "forecast_days": 8
  }
  const url = "https://api.open-meteo.com/v1/forecast"

  async function fetchData () {
    if( params.latitude && params.longitude ) {
      const responses = await fetchWeatherApi(url, params);
      const current = responses[0].current()!
      const daily = responses[0].daily()!

      setWeatherData({
        current: {
          temperature_2m: current.variables(0)!.value(),
          precipitation: current.variables(1)!.value(),
          rain: current.variables(2)!.value(),
          weather_code: current.variables(3)!.value(),
        },
        daily: {
          weather_code: daily.variables(0)!.valuesArray()!,
          temperature_2m_max: daily.variables(1)!.valuesArray()!,
          temperature_2m_min: daily.variables(2)!.valuesArray()!,
          rain_sum: daily.variables(3)!.valuesArray()!,
          precipitation_probability_max: daily.variables(4)!.valuesArray()!,
        },

      })
    }
  }

  useInterval(() => {
    fetchData()
  }, 10 * 60 * 1000) // 10min
  useEffect(() => {
    fetchData()
  }, [location])

  return <>
      <WeatherContext.Provider value={{weatherData}} >
        {children}
      </WeatherContext.Provider>
  </>
}

export default WeatherProvider
