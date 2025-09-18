import { Container, Title, Text, Grid, GridCol, Box, Stack, List, ListItem, Badge, Group, Button } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

export default function About() {
  return (
    <Container size="lg" py={{ base: 40, md: 80 }} style={{ backgroundColor: '#f8f9fa' }}>
      <Grid gutter={{ base: 'lg', md: 'xl' }} align="center">
        <GridCol span={{ base: 12, md: 6 }}>
          <Stack gap={{ base: 'lg', md: 'xl' }}>
            <Title order={2} size="2.5rem" fw={700} ta={{ base: 'center', md: 'left' }}>
              Om Kristian Høy Overlæge, PhD, {<br></br>} Klinisk lektor
            </Title>
            <Button 
              component="a"
              href="https://cvupload.au.dk/uploads/AU1716/finalnewfullcv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              size="xl"
              variant="outline"
              color="dark"
              fullWidth
              style={{ 
                cursor: 'pointer',
                height: '60px',
                fontSize: '1.2rem',
                fontWeight: 500,
                color: 'black',
                borderColor: 'black'
              }}
            >
              CV
            </Button>
            <Text size="lg" c="dimmed" ta={{ base: 'center', md: 'left' }} lh={1.6}>
              Med over 37 års erfaring inden for ortopædkirurgi er Kristian Høy en anerkendt specialist 
              og forsker. Som klinisk lektor ved Institut for Klinisk Medicin - Ortopædkirurgi 
              kombinerer han klinisk ekspertise med akademisk forskning og undervisning. 
              Kristian Høy har været overlæge på Ortopædkirurgisk Afdeling, 
              Aarhus Universitetshospital siden 1999.
            </Text>
            
            <Stack gap={{ base: 'sm', md: 'md' }}>
              <Title order={3} size="1.4rem" ta={{ base: 'center', md: 'left' }}>Uddannelse (Akademiske kvalifikationer)</Title>
              <List
                spacing={{ base: 'xs', md: 'sm' }}
                size="sm"
                icon={<IconCheck size={16} color="green" />}
              >
                <ListItem>1988 - Cand. Med. , Læge, Sundhed</ListItem>
                <ListItem>1997 - Specialist i Ortopædisk Kirurgi (Sundhedsstyrelsen, SST)</ListItem>
                <ListItem>1999 - Konsulent, Overlæge, Ortopædkirurgisk Afdeling, Aarhus Universitetshospital (AUH)</ListItem>
                <ListItem>2011 - Klinisk Lektor, Aarhus Universitet (AU)</ListItem>
                <ListItem>2018 - PhD, Aarhus Universitet, Danmark</ListItem>      
              </List>
            </Stack>

            <Stack gap={{ base: 'sm', md: 'md' }}>
              <Group gap={{ base: 'xs', md: 'sm' }} justify={{ base: 'center', md: 'flex-start' }}>
                <Badge size="md" variant="light" color="blue">Knogler</Badge>
                <Badge size="md" variant="light" color="green">Slidgigt</Badge>
                <Badge size="md" variant="light" color="orange">Columna</Badge>
                <Badge size="md" variant="light" color="purple">Rygmarv</Badge>
                <Badge size="md" variant="light" color="teal">Nerver</Badge>
                <Badge size="md" variant="light" color="red">Rygsmerter</Badge>
                <Badge size="md" variant="light" color="cyan">Rygkirurgi</Badge>
              </Group>
            </Stack>
          </Stack>
        </GridCol>
        
        <GridCol span={{ base: 12, md: 6 }}>
          <Box
            h={{ base: 300, md: 400 }}
            style={{
              backgroundImage: 'url(/photos/about_section_picture.jpg?v=2)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          />
        </GridCol>
      </Grid>
    </Container>
  );
}
