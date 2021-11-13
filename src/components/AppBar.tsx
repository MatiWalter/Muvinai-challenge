import {
  Group,
  Header,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { ThemeButton } from './ThemeButton';

export const AppBar = () => {

  const { colorScheme } = useMantineColorScheme();
  const { colors, white } = useMantineTheme();
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
