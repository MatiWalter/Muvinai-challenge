import * as React from 'react';
import {
  Alert,
  Center,
  Container,
  Loader,
  Text
} from '@mantine/core';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Scrollbars from 'react-custom-scrollbars-2';

import useStyles from './MedicInfo.styles';
import { MedicForm } from './MedicForm';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const MedicInfo = () => {

  const [apto, setApto] = React.useState<string>('');
  const { classes: { center, container } } = useStyles();

  return (
    <Container className={container}>
      <Center className={center}>
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
      <MedicForm apto={apto} setApto={setApto} />
    </Container>
  );
};
