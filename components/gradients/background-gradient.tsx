import { Box, useTheme, useColorModeValue } from '@chakra-ui/react'

export const BackgroundGradient = ({ hideOverlay, ...props }: any) => {
  const theme = useTheme()
  
  // Colores personalizados
  const colors = [
    '#003C71', // Azul oscuro
    '#F2F2F2', // Gris claro
    '#E5E5E5', // Gris más oscuro
  ]

  // Actualiza el fondo del gradiente con los colores proporcionados
  let fallbackBackground = `radial-gradient(at top left, ${colors[0]} 30%, transparent 80%), radial-gradient(at bottom, ${colors[1]} 0%, transparent 60%), radial-gradient(at bottom left, ${colors[2]} 0%, transparent 50%),
        radial-gradient(at top right, ${colors[0]}, transparent), radial-gradient(at bottom right, ${colors[1]} 0%, transparent 50%);`

  // Color del overlay según el modo de color
  let gradientOverlay = `linear-gradient(0deg, ${useColorModeValue(
    'white',
    'gray-900'
  )} 60%, rgba(0, 0, 0, 0) 100%);`

  return (
    <Box
      backgroundImage={fallbackBackground}
      backgroundBlendMode="saturation"
      position="absolute"
      top="0"
      left="0"
      zIndex="0"
      opacity={useColorModeValue('0.3', '0.5')}
      height="100vh"
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      {...props}
    >
      <Box
        backgroundImage={!hideOverlay ? gradientOverlay : undefined}
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="1"
      ></Box>
    </Box>
  )
}
