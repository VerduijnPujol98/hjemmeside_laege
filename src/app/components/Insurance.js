import { Container, Title, Text, Grid, GridCol, Card, Stack, Group, Badge, List, ListItem, Divider } from '@mantine/core';
import { IconCreditCard, IconFileText, IconScale, IconClock, IconUserCheck, IconShield } from '@tabler/icons-react';

export default function Insurance() {
  return (
    <section id="speciallægeerklæringer" style={{ paddingTop: '80px', backgroundColor: '#f8f9fa' }}>
      <Container size="lg" py={80}>
        <Title order={2} size="2.5rem" ta="center" mb={20}>
          Speciallægeerklæringer
        </Title>
        <Text size="lg" ta="center" c="dimmed" mb={50} maw={800} mx="auto">
          Professionelle og objektive lægelige vurderinger til forsikringssager, personskader og retssager. 
          Som speciallæge i ortopædisk kirurgi leverer jeg grundige og videnskabeligt funderede erklæringer.
        </Text>

        <Grid>
          <GridCol span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Stack gap="md">
                <Group gap="md">
                  <IconFileText size={24} color="#228be6" />
                  <Title order={4} size="1.1rem">
                    Hvad er en speciallægeerklæring?
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  En speciallægeerklæring er en uvildig, sagkyndig udtalelse fra en specialist 
                  om en patients helbredstilstand og eventuelle følger af skader eller sygdom.
                </Text>
                <List spacing="xs" size="sm">
                  <ListItem>Objektiv medicinsk vurdering</ListItem>
                  <ListItem>Baseret på klinisk undersøgelse</ListItem>
                  <ListItem>Dokumentation af skadesfølger</ListItem>
                  <ListItem>Vurdering af funktionsnedsættelse</ListItem>
                </List>
              </Stack>
            </Card>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Stack gap="md">
                <Group gap="md">
                  <IconScale size={24} color="#40c057" />
                  <Title order={4} size="1.1rem">
                    Juridisk betydning
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  Speciallægeerklæringer bruges som bevismateriale i juridiske sammenhænge 
                  og har stor betydning for sagens udfald.
                </Text>
                <List spacing="xs" size="sm">
                  <ListItem>Retssager om personskade</ListItem>
                  <ListItem>Forsikringskrav</ListItem>
                  <ListItem>Arbejdsskader</ListItem>
                  <ListItem>Erstatningssager</ListItem>
                  <ListItem>Invaliditetsvurderinger</ListItem>
                </List>
              </Stack>
            </Card>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Stack gap="md">
                <Group gap="md">
                  <IconClock size={24} color="#fd7e14" />
                  <Title order={4} size="1.1rem">
                    Processen
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  En struktureret tilgang sikrer kvalitet og objektivitet i hver erklæring.
                </Text>
                <List spacing="xs" size="sm">
                  <ListItem>Gennemgang af journalmateriale</ListItem>
                  <ListItem>Klinisk undersøgelse</ListItem>
                  <ListItem>Billediagnostik vurdering</ListItem>
                  <ListItem>Udarbejdelse af rapport</ListItem>
                  <ListItem>Levering inden 2-3 uger</ListItem>
                </List>
              </Stack>
            </Card>
          </GridCol>
        </Grid>

        <Grid mt={30}>
          <GridCol span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="md">
                <Group gap="md">
                  <IconUserCheck size={24} color="#228be6" />
                  <Title order={4} size="1.1rem">
                    Dine rettigheder som skadelidt
                  </Title>
                </Group>
                <Text size="sm" c="dimmed" mb="md">
                  Som skadelidt har du vigtige rettigheder i forbindelse med speciallægeerklæringer:
                </Text>
                <Stack gap="sm">
                  <Group gap="xs" align="flex-start">
                    <Badge size="xs" variant="light" color="blue">Ret 1</Badge>
                    <Text size="sm">
                      <strong>Indflydelse på valg af speciallæge:</strong> Du har ret til at blive 
                      inddraget i valget af hvilken speciallæge der skal udarbejde erklæringen.
                    </Text>
                  </Group>
                  <Group gap="xs" align="flex-start">
                    <Badge size="xs" variant="light" color="green">Ret 2</Badge>
                    <Text size="sm">
                      <strong>Forslag til specialist:</strong> Du kan selv foreslå en speciallæge, 
                      hvis du har præferencer eller tidligere erfaring.
                    </Text>
                  </Group>
                  <Group gap="xs" align="flex-start">
                    <Badge size="xs" variant="light" color="orange">Ret 3</Badge>
                    <Text size="sm">
                      <strong>Objektiv vurdering:</strong> Speciallægen skal være uvildig og 
                      ikke have interesser i sagens udfald.
                    </Text>
                  </Group>
                </Stack>
              </Stack>
            </Card>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="md">
                <Group gap="md">
                  <IconCreditCard size={24} color="#495057" />
                  <Title order={4} size="1.1rem">
                    Betaling og omkostninger
                  </Title>
                </Group>
                <Text size="sm" c="dimmed" mb="md">
                  Det er vigtigt at forstå, hvem der bærer ansvaret for betalingen:
                </Text>
                <Stack gap="sm">
                  <Group gap="xs" align="flex-start">
                    <Badge size="xs" variant="light" color="blue">Advokat</Badge>
                    <Text size="sm">
                      Din advokat bestiller og betaler ofte erklæringen som led i retsprocessen.
                    </Text>
                  </Group>
                  <Group gap="xs" align="flex-start">
                    <Badge size="xs" variant="light" color="green">Forsikring</Badge>
                    <Text size="sm">
                      Forsikringsselskaber bestiller erklæringer til brug for skadesvurdering.
                    </Text>
                  </Group>
                  <Group gap="xs" align="flex-start">
                    <Badge size="xs" variant="light" color="orange">Myndighed</Badge>
                    <Text size="sm">
                      Offentlige myndigheder kan bestille erklæringer i arbejdsskadessager.
                    </Text>
                  </Group>
                </Stack>
                <Divider my="sm" />
                <Text size="xs" c="dimmed" style={{ fontStyle: 'italic' }}>
                  Som skadelidt betaler du normalt ikke selv for speciallægeerklæringen.
                </Text>
              </Stack>
            </Card>
          </GridCol>
        </Grid>

        <Card shadow="sm" padding="lg" radius="md" withBorder mt={30}>
          <Stack gap="md">
            <Group gap="md">
              <IconClock size={24} color="#495057" />
              <Title order={4} size="1.1rem">
                Hvad kan du forvente ved undersøgelsen?
              </Title>
            </Group>
            <Grid>
              <GridCol span={{ base: 12, md: 6 }}>
                <Text size="sm" c="dimmed" mb="md">
                  Jeg sætter 90 minutter af til undersøgelsen for at sikre en grundig og 
                  objektiv vurdering. Her er hvad du kan forvente:
                </Text>
                <List spacing="xs" size="sm">
                  <ListItem><strong>Varighed:</strong> 90 minutter</ListItem>
                  <ListItem><strong>Bisidder:</strong> Du er velkommen til at medbringe en bisidder</ListItem>
                  <ListItem><strong>Legitimation:</strong> Medbring gyldig legitimation</ListItem>
                  <ListItem><strong>Spørgeskema:</strong> Udfyld og medbring det tilsendte spørgeskema</ListItem>
                </List>
              </GridCol>
              <GridCol span={{ base: 12, md: 6 }}>
                <Text size="sm" c="dimmed" mb="md">
                  Under undersøgelsen vil vi gennemgå følgende områder:
                </Text>
                <List spacing="xs" size="sm">
                  <ListItem>Din ulykke og sagsforløb</ListItem>
                  <ListItem>Skader og gener du oplever</ListItem>
                  <ListItem>Symptomer og funktionsbegrænsninger</ListItem>
                  <ListItem>Lægelig undersøgelse</ListItem>
                </List>
                <Text size="xs" c="dimmed" mt="md" style={{ fontStyle: 'italic' }}>
                  Formålet er at give en objektiv og grundig vurdering af din tilstand.
                </Text>
              </GridCol>
            </Grid>
          </Stack>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder mt={30}>
          <Stack gap="md">
            <Group gap="md">
              <IconShield size={24} color="#495057" />
              <Title order={4} size="1.1rem">
                Min tilgang til speciallægeerklæringer
              </Title>
            </Group>
            <Grid>
              <GridCol span={{ base: 12, md: 8 }}>
                <Text size="sm" c="dimmed" mb="md">
                  Som speciallæge i ortopædisk kirurgi med over 25 års erfaring leverer jeg 
                  objektive og grundige speciallægeerklæringer baseret på:
                </Text>
                <Grid>
                  <GridCol span={{ base: 12, md: 6 }}>
                    <List spacing="xs" size="sm">
                      <ListItem>Grundig klinisk undersøgelse</ListItem>
                      <ListItem>Analyse af relevant bildediagnostik</ListItem>
                      <ListItem>Gennemgang af journalmateriale</ListItem>
                    </List>
                  </GridCol>
                  <GridCol span={{ base: 12, md: 6 }}>
                    <List spacing="xs" size="sm">
                      <ListItem>Videnskabelig evidens</ListItem>
                      <ListItem>Objektiv og uvildig tilgang</ListItem>
                      <ListItem>Klar og forståelig rapportering</ListItem>
                    </List>
                  </GridCol>
                </Grid>
              </GridCol>
              <GridCol span={{ base: 12, md: 4 }}>
                <Stack gap="xs">
                  <Badge variant="light" color="blue" size="sm">PhD i Ortopædi</Badge>
                  <Badge variant="light" color="green" size="sm">25+ års erfaring</Badge>
                  <Badge variant="light" color="orange" size="sm">Klinisk lektor</Badge>
                  <Badge variant="light" color="red" size="sm">Overlæge status</Badge>
                </Stack>
              </GridCol>
            </Grid>
          </Stack>
        </Card>
      </Container>
    </section>
  );
}
