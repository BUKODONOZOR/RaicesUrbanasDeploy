import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Beneficios para cada perfil',
  description:
    'Explora las características que ofrecemos según tu tipo de perfil. Ya seas un usuario, vendedor o un visitante, siempre encontrarás algo útil.',
  plans: [

    {
      id: 'user',
      title: 'Perfil de Usuario',
      description: 'Acceso completo para usuarios registrados.',
      price: '',
      isRecommended: true,
      features: [
        {
          title: 'Ver todas las ofertas disponibles',
        },
        {
          title: 'Guardar propiedades en tu lista de favoritos',
        },
        {
          title: 'Recibir notificaciones personalizadas',
        },
        {
          title: 'Contactar directamente a los vendedores',
        },
        {
          title: 'Acceso completo a imágenes y videos de propiedades',
        },
        {
          title: 'Historial de propiedades vistas',
        },
        {
          title: 'Filtrado avanzado y personalizado',
        },
      ],
      action: {
        href: '#', // Redirigir a la página de inicio de sesión o perfil
      },
    },
    
      
  ],
};
