'use client'
import {createContext, ReactNode, useEffect, useRef, useState} from 'react'
import { fetchWeatherApi } from 'openmeteo'

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

  const params = {
    "latitude": 35.6895,
    "longitude": 139.6917,
    "current": ["temperature_2m", "precipitation", "rain", "weather_code"],
    "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "rain_sum", "precipitation_probability_max"],
    "timezone": "Asia/Tokyo",
    "forecast_days": 8
  }
  const url = "https://api.open-meteo.com/v1/forecast"

  async function fetchData () {
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

  useEffect(() => {
    fetchData()
    intervalRef.current = window.setInterval(() => {
      fetchData()
    }, 10 * 60 * 1000) // 10 min
   return () => {
     clearInterval(intervalRef.current)
   }
  }, [])

  return <>
      <WeatherContext.Provider value={{weatherData}} >
        {children}
      </WeatherContext.Provider>
  </>
}

export default WeatherProvider
