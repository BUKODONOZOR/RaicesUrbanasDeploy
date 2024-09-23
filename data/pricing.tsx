import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Beneficios para cada perfil',
  description:
    'Explora las características que ofrecemos según tu tipo de perfil. Ya seas un usuario, vendedor o un visitante, siempre encontrarás algo útil.',
  plans: [
    {
      id: 'guest',
      title: 'Perfil Sin Registrar',
      description: 'Acceso básico para explorar nuestras ofertas.',
      price: 'Gratuito',
      features: [
        {
          title: 'Ver listado de propiedades',
        },
        {
          title: 'Filtrar propiedades por precio, tamaño y ubicación',
        },
        {
          title: 'Acceder a las descripciones de las propiedades',
        },
        {
          title: 'Navegación simple y sin interrupciones',
        },
        {
          title: 'Acceso limitado a imágenes',
        },
        {
          title: 'Vista básica sin poder interactuar con vendedores',
        },
      ],
      action: {
        href: '#', // Redirigir a la página de registro
      },
    },
    {
      id: 'user',
      title: 'Perfil de Usuario',
      description: 'Acceso completo para usuarios registrados.',
      price: 'Gratuito',
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
    {
      id: 'seller',
      title: 'Perfil de Vendedor',
      description: 'Funcionalidades adicionales para los vendedores.',
      price: 'Gratuito',
      features: [
        {
          title: 'Publicar propiedades en la plataforma',
        },
        {
          title: 'Gestionar ofertas y solicitudes de los usuarios',
        },
        {
          title: 'Recibir estadísticas de vistas y favoritos de tus propiedades',
        },
        {
          title: 'Responder mensajes y preguntas de los compradores',
        },
        {
          title: 'Promocionar propiedades destacadas',
        },
        {
          title: 'Acceso a herramientas de marketing y analítica',
        },
        {
          title: 'Historial completo de interacciones con usuarios',
        },
      ],
      action: {
        href: '#', // Redirigir al panel de vendedores
      },
    },
  ],
};
