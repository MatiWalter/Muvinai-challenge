import {
  Container,
  Table,
} from '@mantine/core';
import Scrollbars from 'react-custom-scrollbars-2';

import { edits } from '~/data/edits';

import useStyles from './Edits.styles';

export const Edits = () => {

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

  const { classes: { container } } = useStyles();

  return (
    <Container className={container}>
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
