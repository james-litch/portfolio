import { mode } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props: any) => ({
    'html, body': {
      fontSize: 'body',
      color: mode('light.text', 'dark.text')(props),
      backgroundColor: mode('light.background', 'dark.background')(props)
    }
  })
}
