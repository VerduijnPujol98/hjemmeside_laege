import { Container, Title, Text, Grid, GridCol, Card, Stack, ThemeIcon, Badge, Group } from '@mantine/core';
import { 
  IconBone, 
  IconActivity, 
  IconHeart, 
  IconUserCheck,
  IconStethoscope,
  IconReportMedical 
} from '@tabler/icons-react';

const services = [
  {
    icon: IconBone,
    title: "Ortopædisk kirurgi",
    description: "Omfattende ortopædisk behandling af knogler, led og bevægeapparatet med fokus på funktionsgenoprettelse."
  },
  {
    icon: IconActivity,
    title: "Ryg kirurgi",
    description: "Specialiseret rygkirurgi for behandling af rygmarvsskader, diskusprolaps og komplekse ryglidelser."
  },
  {
    icon: IconHeart,
    title: "Nakke Hals Kirurgi",
    description: "Avanceret kirurgisk behandling af nakke- og halsområdet, herunder cervikale rygproblemer."
  },
  {
    icon: IconUserCheck,
    title: "Skoliose Kirurgi",
    description: "Specialiseret kirurgisk korrektion af skoliose og andre rygdeformiteter hos børn og voksne."
  },
  {
    icon: IconStethoscope,
    title: "Akademisk forskning",
    description: "Forskningsbaseret tilgang til ortopædkirurgi med fokus på innovative behandlingsmetoder."
  },
  {
    icon: IconReportMedical,
    title: "Konsulentvirksomhed",
    description: "Specialist konsultation og second opinion for komplekse ortopædkirurgiske problemstillinger."
  }
];

export default function Services() {
  return (
    <Container size="lg" py={{ base: 40, md: 80 }}>
      <Stack align="center" gap={{ base: 'lg', md: 'xl' }} mb={{ base: 40, md: 60 }}>
        <Title order={2} size="2.5rem" ta="center" fw={700}>
          Fagområder
        </Title>
        <Text size="lg" ta="center" maw={600} c="dimmed" px={{ base: 'md', md: 0 }}>
          Speciallæge i almen ortopædkirurgi (knæ, hofte, skulder, fod, albue, hånd, finger og traume), højt specialiseret 
          funktion i vurdering og behandling af nakke- og ryg problematikker(skoliose, diskusprolaps, knoglebrud i rygsøjlen, og 
          komplekse ryglidelser såsom infektionstilstand og tumores). 
        </Text>
        
        <Text size="md" ta="center" fw={600} mb="md">
          Forskningspublikationer:
        </Text>
        
        <Group justify="center" gap={{ base: 'xs', md: 'sm' }}>
          <Badge 
            component="a"
            href="https://ugeskriftet.dk/videnskab/metastatisk-medullaert-tvaersnitssyndrom-0"
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            color="blue"
            size="md"
            style={{ cursor: 'pointer' }}
          >
            Metastatisk medullært tværsnitssyndrom
          </Badge>
          <Badge 
            component="a"
            href="https://ugeskriftet.dk/videnskab/spondylodiskitis-og-multidisciplinaere-teams"
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            color="blue"
            size="md"
            style={{ cursor: 'pointer' }}
          >
            Spondylodiskitis og multidisciplinære teams
          </Badge>
          <Badge 
            component="a"
            href="https://ugeskriftet.dk/videnskab/cervikal-spondylotisk-myelopati"
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            color="blue"
            size="md"
            style={{ cursor: 'pointer' }}
          >
            Cervikal spondylotisk myelopati
          </Badge>
          <Badge 
            component="a"
            href="https://ugeskriftet.dk/videnskab/kirurgi-oeger-symptomatiske-patienters-livskvalitet-ved-spondylolistese"
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            color="blue"
            size="md"
            style={{ cursor: 'pointer' }}
          >
            Kirurgi øger symptomatiske patienters livskvalitet ved spondylolistese
          </Badge>
        </Group>
      </Stack>
      
      <Grid gutter={{ base: 'lg', md: 'xl' }}>
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <GridCol key={index} span={{ base: 12, sm: 6, md: 6, lg: 4 }}>
              <Card shadow="sm" padding={{ base: 'md', md: 'lg' }} radius="md" withBorder h="100%">
                <Stack gap={{ base: 'sm', md: 'md' }}>
                  <ThemeIcon size={60} radius="md" color="blue">
                    <IconComponent size={30} />
                  </ThemeIcon>
                  <Title order={3} size="1.2rem">
                    {service.title}
                  </Title>
                  <Text c="dimmed" size="sm" lh={1.5}>
                    {service.description}
                  </Text>
                </Stack>
              </Card>
            </GridCol>
          );
        })}
      </Grid>
    </Container>
  );
}
