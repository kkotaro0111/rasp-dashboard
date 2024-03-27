import Image from "next/image";
import styles from "./page.module.css";
import WeatherProvider from '@/app/WeatherProvider'
import Stage from '@/app/stage'

export default function Home() {
  return (
    <main className={styles.main}>
      <WeatherProvider>
        <Stage />
      </WeatherProvider>
    </main>
  );
}
