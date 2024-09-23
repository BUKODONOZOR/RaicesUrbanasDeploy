import { mode } from '@chakra-ui/theme-tools'

type Dict = Record<string, any>

const colors = {
  primary: '#0184B8FF', // Color para el estado activo
  lightGray: '#E5E5E5', // Color para el estado inactivo
  hoverColor: '#F2F2F2', // Color para el estado hover
}

export default {
  variants: {
    'nav-link': (props: Dict) => {
      const { isActive } = props

      return {
        outline: 'none',
        fontWeight: '500',
        color: isActive
          ? colors.primary
          : colors.lightGray,
        transition: 'color .2s ease-in',
        _hover: {
          textDecoration: 'none',
          color: colors.hoverColor,
        },
      }
    },
  },
}

