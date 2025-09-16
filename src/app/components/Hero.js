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
      minHeight: '600px',
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
      <Container size="lg" py={80} style={{ position: 'relative', zIndex: 10 }}>
        <Grid gutter="xl" align="center" style={{ minHeight: '500px' }}>
        <GridCol span={{ base: 12, md: 6 }}>
          <Stack gap="xl">
            <Title 
              order={1} 
              size="3.5rem" 
              c="dark"
              ta={{ base: 'center', md: 'left' }}
              fw={900}
            >
              Kristian Høy Overlæge, PhD, Klinisk lektor
            </Title>
            <Title 
              order={2} 
              size="1.8rem" 
              c="blue"
              ta={{ base: 'center', md: 'left' }}
              fw={450}
            >
              Klinisk lektor, Institut for Klinisk Medicin - Ortopædkirurgi
            </Title>
            <Text 
              size="xl" 
              c="dimmed"
              ta={{ base: 'center', md: 'left' }}
              maw={600}
            >
              Specialiseret i ortopædisk kirurgi, højt specialiseret i rygkirurgi, nakke-hals kirurgi og skoliosekirurgi. 
              Med over 37 års erfaring tilbyder jeg udfærdigelse af speciallægeerklæringer samt second opinions.
            </Text>
            <Group justify={{ base: 'center', md: 'flex-start' }}>
              <Button 
                size="lg" 
                leftSection={<IconCalendar size={20} />}
                variant="filled"
                color="blue"
                onClick={() => scrollToSection('contact')}
              >
                Book konsultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                color="blue"
                onClick={() => scrollToSection('about')}
              >
                Læs mere
              </Button>
            </Group>
          </Stack>
        </GridCol>
        
        <GridCol span={{ base: 12, md: 6 }}>
          <Image
            src="/photos/about_picture.jpg"
            alt="Dr. Kristian Høy, PhD - Klinisk lektor, Ortopædkirurgi"
            radius="12px"
            style={{
              height: '450px',
              objectFit: 'cover',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          />
        </GridCol>
      </Grid>
    </Container>
    </div>
  );
}
