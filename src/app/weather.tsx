'use client'
import styles from './weather.module.sass'
import Image from 'next/image'
type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function weather({}: Props) {
  // ... some codes
  return <>
    <div className={styles.container}>
      <div className={styles.weather}>
        <Image src='/weather_00.svg' fill={true} alt='' />
      </div>
      <div className={styles.temperature}>
        <div className={styles.currentTemp}>24°</div>
        <div className={styles.maxTemp}>26°</div>
        <div className={styles.minTemp}>18°</div>
      </div>
      <div className={styles.props}>
        <div className={styles.rain}>
          <div className={styles.rainIcon}><Image src='/icon_rainSum.svg' fill={true} alt='' /></div>
          <div className={styles.rainValue}>10mm</div>
        </div>
        <div className={styles.precipiationProbablity}>
          <div className={styles.precipiationProbablityIcon}><Image src='/icon_prePro.svg' fill={true} alt='' /></div>
          <div className={styles.precipiationProbablityValue}>10%</div>
        </div>

      </div>

    </div>
  </>
}

export default weather
