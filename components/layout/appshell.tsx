"use client";

import { AppShell, Group, Button, Center } from "@mantine/core";
import Link from "next/link";

export default function RootAppShell({ children }: { children: any }) {
  return (
    <AppShell
      // header={{ height: 60 }}
      styles={{
        header: {
          backgroundColor: "yellowgreen",
          boxShadow: "var(--mantine-shadow-sm)",
        },
      }}
    >
      <AppShell.Header>
        <Group
          justify="space-between"
          top={0}
          bottom={0}
          mx="xs"
          my="auto"
          h={60}
        >
          <Button
            component={Link}
            href="/"
            variant="subtle"
            c="white"
            color="white"
          >
            Home
          </Button>
          <Group gap="lg">
            <Button
              component={Link}
              href="/movies"
              variant="subtle"
              c="white"
              color="white"
            >
              Movies
            </Button>
            <Button
              component={Link}
              href="/series"
              variant="subtle"
              c="white"
              color="white"
            >
              Series
            </Button>
            <Button
              component={Link}
              href="/shows"
              variant="subtle"
              c="white"
              color="white"
            >
              TV Shows
            </Button>
          </Group>
          <Button color="red">Toggle</Button>
        </Group>
      </AppShell.Header>
      {children}
    </AppShell>
  );
}
