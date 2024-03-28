import styles from "./page.module.css";
import Stage from '@/app/stage'
import WeatherProvider from '@/provider/WeatherProvider'
import DogProvider from '@/provider/DogProvider'
import ConfigProvider from '@/provider/ConfigProvider'

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
