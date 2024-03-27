import Image from "next/image";
import styles from "./page.module.css";
import Stage from '@/app/stage'

export default function Home() {
  return (
    <main className={styles.main}>
      <Stage />
    </main>
  );
}
