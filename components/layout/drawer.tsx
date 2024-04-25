"use client";

import { Drawer, Anchor, Grid, Button, CloseButton } from "@mantine/core";
import Link from "next/link";

export default function AppDrawer({
  opened,
  closeCallback,
}: {
  opened: boolean;
  closeCallback: () => void;
}) {
  return (
    <Drawer
      opened={opened}
      onClose={closeCallback}
      title={
        <Button color="yellow.5" c="black">
          IMDb
        </Button>
      }
      position="top"
      size="100%"
      closeButtonProps={{
        icon: <CloseButton size="50px" color="yellow.5" radius="xl" p="xs" />,
      }}
      transitionProps={{ duration: 300 }}
    >
      <Grid>
        <Grid.Col span={12}>
          <Anchor component={Link} href="/">
            Home
          </Anchor>
        </Grid.Col>
        <Grid.Col span={12}>
          <Anchor component={Link} href="/about">
            About
          </Anchor>
        </Grid.Col>
      </Grid>
    </Drawer>
  );
}
