import * as React from 'react';
import { Button, Container, Table, Center, Modal } from '@mantine/core';
import Scrollbars from 'react-custom-scrollbars-2';

import { coupons } from '~/data/coupons';

import { CouponForm } from './CouponForm';
import useStyles from './Coupons.Styles';

export const Coupons = () => {

  const [opened, setOpened] = React.useState<boolean>(false);

  const rows = coupons.map(coupon => {
    return (
      <tr key={coupon.id}>
        <td>{coupon.code}</td>
        <td>{coupon.discount}</td>
        <td>{coupon.applied.toLocaleDateString('es')}</td>
        <td>{coupon.expiration.toLocaleDateString('es')}</td>
      </tr>
    );
  });

  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <Scrollbars autoHeight autoHeightMax={400}>
        <Table highlightOnHover striped>
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Descuento</th>
              <th>Fecha de Aplicación</th>
              <th>Fecha de Expiración</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Scrollbars>
      <Modal
        opened={opened}
        title='Añadir cupon'
        onClose={() => setOpened(false)}
      >
        <CouponForm setOpened={setOpened} />
      </Modal>
      <Center mt={50}>
        <Button onClick={() => setOpened(true)}>Aplicar cupon</Button>
      </Center>
    </Container>
  );
};
