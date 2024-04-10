import styles from './LocationItem.module.sass'

type Props = {
  loc: geoAPI,
  clickHandler: (obj:geoAPI) => void
}
export type geoAPI = {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  country: string,
}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function LocationItem({loc, clickHandler}: Props) {
  function onClick(){
    clickHandler(loc)
  }
  // ... some codes
  return <>
    <div className={styles.container} onClick={onClick}>
      <div className={styles.id}>{loc.id}</div>
      <div className={styles.name}>{loc.name}</div>
      <div className={styles.country}>{loc.country}</div>
      <div className={styles.latitude}>{loc.latitude}</div>
      <div className={styles.longitude}>{loc.longitude}</div>
    </div>
  </>
}

export default LocationItem
