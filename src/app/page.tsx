import styles from "./page.module.css";
import Stage from '@/app/stage'
import WeatherProvider from '@/app/WeatherProvider'
import DogProvider from '@/app/DogProvider'
import ConfigProvider from '@/app/ConfigProvider'

export default function Home() {
  return (
    <main className={styles.main}>
      <WeatherProvider>
        <DogProvider>
          <ConfigProvider>
            <Stage />
          </ConfigProvider>
        </DogProvider>
      </WeatherProvider>
    </main>
  );
}
