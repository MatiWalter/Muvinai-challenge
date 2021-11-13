import { Anchor, Box, Container, Group, Text, Title } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { BsWhatsapp } from 'react-icons/bs';
import { RiCake2Fill, RiPhoneFill } from 'react-icons/ri';

import { MemberAvatar } from './MemberAvatar';

interface MemberCardProps {
  name?: string;
  lastName?: string;
  path?: string;
  alt?: string;
  email?: string;
  birthday?: Date;
  dni?: string;
  phone?: string;
}

export const MemberCard = ({
  name,
  lastName,
  path,
  alt,
  email,
  birthday,
  dni,
  phone
}: MemberCardProps) => {

  const { colors } = useMantineTheme();

  return (
    <Container
      sx={{
        alignItems: 'center',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        borderRadius: 10,
        display: 'flex',
        padding: 15
      }}
    >
      <MemberAvatar alt={alt} path={path} />
      <Group align='center' direction='column' ml='md' spacing='xs'>
        <Group spacing='xs'>
          <Title order={2}>{name} {lastName}</Title>
          <Box>
            <Anchor href='#' sx={{ display: 'flex', alignItems: 'center' }} target="_blank">
              <BsWhatsapp color={colors.green[8]} size={25} />
            </Anchor>
          </Box>
        </Group>
        <Group align='center' direction='column' spacing='xs'>
          <Text>{email}</Text>
          <Group spacing='xs'>
            <RiPhoneFill color={colors.blue[8]} size={25} />
            <Text>+{phone}</Text>
          </Group>
          <Group spacing='xs'>
            <RiCake2Fill color={colors.red[9]} size={25} />
            <Text>{birthday?.toLocaleDateString()}</Text>
          </Group>
          <Text>DNI: {dni}</Text>
        </Group>
      </Group>
    </Container>
  );
};
