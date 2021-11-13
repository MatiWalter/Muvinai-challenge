import * as React from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Space, AppShell, Navbar, Text, Header, MediaQuery, Burger, useMantineTheme } from '@mantine/core';

import { AppBar } from '~/components/AppBar';

import { IMember } from './Member';
import { MemberProfile } from './Member';
import { NavBar } from './components/NavBar';


function App() {

  const mock: IMember = {
    activePlan: 'Plan Elite Mensual',
    birthday: new Date(),
    dni: Math.floor(Math.random() * 100000000).toFixed(),
    email: 'michael.lawson@reqres.in',
    id: Math.floor(Math.random() * 100000).toFixed(),
    lastName: 'Lawson',
    name: 'Michael',
    nextPayment: new Date(),
    phone: Math.floor(Math.random() * 10000000000).toFixed(),
    registerDate: new Date(),
    state: 'Activo',
    subscription: new Date(),
    avatar: 'https://reqres.in/img/faces/7-image.jpg'
  };

  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const [opened, setOpened] = React.useState<boolean>(false);
  const { colors } = useMantineTheme();

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }}>
        <AppShell
          fixed
          header={
            <Header height={60}>
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    color={colors.gray[6]}
                    ml='xs'
                    opened={opened}
                    size="sm"
                    onClick={() => setOpened(!opened)}
                  />
                </MediaQuery>
                <AppBar />
              </div>
            </Header>
          }
          navbar={
            <Navbar
              hidden={!opened}
              hiddenBreakpoint="sm"
              padding="xs"
              width={{ base: 250, breakpoints: { sm: '100%', lg: 300 } }}>
              <NavBar />
            </Navbar>
          }
          navbarOffsetBreakpoint="sm"
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <Space h={25} />
          <MemberProfile member={mock} />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
