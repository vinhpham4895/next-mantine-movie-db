"use client";

import { Box, Button, Select, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2, IconSearch } from "@tabler/icons-react";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={
          <Button color="yellow.5" c="black">
            IMDb
          </Button>
        }
        position="top"
        size="100%"
      >
        Drawer content
      </Drawer>
      <Box h="48px" bg="#121212">
        <Button color="yellow.5" c="black">
          IMDb
        </Button>
        <Button
          leftSection={<IconMenu2 />}
          variant="subtle"
          color="white"
          c="white"
          onClick={open}
        >
          Menu
        </Button>
        <Select
          placeholder="Search IMDb"
          rightSection={<IconSearch />}
          w="500px"
          searchable
          data={["Movie 1", "Movie 2", "Movie 3"]}
        />
      </Box>
    </>
  );
}
