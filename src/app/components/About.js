import { Container, Title, Text, Grid, GridCol, Box, Stack, List, ListItem, Badge, Group, Button, Card, Divider } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

export default function About() {
  return (
    <Container size="lg" py={{ base: 40, md: 80 }} style={{ backgroundColor: '#f8f9fa' }}>
  <Grid gutter={{ base: 'lg', md: 'xl' }} align="flex-start">
        {/* Left: Image card */}
        <GridCol span={{ base: 12, md: 5 }}>
          <Card withBorder shadow="sm" padding="md" radius="md">
            <Box
              h={{ base: 300, md: 420 }}
              style={{
                backgroundImage: 'url(/photos/about_section_picture.jpg?v=2)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px'
              }}
            />
            <Divider my="md" />
            <Button 
              component="a"
              href="https://cvupload.au.dk/uploads/AU1716/finalnewfullcv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              variant="outline"
              color="dark"
              fullWidth
              style={{ cursor: 'pointer' }}
            >
              Se CV (PDF)
            </Button>
          </Card>
          {/* Move badges below the left box */}
          <Stack gap={{ base: 'sm', md: 'md' }} mt={{ base: 14, md: 18 }}>
            <Group gap={{ base: 'xs', md: 'sm' }} wrap="wrap">
              <Badge size="md" variant="light" color="blue">Knogler</Badge>
              <Badge size="md" variant="light" color="green">Slidgigt</Badge>
              <Badge size="md" variant="light" color="orange">Columna</Badge>
              <Badge size="md" variant="light" color="purple">Rygmarv</Badge>
              <Badge size="md" variant="light" color="teal">Nerver</Badge>
              <Badge size="md" variant="light" color="red">Rygsmerter</Badge>
              <Badge size="md" variant="light" color="cyan">Rygkirurgi</Badge>
            </Group>
          </Stack>
        </GridCol>

        {/* Right: Content card with bio and education */}
        <GridCol span={{ base: 12, md: 7 }}>
          <Card withBorder shadow="sm" padding={{ base: 'md', md: 'lg' }} radius="md">
            <Stack gap={{ base: 'lg', md: 'xl' }} style={{ minHeight: 0 }}>
              <Title order={2} size="1.9rem" fw={700} ta={{ base: 'center', md: 'left' }}>
                Om Kristian Høy, PhD
              </Title>
              <Stack gap={{ base: 'sm', md: 'md' }}>
                <Text size="md" c="dimmed" ta={{ base: 'left', md: 'left' }} lh={1.8}>
                  Med over 37 års erfaring inden for ortopædkirurgi er Kristian Høy en anerkendt specialist og forsker.
                </Text>
                <Text size="md" c="dimmed" ta={{ base: 'left', md: 'left' }} lh={1.8}>
                  Som klinisk lektor (Ass. Professor) ved Institut for Klinisk Medicin, Aarhus Universitet og Ekstern Lektor ved Institut for Biomedicin, Aarhus Universitet samt Uddannelseansvarlig prægraduat lektor Ortopædkirurgisk afdeling Aarhus Universitetshospital kombinerer han klinisk ekspertise med akademisk forskning og undervisning. Kristian Høy har været overlæge på Ortopædkirurgisk Afdeling, Aarhus Universitetshospital siden 1999, og ansat som læge i Region Midt siden 1989.
                </Text>
              </Stack>
              <Divider />
              <Stack gap={{ base: 'sm', md: 'md' }}>
                <Title order={3} size="1.2rem" ta={{ base: 'left', md: 'left' }}>Uddannelse (Akademiske kvalifikationer)</Title>
                <List spacing={{ base: 'sm', md: 'md' }} size="sm" icon={<IconCheck size={16} color="green" />}>
                  <ListItem>1988 - Cand. Med. , Læge, (Sundhedsstyrelsen, SST)</ListItem>
                  <ListItem>1997 - Specialist i Ortopædisk Kirurgi (Sundhedsstyrelsen, SST)</ListItem>
                  <ListItem>1999 - Overlæge, Ortopædkirurgisk Afdeling, Aarhus Universitetshospital</ListItem>
                  <ListItem>2011 - Klinisk Lektor, Aarhus Universitet (AU)</ListItem>
                  <ListItem>2018 - PhD, Aarhus Universitet, Danmark</ListItem>
                  <ListItem>2018 - Kåret som året underviser, Århus Universitet af dimitterenede læger</ListItem>
                  <ListItem>2019 - Ekstern Lektor, Institut for Biomedicin</ListItem>
                  <ListItem>2019 - Tildelt Prisen for Bedste PhD afhandling af Dansk Ortopædisk Selskab (DOS)</ListItem>
                  <ListItem>2020 - Prægraduat Uddannelsesansvarlig klinisk lektor, Ortopædisk afdeling, Aarhus University</ListItem>
                  <ListItem>2024 - Hovedvejleder for årets studenterforsker udpeget af akademisk råd, Aarhus University</ListItem>
                </List>
              </Stack>
            </Stack>
          </Card>
        </GridCol>
      </Grid>

      
    </Container>
  );
}
