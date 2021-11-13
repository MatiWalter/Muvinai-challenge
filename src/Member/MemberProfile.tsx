import { IMember } from './types';
import { MemberCard } from './MemberCard';

interface MemberProfileProps {
  member?: IMember;
}

export const MemberProfile = ({ member }: MemberProfileProps) => {

  return (
    <>
      <MemberCard
        alt={member?.name}
        birthday={member?.birthday}
        dni={member?.dni}
        email={member?.email}
        lastName={member?.lastName}
        name={member?.name}
        path={member?.avatar}
        phone={member?.phone}
      />
    </>
  );
};
