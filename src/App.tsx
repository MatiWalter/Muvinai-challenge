import * as React from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme  } from '@mantine/core';

import { IMember } from './Member';
import { MemberProfile } from './Member';

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

  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }}>
        <MemberProfile member={mock} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
