import { Container, Table, Title } from '@mantine/core';
import Scrollbars from 'react-custom-scrollbars-2';

import { associations } from '~/data/associations';

import useStyles from './Associations.styles';

export const Associations = () => {

  const rows = associations.map(association => {
    return (
      <tr key={association.id}>
        <td>{association.initialDate.toLocaleDateString('es')}</td>
        <td>{association.finalDate.toLocaleDateString('es')}</td>
      </tr>
    );
  });

  const { classes: { container } } = useStyles();

  return (
    <Container className={container}>
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
