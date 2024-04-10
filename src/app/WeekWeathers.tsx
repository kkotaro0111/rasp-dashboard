import styles from './WeekWeathers.module.sass'
import DailyWeather from '@/app/DailyWeather'
type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function WeekWeathers({}: Props) {
  // ... some codes
  return <>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.cell}><DailyWeather index={1}></DailyWeather></div>
        <div className={styles.cell}><DailyWeather index={2}></DailyWeather></div>
        <div className={styles.cell}><DailyWeather index={3}></DailyWeather></div>
        <div className={styles.cell}><DailyWeather index={4}></DailyWeather></div>
        <div className={styles.cell}><DailyWeather index={5}></DailyWeather></div>
        <div className={styles.cell}><DailyWeather index={6}></DailyWeather></div>
        <div className={styles.cell}><DailyWeather index={7}></DailyWeather></div>
      </div>
    </div>
  </>
}

export default WeekWeathers
