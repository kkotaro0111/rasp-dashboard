import styles from './Timezone.module.sass'
import {useContext} from 'react'
import {ConfigContext} from '@/provider/ConfigProvider'
type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function Timezone({}: Props) {
  // ... some codes
  const {timezone, setTimezone, timezones} = useContext(ConfigContext)

  return <>
    <div className={styles.container}>
      <select className={styles.select} name="timezone" aria-label="Timezone" onChange={(e) => setTimezone(e.target.value)}>
        { timezones.map((tz, index) => (
          <option value={tz} selected={timezone === tz} key={index}>{tz}</option>
        ))}
      </select>
    </div>
  </>
}

export default Timezone
