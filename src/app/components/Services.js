import { Container, Title, Text, Grid, GridCol, Card, Stack, ThemeIcon } from '@mantine/core';
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
    <Container size="lg" py={80}>
      <Stack align="center" gap="xl" mb={60}>
        <Title order={2} size="2.5rem" ta="center">
          Fagområder
        </Title>
        <Text size="lg" ta="center" maw={600} c="dimmed">
          Specialiseret ortopædkirurgi med fokus på ryg-, nakke- og skoliosebehandling
        </Text>
      </Stack>
      
      <Grid gutter="xl">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <GridCol key={index} span={{ base: 12, md: 6, lg: 4 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                <Stack gap="md">
                  <ThemeIcon size={60} radius="md" color="blue">
                    <IconComponent size={30} />
                  </ThemeIcon>
                  <Title order={3} size="1.2rem">
                    {service.title}
                  </Title>
                  <Text c="dimmed" size="sm">
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
