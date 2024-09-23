import { Image, HTMLChakraProps } from '@chakra-ui/react';

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  return (
    <Image
      src="/static/images/logofinal.png"
      alt="Logo"
      width="200px" // Cambia esto al tamaño deseado
      height="500px"
      objectFit="contain"
      {...props}
    />
  );
};
