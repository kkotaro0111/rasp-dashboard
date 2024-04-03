
import styles from './weatherSpot.module.sass'
import {useContext, useState} from 'react'
import LocationItem, {geoAPI} from '@/app/locationItem'
import {ConfigContext} from '@/provider/ConfigProvider'

type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function weatherSpot({}: Props) {
  // ... some codes
  const [locationName, setLocationName] = useState('')
  const [locationList, setLocationList] = useState([] as geoAPI[])
  const {location, setLocation} = useContext(ConfigContext)
  async function onSearch () {
    const url = 'https://geocoding-api.open-meteo.com/v1/search'
    const query = new URLSearchParams({
      name: locationName
    })
    const responses = await fetch(`${url}?${query}`)
    if(responses.status === 200) {
      const data = await responses.json()
      setLocationList(data.results)
    }
  }
  function onSelect (loc:geoAPI) {
    setLocation(loc)
    setLocationList([] as geoAPI[])
  }
  return <>
    <div className={styles.container}>
      <input type='text' value={locationName} onChange={(e) => setLocationName(e.target.value)} />
      <button className={styles.button} onClick={ onSearch }> Search </button>
      { locationList && locationList.length > 0 &&
        <div className={styles.searchResult} >
          <ul className={styles.searchResultList} >
          { locationList.map((loc) => (
              <li className={styles.searchResultItem}>
                <LocationItem loc={loc} clickHandler={onSelect} />
              </li>
          ))}
          </ul>
        </div>
      }
    </div>
  </>
}

export default weatherSpot
