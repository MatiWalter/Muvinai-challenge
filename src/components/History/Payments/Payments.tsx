import {
  Box,
  Container,
  ThemeIcon,
  Title,
  Text,
  Timeline,
} from '@mantine/core';
import { MdPayment } from 'react-icons/md';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useMantineTheme } from '@mantine/styles';

import { historyPayments } from '~/data/payments';

import useStyles from './Payments.styles';

export const Payments = () => {

  const { classes: { container } } = useStyles();
  const { colors } = useMantineTheme();

  const items = historyPayments.map((payment) => {
    return (
      <Timeline.Item
        key={payment.id}
        bullet={
          <ThemeIcon
            color={payment.completed ? 'green' : 'red'}
            radius='xl'
            size={30}
          >
            <MdPayment size={20} />
          </ThemeIcon>
        }
      >
        <Box ml='sm'>
          <Title order={4} sx={{ color: payment.completed ? colors.green[8] : colors.red[8] }}>
            {payment.completed ? 'Aceptado' : 'Rechazado'}
          </Title>
          <Box sx={{ flexDirection: 'column' }}>
            <Text>Id de pago: {payment.id}</Text>
            <Text>N° tarjeta: ...{payment.card} - {payment.brand}</Text>
            <Text>Monto total: $ {payment.amount}</Text>
          </Box>
          <Text>Realizada el {payment.date.toLocaleDateString('es')}</Text>
        </Box>
      </Timeline.Item>
    );
  });

  return (
    <Container className={container}>
      <Scrollbars>
        <Timeline active={historyPayments.length} bulletSize={30} color='gray'>
          {items}
        </Timeline>
      </Scrollbars>
    </Container>
  );
};
