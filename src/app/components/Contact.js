import { Container, Title, Text, Grid, GridCol, Card, Stack, Group, Button, Anchor, TextInput, Textarea } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin, IconCalendar, IconSend } from '@tabler/icons-react';

export default function Contact() {
  return (
    <Container size="lg" py={80}>
      <Stack align="center" gap="xl" mb={60}>
        <Title order={2} size="2.5rem" ta="center">
          Kontakt
        </Title>
        <Text size="lg" ta="center" maw={600} c="dimmed">
          Book din konsultation i dag. Vi er her for at hjælpe dig tilbage til de aktiviteter du elsker.
        </Text>
      </Stack>

      <Grid gutter="xl">
        <GridCol span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
            <Stack gap="xl">
              <Title order={3} size="1.4rem">
                Praksisoplysninger
              </Title>
              
              <Stack gap="md">
                <Group gap="md">
                  <IconMapPin size={20} color="blue" />
                  <div>
                    <Text fw={500}>Adresse</Text>
                    <Text size="sm" c="dimmed">
                      Klinik for Ortopædkirurgi 1<br />
                      Palle Juul-Jensens Boulevard 165<br />
                      8200 Aarhus N<br />
                      Danmark
                    </Text>
                  </div>
                </Group>

                <Group gap="md">
                  <IconPhone size={20} color="blue" />
                  <div>
                    <Text fw={500}>Telefon</Text>
                    <Anchor href="tel:+1234567890" size="sm">
                      (123) 456-7890
                    </Anchor>
                  </div>
                </Group>

                <Group gap="md">
                  <IconMail size={20} color="blue" />
                  <div>
                    <Text fw={500}>Email</Text>
                    <Anchor href="mailto:info@doctorname.com" size="sm">
                      info@doctorname.com
                    </Anchor>
                  </div>
                </Group>

                <Group gap="md">
                  <IconCalendar size={20} color="blue" />
                  <div>
                    <Text fw={500}>Konsultationstider</Text>
                    <Text size="sm" c="dimmed">
                      Efter kl. 17:00
                    </Text>
                  </div>
                </Group>
              </Stack>

              <Stack gap="md">
                <Title order={4} size="1rem" c="dark">
                  Sådan finder du os
                </Title>
                <Text size="sm" c="dimmed">
                  Klinikken ligger på Klinik for Ortopædkirurgi 1, ved indgang J, 
                  på Palle Juul-Jensens Boulevard 165 i Aarhus N. Der er god 
                  parkeringsmuligheder i området, og offentlig transport er let tilgængelig.
                </Text>
              </Stack>

              <Stack gap="md">
                <Title order={4} size="1rem" c="dark">
                  Vigtige oplysninger
                </Title>
                <Text size="sm" c="dimmed">
                  • Husk at medbringe henvisning og sygesikringsbevis<br />
                  • Kom venligst 15 minutter før din aftale<br />
                  • Ved afbud, ring venligst mindst 24 timer i forvejen<br />
                  • Du er velkommen til at medbringe en pårørende
                </Text>
              </Stack>

              <Stack gap="md">
                <Title order={4} size="1rem" c="dark">
                  Specialer vi behandler
                </Title>
                <Text size="sm" c="dimmed">
                  Ortopædisk kirurgi, rygkirurgi, skoliose, nakke- og halskirurgi. 
                  Vi tilbyder også speciallægeerklæringer til forsikringssager og 
                  objektive medicinske vurderinger.
                </Text>
              </Stack>
            </Stack>
          </Card>
        </GridCol>

        <GridCol span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
            <Stack gap="xl">
              <Title order={3} size="1.4rem">
                Kontakt formular
              </Title>
              
              <Stack gap="md">
                <TextInput
                  label="Navn"
                  placeholder="Dit fulde navn"
                  required
                />
                
                <TextInput
                  label="Email"
                  placeholder="din@email.dk"
                  type="email"
                  required
                />
                
                <TextInput
                  label="Telefon nummer"
                  placeholder="+45 12 34 56 78"
                  type="tel"
                />
                
                <TextInput
                  label="Emne"
                  placeholder="Emne for din henvendelse"
                  required
                />
                
                <Textarea
                  label="Besked"
                  placeholder="Beskriv venligst dit ærinde eller dine spørgsmål..."
                  rows={4}
                  required
                />
              </Stack>

              <Stack gap="md">
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
