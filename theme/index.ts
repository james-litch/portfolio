import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// Project colors.
import { colors } from './colors'

// Global styles.
import { styles } from './global'

// Component styles.
import { Card } from './components/Card'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const components = {
  Card
}

export default extendTheme({ colors, styles, components, config })
