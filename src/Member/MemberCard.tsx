import * as React from 'react';
import {
  Anchor,
  Container,
  Group,
  Text,
  Title,
  Box,
  Badge
} from '@mantine/core';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { BsWhatsapp } from 'react-icons/bs';


import { MemberAvatar } from './MemberAvatar';
import { IMember } from './types';

interface MemberCardProps {
  memberDetail: IMember;
  alt?: string;
}

export const MemberCard = ({
  memberDetail,
  alt
}: MemberCardProps) => {

  const { colors, white } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const [member, setMember] = React.useState<IMember>({} as IMember);

  React.useEffect(() => {
    if(memberDetail) {
      setMember(memberDetail || {} as IMember);
    }
  }, [memberDetail]);

  return (
    <Container
      sx={{
        alignItems: 'center',
        display: 'flex',
        padding: 15,
        height: '300px',
      }}
    >
      <MemberAvatar alt={alt || member?.name} path={member?.avatar} />
      <Group align='start' direction='column' ml='md' spacing={5} sx={{ width: '250px' }}>
        <Group spacing={1}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
              <Text mr='xs' size='sm'>Socio N° {member?.id}</Text>
              <Badge
                color={member?.state === 'Activo' ? 'green' : 'red'}
                variant={dark ? 'filled' : 'outline'}
              >
                {member?.state}
              </Badge>
            </Box>
            <Group spacing='xs'>
              <Title order={2}>{member?.name} {member?.lastName}</Title>
              <Anchor
                href={`https://api.whatsapp.com/send?phone=${member?.phone}`}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <BsWhatsapp color={colors.green[8]} size={25} />
              </Anchor>
            </Group>
            <Anchor href={`mailto: ${member.email}`} target='_blank'>
              <Text>{member?.email}</Text>
            </Anchor>
          </Box>
        </Group>
        <Group align='start' direction='column' mt='xs' spacing={1}>
          <Text>Subscripción actual: {member?.subscription?.toLocaleDateString()}</Text>
          <Text>Proximo pago: {member?.nextPayment?.toLocaleDateString()}</Text>
        </Group>
      </Group>
    </Container>
  );
};
