import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import '../public/static/images/logofinal.png'
import {
  Container,
  Box,
  Stack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Em } from "components/typography";
import { FiArrowRight, FiCheck, FiCopy } from "react-icons/fi";
import { Features } from "components/features";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";
import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";
import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Raíces Urbanas - Arrendamientos en Medellín"
        description="Conecta directamente con propietarios e inquilinos en Medellín."
      />
      <Box>
        <HeroSection />
        <HighlightsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bgGradient="linear(to-r, blue.600, black, black)"
    >
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                En busca de 
                <br /> un lugar para vivir
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Somos <Em>Raíces Urbanas</Em>, te conectamos con las mejores opciones para vivir, brindándote una experiencia ágil y sencilla. Descubre un nuevo nivel de comodidad mientras construimos un futuro juntos. 
                <br />
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="blue" size="lg" href="/signup">
                  Iniciar
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/registrarme"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Registrarme
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/build2.png"
                  layout="fixed"
                  width={700}
                  height={200}
                  alt="Screenshot"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const HighlightsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box bg="#FFFFFF" py="8">
      <Container maxW="container.xl">
        <Heading as="h3" size="lg" textAlign="center" mb="8" color="#003C71">
          Descubre los mejores barrios de Medellín
        </Heading>
        <Slider {...settings}>
          {[
            '/static/images/image1.jpg',
            '/static/images/image2.jpg',
            '/static/images/image3.jpg',
          ].map((src, index) => (
            <Box key={index} p="4">
              <Box
                border="2px solid #003C71"
                borderRadius="md"
                overflow="hidden"
                bg="#000000"
                color="#FFFFFF"
                _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={800}
                  height={600}
                  objectFit="cover"
                  quality={75}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          No somos una página de arrendamiento cualquiera.
          <br /> Somos la solución a la terciarización.
        </Heading>
      }
      description={
        <>
          Publica tu oferta de vivienda y escoge al mejor postor.
          <br />
          Encuentra el hogar que siempre has deseado sin intermediarios.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Comunicación directa.",
          icon: FiArrowRight,
          description:
            "Con nuestro sistema de chat, interactúa directamente con propietarios e inquilinos.",
          variant: "inline",
        },
        {
          title: "Sin comisiones ocultas.",
          icon: FiCheck,
          description:
            "Elimina las tarifas adicionales y mejora tus oportunidades de arrendamiento.",
          variant: "inline",
        },
        {
          title: "Fácil publicación.",
          icon: FiCopy,
          description:
            "Publica tu anuncio en minutos y llega a más potenciales inquilinos.",
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);
        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        El IVA puede ser aplicable dependiendo de tu ubicación.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;
