
import styles from './optionButtons.module.sass'
import Image from 'next/image'
import {useContext, useEffect, useState} from 'react'
import {ConfigContext} from '@/provider/ConfigProvider'
type Props = {}

// if it uses 'slot', you need specify {children}: React.PropsWithChildren<Props>
function optionButtons({}: Props) {
  // ... some codes
  const [isClient, setIsClient] = useState(false)
  const {isFullscreen, setIsFullscreen, setIsOpenConfig} = useContext(ConfigContext)

  useEffect(() => {
    setIsClient(true)
  }, [])
  function triggerFullscreen () {
    setIsFullscreen(!isFullscreen)
  }
  return <>
    <div className={styles.container}>
      <div className={styles.config} onClick={() => setIsOpenConfig(true)}><Image src={`/icon_config.svg`} width={40} height={40} alt="Config" priority /></div>
      { isClient && document.fullscreenEnabled &&
        <div className={styles.fullscreen} onClick={triggerFullscreen}>
          { isFullscreen && <Image src={`/icon_defaultScreen.svg`} width={40} height={40} alt="exitFullScreen" />}
          { !isFullscreen && <Image src={`/icon_fullScreen.svg`} width={40} height={40} alt="requestFullScreen" />}
        </div>
      }
    </div>
  </>
}

export default optionButtons
