import { Container } from '@mantine/core';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { VictoryPie } from 'victory';

import { venues } from '~/data/venues';

import useStyles from './Venues.styles';

export const Venues = () => {

  const { colors } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const data = venues.map(venue => {
    return { x: venue.venue, y: venue.quantity };
  });

  const { classes: { container } } = useStyles();

  return (
    <Container className={container}>
      <VictoryPie
        colorScale={[colors.red[6], colors.green[6], colors.blue[6] ]}
        data={data}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        style={{ labels: { fill: dark ? 'white' : 'black' } }}
      />
    </Container>
  );
};
