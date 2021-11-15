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
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';

import { historyPayments } from '../../data/payments';

export const Payments = () => {

  const { colors, white } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

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
          <Title
            order={4}
            sx={{
              color: payment.completed ? colors.green[8] : colors.red[8]
            }}
          >
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
    <Container
      mt='xl'
      sx={{
        backgroundColor: dark ? colors.dark[7] : white,
        boxShadow: dark ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        borderRadius: 10,
        padding: 25,
        maxWidth: '600px',
        height: '650px'
      }}
    >
      <Scrollbars>
        <Timeline active={historyPayments.length} bulletSize={30} color='gray'>
          {items}
        </Timeline>
      </Scrollbars>
    </Container>
  );
};
