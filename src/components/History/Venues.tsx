import { Container } from '@mantine/core';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { VictoryPie } from 'victory';

import { venues } from '../../data/venues';

export const Venues = () => {

  const { colors, white } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const data = venues.map(venue => {
    return { x: venue.venue, y: venue.quantity };
  });

  return (
    <Container
      mt='xl'
      sx={{
        backgroundColor: dark ? colors.dark[7] : white,
        boxShadow: dark ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        borderRadius: 10,
        padding: 25,
        maxWidth: '700px',
        height: '500px'
      }}
    >
      <VictoryPie
        colorScale={[colors.red[6], colors.green[6], colors.blue[6] ]}
        data={data}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        style={{ labels: { fill: dark? 'white' : 'black' } }}
      />
    </Container>
  );
};
