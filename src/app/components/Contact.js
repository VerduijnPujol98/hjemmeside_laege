import { Container, Title, Text, Grid, GridCol, Card, Stack, Group, Button, Anchor, TextInput, Textarea } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin, IconCalendar, IconSend } from '@tabler/icons-react';

export default function Contact() {
  return (
    <Container size="lg" py={{ base: 40, md: 80 }}>
      <Stack align="center" gap={{ base: 'lg', md: 'xl' }} mb={{ base: 40, md: 60 }}>
        <Title order={2} size="2.5rem" ta="center" fw={700}>
          Kontakt
        </Title>
        <Text size="lg" ta="center" maw={600} c="dimmed" px={{ base: 'md', md: 0 }}>
          Book din konsultation i dag. Vi er her for at hjælpe dig tilbage til de aktiviteter du elsker.
        </Text>
      </Stack>

      <Grid gutter={{ base: 'lg', md: 'xl' }}>
        <GridCol span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding={{ base: 'lg', md: 'xl' }} radius="md" withBorder h="100%">
            <Stack gap={{ base: 'lg', md: 'xl' }}>
              <Title order={3} size="1.4rem">
                Kontaktoplysninger
              </Title>
              
              <Stack gap={{ base: 'sm', md: 'md' }}>
                <Group gap={{ base: 'sm', md: 'md' }}>
                  <IconMapPin size={20} color="blue" />
                  <div>
                    <Text fw={500} size="md">Kontaktperson</Text>
                    <Text fw={300} size="sm"> Sekretær Bodil Lauridsen</Text>
                  </div>
                </Group>

                <Group gap={{ base: 'sm', md: 'md' }}>
                  <IconPhone size={20} color="blue" />
                  <div>
                    <Text fw={500} size="md">Telefon</Text>
                    <Anchor href="tel:+1234567890" size="sm">
                      (123) 456-7890
                    </Anchor>
                  </div>
                </Group>

                <Group gap={{ base: 'sm', md: 'md' }}>
                  <IconMail size={20} color="blue" />
                  <div>
                    <Text fw={500} size="md">Email</Text>
                    <Anchor href="mailto:info@doctorname.com" size="sm">
                      info@doctorname.com
                    </Anchor>
                  </div>
                </Group>

                <Group gap={{ base: 'sm', md: 'md' }}>
                  <IconCalendar size={20} color="blue" />
                  <div>
                    <Text fw={500} size="md">Konsultationstider</Text>
                    <Text size="sm" c="dimmed">
                      Efter kl. 15:30
                    </Text>
                  </div>
                </Group>
              </Stack>

              <Stack gap={{ base: 'sm', md: 'md' }}>
                <Title order={4} size="1rem" c="dark">
                  Vigtige oplysninger
                </Title>
                <Text size="sm" c="dimmed" lh={1.5}>
                  • Husk at medbringe legitimation<br />
                  • Kom venligst 15 minutter før din aftale<br />
                  • Ved afbud, ring venligst mindst 24 timer i forvejen<br />
                  • Du er velkommen til at medbringe en pårørende
                </Text>
              </Stack>

              <Stack gap={{ base: 'sm', md: 'md' }}>
                <Title order={4} size="1rem" c="dark">
                  Specialer vi behandler
                </Title>
                <Text size="sm" c="dimmed" lh={1.5}>
                  Ortopædisk kirurgi, rygkirurgi, skoliose, nakke- og halskirurgi. 
                  Vi tilbyder også speciallægeerklæringer til forsikringssager og 
                  objektive medicinske vurderinger.
                </Text>
              </Stack>
            </Stack>
          </Card>
        </GridCol>

        <GridCol span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding={{ base: 'lg', md: 'xl' }} radius="md" withBorder h="100%">
            <Stack gap={{ base: 'lg', md: 'xl' }}>
              <Title order={3} size="1.4rem">
                Kontakt formular
              </Title>
              
              <Stack gap={{ base: 'sm', md: 'md' }}>
                <TextInput
                  label="Navn"
                  placeholder="Dit fulde navn"
                  required
                  size="md"
                />
                
                <TextInput
                  label="Email"
                  placeholder="din@email.dk"
                  type="email"
                  required
                  size="md"
                />
                
                <TextInput
                  label="Telefon nummer"
                  placeholder="+45 12 34 56 78"
                  type="tel"
                  size="md"
                />
                
                <TextInput
                  label="Emne"
                  placeholder="Emne for din henvendelse"
                  required
                  size="md"
                />
                
                <Textarea
                  label="Besked"
                  placeholder="Beskriv venligst dit ærinde eller dine spørgsmål..."
                  rows={{ base: 3, md: 4 }}
                  required
                  size="md"
                />
              </Stack>

              <Stack gap={{ base: 'sm', md: 'md' }}>
                <Text size="sm" c="dimmed" ta="center">
                  Vi bestræber os på at svare inden for 24 timer på hverdage.
                </Text>
                <Text size="xs" c="dimmed" ta="center">
                  For akutte henvendelser, ring venligst direkte til klinikken.
                </Text>
              </Stack>

              <Button
                leftSection={<IconSend size={20} />}
                size="lg"
                fullWidth
                color="blue"
              >
                Send besked
              </Button>
            </Stack>
          </Card>
        </GridCol>
      </Grid>
    </Container>
  );
}
