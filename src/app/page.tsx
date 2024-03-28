import styles from "./page.module.css";
import Stage from '@/app/stage'
import ConfigWindow from '@/app/configWindow'
import WeatherProvider from '@/provider/WeatherProvider'
import DogProvider from '@/provider/DogProvider'
import ConfigProvider from '@/provider/ConfigProvider'

export default function Home() {
  return (
    <main className={styles.main}>
      <ConfigProvider>
        <WeatherProvider>
          <DogProvider>
            <Stage />
            <ConfigWindow />
          </DogProvider>
        </WeatherProvider>
      </ConfigProvider>
    </main>
  );
}
