import { Container } from '@mantine/core';

import { IMember } from './types';
import { MemberCard } from './MemberCard';

interface MemberProfileProps {
  member?: IMember;
}

export const MemberProfile = ({ member }: MemberProfileProps) => {

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <MemberCard
        alt={member?.name}
        birthday={member?.birthday}
        email={member?.email}
        lastName={member?.lastName}
        name={member?.name}
        path={member?.avatar}
      />
    </Container>
  );
};
