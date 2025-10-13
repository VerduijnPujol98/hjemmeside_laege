import { Container, Title, Text, Grid, GridCol, Card, Stack, Group, Button, Anchor, TextInput, Textarea, Tooltip, Badge } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin, IconCalendar, IconSend, IconShieldLock } from '@tabler/icons-react';

const JOTFORM_URL = process.env.NEXT_PUBLIC_JOTFORM_URL || 'https://form.jotform.com/252856789015065';

export default function Contact() {
  return (
    <Container size="lg" py={{ base: 40, md: 80 }}>
      <Stack align="center" gap={{ base: 'lg', md: 'xl' }} mb={{ base: 40, md: 60 }}>
        <Title order={2} size="2.5rem" ta="center" fw={700}>
          Kontakt
        </Title>
        <Text size="lg" ta="center" maw={600} c="dimmed" px={{ base: 'md', md: 0 }}>
          Book din vurdering i dag. Vi er her for at hjælpe dig videre.
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
                    <Anchor href="tel:+4578454172" size="sm">
                      +4578454172
                    </Anchor>
                  </div>
                </Group>

                <Group gap={{ base: 'sm', md: 'md' }}>
                  <IconMail size={20} color="blue" />
                  <div>
                    <Text fw={500} size="md">Email</Text>
                    <Anchor href="mailto:bodlaur@gmail.com" size="sm">
                      bodlaur@gmail.com
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
                  Specialer vi tilbyder vurdering og erklæringer i
                </Title>
                <Text size="sm" c="dimmed" lh={1.5}>
                  Almen ortopædisk kirurgi (knæ, hofte, skulder, albue, hånd, og traumatologi). Almen rygkirurgi, slidgigt, diskusprolaps, rygmarvsforsnævring. Højt specialiseret rygkirurgi, skoliose, tumor, nakke- og halskirurgi.
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
              
              {/* Button to send sensitive information via secure JotForm */}
              <Stack gap="xs">
                <Group gap="xs" wrap="wrap">
                  <Button
                    component="a"
                    href={JOTFORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="light"
                    color="blue"
                    leftSection={<IconShieldLock size={20} />}
                  >
                    Send følsomme oplysninger sikkert
                  </Button>
                  <Tooltip label="Formularen sendes via krypteret forbindelse og gemmes i EU (GDPR)." withArrow>
                    <Badge variant="light" color="green" leftSection={<IconShieldLock size={14} />}>
                      Krypteret
                    </Badge>
                  </Tooltip>
                </Group>
                <Text size="xs" c="dimmed">
                  Åbner en krypteret formular i en ny fane. Undlad at dele detaljerede helbredsoplysninger i formularen herunder.
                </Text>
              </Stack>
              
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
