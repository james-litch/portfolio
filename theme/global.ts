import { mode } from '@chakra-ui/theme-tools'

export const styles = {
  global: (props: any) => ({
    'html, body': {
      fontSize: 'body',
      color: mode('light.body', 'dark.body')(props),
      backgroundColor: mode('light.300', 'dark.300')(props)
    }
  })
}
