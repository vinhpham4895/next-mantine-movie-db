"use client";

import { AppShell } from "@mantine/core";

export default function RootAppShell({ children }: { children: any }) {
  return (
    <AppShell
      header={{ height: 48 }}
      styles={{
        header: {
          backgroundColor: "yellowgreen",
          boxShadow: "var(--mantine-shadow-sm)",
        },
      }}
    >
      <AppShell.Header>Header</AppShell.Header>
      {children}
    </AppShell>
  );
}
