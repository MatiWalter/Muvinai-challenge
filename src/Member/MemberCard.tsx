import { Anchor, Box, Container, Space, Text, Title } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { BsWhatsapp } from 'react-icons/bs';
import { RiCake2Fill } from 'react-icons/ri';

import { MemberAvatar } from './MemberAvatar';

interface MemberCardProps {
  name?: string;
  lastName?: string;
  path?: string;
  alt?: string;
  email?: string;
  birthday?: Date;
}

export const MemberCard = ({
  name,
  lastName,
  path,
  alt,
  email,
  birthday,
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
      <Box ml='md' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Title order={2}>{name} {lastName}</Title>
          <Box ml='xs' sx={{ display: 'flex', alignItems: 'center' }}>
            <Anchor href='#'sx={{ display: 'flex', alignItems: 'center' }} target="_blank">
              <BsWhatsapp color={colors.green[8]} size={25} />
            </Anchor>
          </Box>
        </Box>
        <Text>{email}</Text>
        <Space h='xs' />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RiCake2Fill color={colors.red[9]} size={25} />
          <Text align='center' ml='xs'>{birthday?.toLocaleDateString()}</Text>
        </Box>
        <Space h='xs' />

      </Box>
    </Container>
  );
};
