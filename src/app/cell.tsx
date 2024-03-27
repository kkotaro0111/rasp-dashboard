import styles from './cell.module.sass'

type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function Cell({}: Props) {
  // ... some codes
  return <>
    <div className={styles.container}>
      <div className={styles.frame}></div>
    </div>
  </>
}

export default Cell
