import {
  Container,
  Table,
} from '@mantine/core';
import Scrollbars from 'react-custom-scrollbars-2';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';

import { edits } from '~/data/edits';

export const Edits = () => {

  const { colors, white } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const rows = edits.map(edit => {
    return (
      <tr key={edit.id}>
        <td>{edit.role}</td>
        <td>{edit.user}</td>
        <td>{edit.changes}</td>
        <td>{edit.from}</td>
        <td>{edit.to}</td>
        <td>{edit.date.toLocaleDateString('es')}</td>
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
        maxWidth: '85vw',
        height: '600px'
      }}
    >
      <Scrollbars>
        <Table highlightOnHover>
          <thead>
            <tr>
              <th>Rol</th>
              <th>Usuario</th>
              <th>Cambios realizados</th>
              <th>Anterior</th>
              <th>Actual</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Scrollbars>
    </Container>
  );
};
