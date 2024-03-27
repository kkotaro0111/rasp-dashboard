import styles from './stage.module.sass'
import Cell from '@/app/cell'
type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function Stage({}: Props) {
  // ... some codes
  return <>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.weather}><Cell></Cell></div>
        <div className={styles.clock}><Cell></Cell></div>
        <div className={styles.weekly}><Cell></Cell></div>
        <div className={styles.config}><Cell></Cell></div>
      </div>
    </div>
  </>
}

export default Stage
