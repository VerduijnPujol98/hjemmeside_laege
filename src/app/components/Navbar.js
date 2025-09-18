'use client';

import { Container, Group, Text, Button, Box, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    close(); // Close mobile menu after navigation
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
      <Container size="lg" py={{ base: 'xs', md: 'md' }}>
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

          {/* Navigation Links - Desktop */}
          <Group gap="md" visibleFrom="md">
            <Button 
              variant="subtle" 
              color="dark"
              size="sm"
              onClick={() => scrollToSection('home')}
            >
              Hjem
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              size="sm"
              onClick={() => scrollToSection('services')}
            >
              Specialer
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              size="sm"
              onClick={() => scrollToSection('about')}
            >
              Om mig
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              size="sm"
              onClick={() => scrollToSection('speciallægeerklæringer')}
            >
              Speciallægeerklæringer
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </Button>
          </Group>

          {/* Desktop CTA Button */}
          <Button 
            color="blue" 
            variant="filled"
            size="sm"
            visibleFrom="md"
            onClick={() => scrollToSection('contact')}
          >
            Book
          </Button>

          {/* Mobile Burger Menu */}
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="md"
            size="sm"
          />
        </Group>

        {/* Mobile Navigation Drawer */}
        <Drawer
          opened={opened}
          onClose={close}
          title="Navigation"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          size="xs"
        >
          <Stack gap="md">
            <Button 
              variant="subtle" 
              color="dark"
              size="md"
              fullWidth
              onClick={() => scrollToSection('home')}
            >
              Hjem
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              size="md"
              fullWidth
              onClick={() => scrollToSection('services')}
            >
              Specialer
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              size="md"
              fullWidth
              onClick={() => scrollToSection('about')}
            >
              Om mig
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              size="md"
              fullWidth
              onClick={() => scrollToSection('speciallægeerklæringer')}
            >
              Speciallægeerklæringer
            </Button>
            <Button 
              variant="subtle" 
              color="dark"
              size="md"
              fullWidth
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </Button>
            <Button 
              color="blue" 
              variant="filled"
              size="md"
              fullWidth
              onClick={() => scrollToSection('contact')}
              mt="md"
            >
              Book konsultation
            </Button>
          </Stack>
        </Drawer>
      </Container>
    </Box>
  );
}
