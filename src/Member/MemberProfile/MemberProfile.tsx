import * as React from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  List,
  ThemeIcon,
} from '@mantine/core';
import { MdDelete, MdBlock, MdInfoOutline, MdPlayCircleOutline } from 'react-icons/md';

import { IMember } from '../types';
import { MemberCard } from '../MemberCard/MemberCard';
import { MemberForm } from '../MemberForm';

import useStyles from './MemberProfile.styles';

interface MemberProfileProps {
  memberDetail: IMember;
}

export const MemberProfile = ({ memberDetail }: MemberProfileProps) => {

  const [member, setMember] = React.useState<IMember>({} as IMember);

  React.useEffect(() => {
    if(memberDetail) {
      setMember(memberDetail);
    }
  }, [memberDetail]);

  const { classes: { container } }= useStyles();

  return (
    <Container className={container}>
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
