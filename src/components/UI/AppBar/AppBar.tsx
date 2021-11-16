import * as React from 'react';
import {
  Burger,
  Box,
  Group,
  Header,
  MediaQuery,
  Title,
  useMantineTheme
} from '@mantine/core';

import { ThemeButton } from '../ThemeButton/ThemeButton';

import useStyles from './AppBar.styles';

export const AppBar = () => {

  const { colors } = useMantineTheme();
  const { classes: { header, box } }= useStyles();

  const [opened, setOpened] = React.useState<boolean>(false);

  return (
    <Box className={box}>
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Burger
          color={colors.gray[6]}
          ml='xs'
          opened={opened}
          size="sm"
          onClick={() => setOpened(!opened)}
        />
      </MediaQuery>
      <Header className={header} height={60}>
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
    </Box>
  );
};
