import { Container, Title, Text, Grid, GridCol, Box, Stack, List, ListItem, Badge, Group } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

export default function About() {
  return (
    <Container size="lg" py={80} style={{ backgroundColor: '#f8f9fa' }}>
      <Grid gutter="xl" align="center">
        <GridCol span={{ base: 12, md: 6 }}>
          <Stack gap="xl">
            <Title order={2} size="2.5rem">
              Om Kristian Høy, PhD
            </Title>
            <Text size="lg" c="dimmed">
              Med over 35 års erfaring inden for ortopædkirurgi er Kristian Høy en anerkendt specialist 
              og forsker. Som Klinisk lektor ved Institut for Klinisk Medicin - Ortopædkirurgi 
              kombinerer han klinisk ekspertise med akademisk forskning og undervisning. 
              Kristian Høy har været konsulent og overlæge på Ortopædkirurgisk Afdeling, 
              Aarhus Universitetshospital siden 1999.
            </Text>
            
            <Stack gap="md">
              <Title order={3} size="1.4rem">Uddannelse (Akademiske kvalifikationer)</Title>
              <List
                spacing="sm"
                size="sm"
                icon={<IconCheck size={16} color="green" />}
              >
                <ListItem>2018 - PhD, Aarhus Universitet, Danmark</ListItem>
                <ListItem>1999 - Konsulent, Overlæge, Ortopædkirurgisk Afdeling, Aarhus Universitetshospital (AUH)</ListItem>
                <ListItem>1997 - Specialist i Ortopædisk Kirurgi (Sundhedsstyrelsen, SST)</ListItem>
                <ListItem>1988 - Cand Med, Læge, Sundhed</ListItem>
              </List>
            </Stack>

            <Stack gap="md">
              <Group gap="sm">
                <Badge size="md" variant="light" color="blue">Knogler</Badge>
                <Badge size="md" variant="light" color="green">Muskler</Badge>
                <Badge size="md" variant="light" color="orange">Ledcolumna</Badge>
                <Badge size="md" variant="light" color="purple">Medulla spinalis</Badge>
                <Badge size="md" variant="light" color="red">Hjerne- og nervesystem</Badge>
                <Badge size="md" variant="light" color="teal">Rygkirurgi</Badge>
              </Group>
            </Stack>
          </Stack>
        </GridCol>
        
        <GridCol span={{ base: 12, md: 6 }}>
          <Box
            style={{
              height: '400px',
              backgroundImage: 'url(/photos/about_section_picture.jpg)',
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
