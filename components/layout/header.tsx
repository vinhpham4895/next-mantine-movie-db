"use client";

import { Box, Group, Button, Select, Drawer, CloseButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2, IconSearch, IconX } from "@tabler/icons-react";

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
        closeButtonProps={{
          icon: <CloseButton size="50px" bg="yellow.5" radius="xl" p="xs" />,
        }}
        transitionProps={{ duration: 300 }}
      >
        Drawer Content
      </Drawer>
      <Box h="48px" px="12px" bg="#121212">
        <Group h="32px">
          <Button color="yellow.5" c="black" h="100%">
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
            rightSection={<IconSearch />}
            w="500px"
            searchable
            data={["Movie 1", "Movie 2", "Movie 3"]}
            styles={{ input: { height: "100%" } }}
          />
        </Group>
      </Box>
    </>
  );
}
