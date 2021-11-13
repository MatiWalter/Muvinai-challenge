import * as React from 'react';
import { useMantineColorScheme, Burger, Header, Title, Group, UnstyledButton , Text } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { BsSun, BsMoon } from 'react-icons/bs';

export const AppBar = () => {

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { colors, white } = useMantineTheme();
  const [opened, setOpened] = React.useState<boolean>(false);
  const dark = colorScheme === 'dark';

  return (
    <Header
      fixed
      height={60}
      sx={{
        backgroundColor: dark ? colors.dark[4] : white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Group>
        <Burger
          ml='xs'
          opened={opened}
          onClick={() => setOpened(!opened)}
        />
        <Title
          ml='md'
          order={2}
        >
          Detalles
        </Title>
      </Group>
      <UnstyledButton
        sx={{
          backgroundColor: dark ? colors.dark[9] : colors.gray[1],
          borderRadius: 50,
          display: 'flex',
          alignItems: 'center',
          marginRight: 15,
          height: 40,
          padding: 15,
        }}
        onClick={() => toggleColorScheme()}
      >
        {dark ? (
          <>
            <Text mr='xs'>Light theme</Text>
            <div
              style={{
                backgroundColor: colors.yellow[5],
                borderRadius: 100,
                height: 20,
                width: 20,
                padding: 5
              }}
            >
              <BsSun size={20} />
            </div>

          </>
        ) : (
          <>
            <Text mr='xs'>Dark theme</Text>
            <div
              style={{
                backgroundColor: colors.blue[8],
                borderRadius: 100,
                height: 20,
                width: 20,
                padding: 5
              }}
            >
              <BsMoon color={white} size={20} />
            </div>
          </>
        )}
      </UnstyledButton>
    </Header>
  );
};