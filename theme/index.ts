import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// Project colors.
import { colors } from './colors'

// Global styles.
import { styles } from './global'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export default extendTheme({ colors, styles, config })
