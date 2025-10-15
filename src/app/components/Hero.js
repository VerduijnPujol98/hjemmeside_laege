'use client';

import { Container, Title, Text, Button, Group, Grid, GridCol, Stack, Image } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ 
      position: 'relative',
      minHeight: '70vh',
      backgroundColor: 'white',
      overflow: 'hidden'
    }}>
      {/* Grid Background */}
      <div
        style={{
          position: 'absolute',
          inset: '0',
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, #f4f4f5 1px, transparent 1px),
            linear-gradient(to bottom, #f4f4f5 1px, transparent 1px)
          `,
          opacity: 0.8
        }}
      />
      
      {/* Radial gradient overlay for faded effect */}
      <div 
        style={{
          position: 'absolute',
          inset: '0',
          background: 'radial-gradient(ellipse at center, transparent 60%, rgba(255, 255, 255, 0.5))',
          pointerEvents: 'none'
        }}
      />

      {/* Content */}
      <Container size="lg" py={{ base: 56, sm: 72, md: 96 }} style={{ position: 'relative', zIndex: 10 }}>
        <Grid gutter={{ base: 'lg', md: 'xl' }} align="center" style={{ minHeight: '60vh' }}>
        <GridCol span={{ base: 12, md: 6 }}>
          <Stack gap={{ base: 'xl', md: 40 }}>
            <Title 
              order={1} 
              size="3.5rem"
              c="dark"
              ta={{ base: 'center', md: 'left' }}
              fw={900}
              lh={1.2}
            >
              Kristian Høy Overlæge, Rygkirurg, PhD, Klinisk lektor
            </Title>
            <Title 
              order={2} 
              size="1.8rem"
              c="blue"
              ta={{ base: 'center', md: 'left' }}
              fw={450}
              lh={1.35}
            >
              Klinisk lektor, Aarhus Universitet
            </Title>
            <Text 
              size="xl"
              c="dimmed"
              ta={{ base: 'center', md: 'left' }}
              maw={600}
              lh={1.7}
            >
              Specialiseret i ortopædisk kirurgi, højt specialiseret i rygkirurgi, nakke-hals kirurgi og skoliosekirurgi. 
              Med over 37 års erfaring tilbyder jeg udfærdigelse af speciallægeerklæringer samt second opinions.
            </Text>
            <Group justify={{ base: 'center', md: 'flex-start' }} gap={{ base: 'sm', md: 'md' }}>
              <Button 
                size="lg"
                leftSection={<IconCalendar size={18} />}
                variant="filled"
                color="blue"
                onClick={() => scrollToSection('contact')}
                fullWidth={{ base: true, xs: false }}
              >
                Book konsultation
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                color="blue"
                onClick={() => scrollToSection('about')}
                fullWidth={{ base: true, xs: false }}
              >
                Læs mere
              </Button>
            </Group>
          </Stack>
        </GridCol>
        
        <GridCol span={{ base: 12, md: 6 }}>
          <Image
            src="/photos/about_picture.jpg?v=2"
            alt="Kristian Høy, PhD - Klinisk lektor, Ortopædkirurgi"
            radius="12px"
            h={{ base: 320, md: 520 }}
            style={{
              objectFit: 'cover',
              objectPosition: '85% 10%',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          />
        </GridCol>
      </Grid>
    </Container>
    </div>
  );
}
