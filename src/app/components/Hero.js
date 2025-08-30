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
    <Container size="lg" py={80}>
      <Grid gutter="xl" align="center" style={{ minHeight: '500px' }}>
        <GridCol span={{ base: 12, md: 6 }}>
          <Stack gap="xl">
            <Title 
              order={1} 
              size="3.5rem" 
              c="dark"
              ta={{ base: 'center', md: 'left' }}
            >
              Kristian Høy Overlæge, PhD, Klinisk lektor
            </Title>
            <Title 
              order={2} 
              size="1.8rem" 
              c="blue"
              ta={{ base: 'center', md: 'left' }}
              fw={400}
            >
              Klinisk lektor, Institut for Klinisk Medicin - Ortopædkirurgi
            </Title>
            <Text 
              size="xl" 
              c="dimmed"
              ta={{ base: 'center', md: 'left' }}
              maw={600}
            >
              Specialiseret i ortopædisk kirurgi, rygkirurgi, nakke-hals kirurgi og skoliosekirurgi. 
              Med over 35 års erfaring tilbyder jeg forskningsbaseret behandling og 
              konsulentvirksomhed på Aarhus Universitetshospital.
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
  );
}
