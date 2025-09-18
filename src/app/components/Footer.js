'use client';

import { Container, Text, Group, Divider, Stack } from '@mantine/core';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', marginTop: '4rem' }}>
      <Container size="lg" py={{ base: 30, md: 40 }}>
        <Stack gap="md">
          <Divider />
          
          <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
            {/* Doctor Information */}
            <Stack gap="xs" style={{ flex: 1, minWidth: 250 }}>
              <Text size="sm" fw={600} c="dark">
                Dr. Kristian Høy, PhD
              </Text>
              <Text size="xs" c="dimmed">
                Klinisk lektor, Institut for Klinisk Medicin - Ortopædkirurgi
              </Text>
              <Text size="xs" c="dimmed">
                Speciallæge i ortopædisk kirurgi
              </Text>
            </Stack>

            {/* Website Creator Information */}
            <Stack gap="xs" style={{ flex: 1, minWidth: 200 }} align={{ base: 'flex-start', md: 'flex-end' }}>
              <Text size="xs" c="dimmed">
                Website lavet af Verduijn - Aarhus (CVR: 41230541)
              </Text>
            </Stack>
          </Group>

          <Divider />
          
          {/* Copyright */}
          <Group justify="center">
            <Text size="xs" c="dimmed" ta="center">
              © {new Date().getFullYear()} Dr. Kristian Høy, PhD. Alle rettigheder forbeholdes.
            </Text>
          </Group>
        </Stack>
      </Container>
    </footer>
  );
}