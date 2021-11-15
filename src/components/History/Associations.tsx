import { Container, Table, Title } from '@mantine/core';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import Scrollbars from 'react-custom-scrollbars-2';

import { associations } from '~/data/associations';

export const Associations = () => {

  const { colors, white } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const rows = associations.map(association => {
    return (
      <tr key={association.id}>
        <td>{association.initialDate.toLocaleDateString('es')}</td>
        <td>{association.finalDate.toLocaleDateString('es')}</td>
      </tr>
    );
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
      <Title align='center' order={2}>Asociaciones pasadas</Title>
      <Scrollbars>
        <Table highlightOnHover mt={40}>
          <thead>
            <tr>
              <th>Inicio</th>
              <th>Fin</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Scrollbars>
    </Container>
  );
};
