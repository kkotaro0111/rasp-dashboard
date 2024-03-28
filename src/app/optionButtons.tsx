'use client'
import styles from './optionButtons.module.sass'
import Image from 'next/image'
import {useContext} from 'react'
import {ConfigContext} from '@/app/ConfigProvider'
type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function optionButtons({}: Props) {
  // ... some codes
  const {isFullscreen, setIsFullscreen} = useContext(ConfigContext)
  return <>
    <div className={styles.container}>
      <div className={styles.config}><Image src={`/icon_config.svg`} width={40} height={40} alt="Config" /></div>
      {document.fullscreenEnabled &&
        <div className={styles.fullscreen} onClick={() => setIsFullscreen(!isFullscreen)}>
          { isFullscreen && <Image src={`/icon_defaultScreen.svg`} width={40} height={40} alt="exitFullScreen" />}
          { !isFullscreen && <Image src={`/icon_fullScreen.svg`} width={40} height={40} alt="requestFullScreen" />}
        </div>
      }
    </div>
  </>
}

export default optionButtons
