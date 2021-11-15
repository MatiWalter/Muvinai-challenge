import {
  Group,
  Header,
  Title,
} from '@mantine/core';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';

import { ThemeButton } from './ThemeButton';

export const AppBar = () => {

  const { colors, white } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Header
      height={60}
      sx={{
        alignItems: 'center',
        backgroundColor: dark ? colors.dark[7] : white,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
      }}
    >
      <Group>
        <Title
          ml='md'
          order={2}
        >
          Detalles del socio
        </Title>
      </Group>
      <ThemeButton />
    </Header>
  );
};
