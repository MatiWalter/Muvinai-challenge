import * as React from 'react';
import {
  AppShell,
  Burger,
  ColorScheme,
  ColorSchemeProvider,
  Header,
  MantineProvider,
  MediaQuery,
  Space,
  Tab,
  Tabs,
} from '@mantine/core';
import { useMantineTheme } from '@mantine/styles';

import { AppBar } from './components/UI';
import { MedicInfo, MemberProfile } from './Member';
import { Payments, Edits, Associations, Venues, Coupons } from './components/History';
import { member } from './data/member';

function App() {

  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const [opened, setOpened] = React.useState<boolean>(false);
  const { colors } = useMantineTheme();

  const [activeTab, setActiveTab] = React.useState<number>(0);

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
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <Space h={25} />
          <Tabs active={activeTab} initialTab={0} position='center' onTabChange={setActiveTab}>
            <Tab label='Detalles'>
              <MemberProfile memberDetail={member} />
            </Tab>
            <Tab label='Apto médico'>
              <MedicInfo />
            </Tab>
            <Tab label='Historial de Pagos'>
              <Payments />
            </Tab>
            <Tab label='Historial de Edición'>
              <Edits />
            </Tab>
            <Tab label='Asociaciones Pasadas'>
              <Associations />
            </Tab>
            <Tab label='Uso de cupones'>
              <Coupons />
            </Tab>
            <Tab label='Accesos a sedes'>
              <Venues />
            </Tab>
          </Tabs>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
