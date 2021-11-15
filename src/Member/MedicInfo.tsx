import * as React from 'react';
import {
  Alert,
  Anchor,
  Button,
  Center,
  Container,
  Group,
  Input,
  Loader,
  Text
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { FiUpload, FiCheck } from 'react-icons/fi';
import { MdDownload } from 'react-icons/md';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'dayjs/locale/es';
import Scrollbars from 'react-custom-scrollbars-2';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const MedicInfo = () => {

  const { colors, white } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const [apto, setApto] = React.useState<string>('');
  const [validDate, setValidDate] = React.useState<Date>(new Date);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setApto(URL.createObjectURL(event.currentTarget.files[0]));
    }
  };

  return (
    <Container
      mt='xl'
      sx={{
        alignItems: 'center',
        backgroundColor: dark ? colors.dark[7] : white,
        boxShadow: dark ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        display: 'flex',
        padding: 15,
        maxWidth: '60vw',
        height: '700px',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}
    >
      <Center sx={{ width: 600, height: 650 }}>
        {
          <Scrollbars>
            <Document
              error={
                <Center mt={250}>
                  <Alert
                    color='red'
                    title='Ocurrió un error'
                  >
                        Error al cargar el archivo, intente nuevamente
                  </Alert>
                </Center>
              }
              file={apto}
              loading={
                <Center mt={250}>
                  <Loader />
                </Center>
              }
              noData={
                <Center mt={250}>
                  <Text>No se encontró un archivo</Text>
                </Center>
              }
            >
              <Page pageNumber={1} />
            </Document>
          </Scrollbars>
        }
      </Center>

      <Group>
        <label htmlFor='apta-medico' style={{ display: 'inline-block', height: 1 }}>
          <Input
            accept='.pdf'
            id='apta-medico'
            sx={{
              display: 'none',
            }}
            type='file'
            onChange={handleChange}
          />
          <Button
            component='span'
            leftIcon={<FiUpload size={20} />}
            size='md'
          >
            Subir Apto
          </Button>
          <Button
            color='green'
            leftIcon={<FiCheck size={20}/>}
            ml='xs'
            size='md'
          >
            Aprobar apto
          </Button>
          {
            apto &&
            <Center>
              <Anchor download={apto} href={apto} target='_blank'>
                <Button
                  color='green'
                  leftIcon={<MdDownload size={20} />}
                  mt='xs'
                  size='md'
                >
                  Descargar apto médico
                </Button>
              </Anchor>
            </Center>
          }
          <DatePicker
            withSelect
            clearable={false}
            label='Validez'
            locale='es'
            mt='xs'
            value={validDate}
            onChange={(date) => {
              if (date) {
                setValidDate(date);
              } else {
                setValidDate(new Date);
              }
            }}
          />
        </label>
      </Group>
    </Container>
  );
};
