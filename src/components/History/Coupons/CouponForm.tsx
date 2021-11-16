import * as React from 'react';
import { Box, Button, Select, Space, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import dayjs from 'dayjs';

import useStyles from './CouponForm.styles';

interface CouponFormProps {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CouponForm = ({ setOpened }: CouponFormProps) => {

  const data = [
    { value: '5%', label: '5%' },
    { value: '10%', label: '10%' },
    { value: '15%', label: '15%' },
    { value: '20%', label: '20%' },
    { value: '25%', label: '25%' },
    { value: '30%', label: '30%' },
  ];

  const [expirationDate, setExpirationDate] = React.useState<Date>(new Date);

  const { classes: { box, innerBox, buttonBox } } = useStyles();

  return (
    <Box className={box}>
      <Box className={innerBox}>
        <Space h='xl' />
        <TextInput
          label='Codigo'
        />
        <Space h='xl' />
        <Select
          data={data}
          label='Descuento'
          value='5%'
        />
        <Space h='xl' />
        <DatePicker
          withSelect
          clearable={false}
          dropdownType='modal'
          label='Fecha de expiración'
          locale='es'
          minDate={dayjs().add(1, 'day').toDate()}
          value={expirationDate}
          yearsRange={{ from: 2021, to: 2023 }}
          onChange={(date) => setExpirationDate(date || new Date)}
        />
        <Space h='xl' />
        <Box className={buttonBox}>
          <Button
            color='green'
            onClick={() => setOpened(false)}
          >
            Añadir
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
