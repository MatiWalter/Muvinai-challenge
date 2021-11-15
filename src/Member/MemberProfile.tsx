import * as React from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  List,
  ThemeIcon,
} from '@mantine/core';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { MdDelete, MdBlock, MdInfoOutline, MdPlayCircleOutline } from 'react-icons/md';

import { IMember } from './types';
import { MemberCard } from './MemberCard';
import { MemberForm } from './MemberForm';

interface MemberProfileProps {
  memberDetail: IMember;
}

export const MemberProfile = ({ memberDetail }: MemberProfileProps) => {

  const { colors, white } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const [member, setMember] = React.useState<IMember>({} as IMember);

  React.useEffect(() => {
    if(memberDetail) {
      setMember(memberDetail);
    }
  }, [memberDetail]);

  return (
    <Container
      mt='xl'
      sx={{
        backgroundColor: dark ? colors.dark[7] : white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        boxShadow: dark ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        display: 'flex',
        flexDirection: 'row',
        height: '700px',
        justifyContent: 'space-evenly',
        maxWidth: '85vw',
        padding: 15,
      }}
    >
      <Box>
        <MemberCard
          alt={member?.name}
          memberDetail={member}
        />
        <Center>
          <List
            icon={
              <ThemeIcon radius="xl" size={28}>
                <MdInfoOutline size={24} />
              </ThemeIcon>
            }
            spacing='sm'
          >
            <List.Item>Dni: {member?.dni}</List.Item>
            <List.Item>Teléfono: {member?.phone}</List.Item>
            <List.Item>Fecha de Nacimiento: {member?.birthday?.toLocaleDateString('es')}</List.Item>
            <List.Item>Plan actual: {member?.activePlan}</List.Item>
            <List.Item>Se registró: {member?.registerDate?.toLocaleDateString('es')}</List.Item>
          </List>
        </Center>
        <Center mt='xl'>
          {
            member.state === 'Activo'
              ? (
                <Button
                  color='red'
                  leftIcon={<MdDelete size={20} />}
                  mr='md'
                  onClick={() => setMember({
                    ...member,
                    state: 'No activo',
                  })}
                >
                  Dar baja
                </Button>
              )
              : (
                <Button
                  color='green'
                  leftIcon={<MdPlayCircleOutline size={20} />}
                  mr='md'
                  onClick={() => setMember({ ...member, state: 'Activo' })}
                >
                  Revertir baja
                </Button>
              )
          }
          <Button color='red' leftIcon={<MdBlock size={20} />}>Invalidar acceso</Button>
        </Center>
      </Box>
      <MemberForm memberDetail={member} updateMember={setMember} />
    </Container>
  );
};
