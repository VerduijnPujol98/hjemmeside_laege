'use client';

import { Container, Group, Text, Button, Box } from '@mantine/core';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      style={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid #e9ecef',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Container size="lg" py="md">
        <Group justify="space-between" align="center">
          {/* Doctor Name */}
          <div>
            <Text size="lg" fw={700} c="dark">
              Kristian Høy
            </Text>
            <Text size="xs" c="dimmed">
              Overlæge, Klinisk lektor - Ortopædkirurgi
            </Text>
          </div>

          {/* Navigation Links */}
          <Group gap="md" visibleFrom="sm">
            <Button 
              variant="subtle" 
              color="dark"
              onClick={() => scrollToSection('home')}
            >
              Hjem
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              onClick={() => scrollToSection('services')}
            >
              Specialer
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              onClick={() => scrollToSection('about')}
            >
              Om mig
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              onClick={() => scrollToSection('speciallægeerklæringer')}
            >
              Speciallægeerklæringer
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </Button>
          </Group>

          {/* CTA Button */}
          <Button 
            color="blue" 
            variant="filled"
            visibleFrom="sm"
            onClick={() => scrollToSection('contact')}
          >
            Book konsultation
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
