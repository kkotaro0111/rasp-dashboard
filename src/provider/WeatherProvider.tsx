'use client'
import {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react'
import { fetchWeatherApi } from 'openmeteo'
import {ConfigContext} from '@/provider/ConfigProvider'
import useInterval from 'use-interval'

type WeatherType = {
  current: {
    weather_code: number,
    rain: number,
    temperature_2m: number
  },
  daily: {
    weather_code: Float32Array,
    temperature_2m_max: Float32Array,
    temperature_2m_min: Float32Array,
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

  const {timezone, location} = useContext(ConfigContext)

  const params = {
    "latitude": location.latitude,
    "longitude": location.longitude,
    "current": ["temperature_2m", "rain", "weather_code"],
    "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "precipitation_probability_max"],
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
          rain: current.variables(1)!.value(),
          weather_code: current.variables(2)!.value(),
        },
        daily: {
          weather_code: daily.variables(0)!.valuesArray()!,
          temperature_2m_max: daily.variables(1)!.valuesArray()!,
          temperature_2m_min: daily.variables(2)!.valuesArray()!,
          precipitation_probability_max: daily.variables(3)!.valuesArray()!,
        },

      })
    }
  }

  useInterval(() => {
    void fetchData()
  }, 15 * 60 * 1000) // 15min
  useEffect(() => {
    void fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return <>
      <WeatherContext.Provider value={{weatherData}} >
        {children}
      </WeatherContext.Provider>
  </>
}

export default WeatherProvider
