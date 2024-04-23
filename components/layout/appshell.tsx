"use client";

import { AppShell, Group, Button, NavLink } from "@mantine/core";
import Link from "next/link";

export default function RootAppShell({ children }: { children: any }) {
  return (
    <AppShell
      header={{ height: 60 }}
      styles={{
        header: {
          backgroundColor: "yellowgreen",
          boxShadow: "var(--mantine-shadow-sm)",
        },
      }}
    >
      <AppShell.Header>
        <Group justify="space-between" m="xs">
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
