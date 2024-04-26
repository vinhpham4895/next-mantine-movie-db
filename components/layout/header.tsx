"use client";

import { Box, Group, Button, Select, Drawer, CloseButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2, IconSearch } from "@tabler/icons-react";
import AppDrawer from "./drawer";
import Link from "next/link";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <AppDrawer opened={opened} closeCallback={close} />
      <Box h="48px" px="12px" bg="#121212">
        <Group h="32px">
          <Button component={Link} href="/" color="yellow.5" c="black" h="100%">
            IMDb
          </Button>
          <Button
            leftSection={<IconMenu2 />}
            variant="subtle"
            color="white"
            c="white"
            onClick={open}
            h="100%"
          >
            Menu
          </Button>
          <Select
            placeholder="Search IMDb"
            rightSection={<IconSearch size={20} />}
            w="500px"
            searchable
            data={["Movie 1", "Movie 2", "Movie 3"]}
            size="xs"
          />
        </Group>
      </Box>
    </>
  );
}
