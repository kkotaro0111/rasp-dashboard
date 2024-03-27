import React from 'react'
import styles from './cell.module.sass'

type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function Cell({children}: React.PropsWithChildren<Props>) {
  // ... some codes
  return <>
    <div className={styles.container}>
      <div className={styles.frame}>
        {children}
      </div>
    </div>
  </>
}

export default Cell
