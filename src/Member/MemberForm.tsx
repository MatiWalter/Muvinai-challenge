import * as React from 'react';
import {
  Affix,
  Box,
  Button,
  Center,
  Select,
  Space,
  TextInput,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { MdOutlineEmail, MdEdit, MdOutlineCancel } from 'react-icons/md';
import { RiCake2Fill, RiPhoneFill } from 'react-icons/ri';
import { HiOutlineIdentification } from 'react-icons/hi';
import { FaSave } from 'react-icons/fa';
import 'dayjs/locale/es';

import { IMember, TActivePlan } from './types';

interface MemberFormProps {
  memberDetail?: IMember;
  updateMember: React.Dispatch<React.SetStateAction<IMember>>;
}

export const MemberForm = ({ memberDetail, updateMember }: MemberFormProps) => {

  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [member, setMember] = React.useState<IMember>({} as IMember);

  React.useEffect(() => {
    if(memberDetail) {
      setMember(memberDetail || {} as IMember);
    }
  }, [memberDetail]);

  return (
    <Center sx={{ display: 'flex', width: '600px' }}>
      <Box mr='xl' sx={{ width: '400px' }}>

        <TextInput
          disabled={disabled}
          label='Nombre'
          value={member?.name || ''}
          variant={ member?.name ? 'filled' : 'default' }
          onChange={({ target: { value: name } }) => setMember({ ...member, name })}
        />

        <Space />

        <TextInput
          disabled={disabled}
          label='Apellido'
          value={member?.lastName || ''}
          variant={ member?.lastName ? 'filled' : 'default' }
          onChange={({ target: { value: lastName } }) => setMember({ ...member, lastName })}
        />

        <Space />

        <TextInput
          disabled={disabled}
          icon={<HiOutlineIdentification />}
          label='Documento'
          value={member?.dni || ''}
          variant={ member?.dni ? 'filled' : 'default' }
          onChange={({ target: { value: dni } }) => setMember({ ...member, dni })}
        />

        <Space />

        <TextInput
          disabled={disabled}
          icon={<MdOutlineEmail />}
          label='Email'
          value={member?.email || ''}
          variant={ member?.email ? 'filled' : 'default' }
          onChange={({ target: { value: email } }) => setMember({ ...member, email })}
        />

        <Space />

        <TextInput
          disabled={disabled}
          icon={<RiPhoneFill />}
          label='Celular'
          value={member?.phone || ''}
          variant={ member?.phone ? 'filled' : 'default' }
          onChange={({ target: { value: phone } }) => setMember({ ...member, phone })}
        />

        <Space />

        <DatePicker
          withSelect
          clearable={false}
          disabled={disabled}
          icon={<RiCake2Fill />}
          label='Nacimiento'
          locale='es'
          maxDate={new Date}
          value={member?.birthday}
          variant={ member?.birthday ? 'filled' : 'default' }
          yearsRange={{ from: 1900, to: 2021 }}
          onChange={(birthday) => {
            if (birthday) {
              setMember({ ...member, birthday });
            } else {
              setMember({ ...member, birthday: new Date });
            }
          }}
        />

        <Space />

        <Select
          data={[
            { value: 'Plan Elite Mensual', label: 'Plan Elite Mensual' },
            { value: 'Plan Basico Mensual', label: 'Plan Basico Mensual' },
          ]}
          disabled={disabled}
          label='Plan Activo'
          value={member?.activePlan}
          variant={ member?.activePlan ? 'filled' : 'default' }
          onChange={(planActivo) => {
            if (planActivo) {
              const activePlan = planActivo as TActivePlan;

              setMember({ ...member, activePlan });
            } else {
              const activePlan = 'Plan Basico Mensual' as TActivePlan;

              setMember({ ...member, activePlan });
            }
          }}
        />

        <Space />

        <DatePicker
          withSelect
          clearable={false}
          disabled={disabled}
          label='Alta'
          locale='es'
          maxDate={new Date}
          value={member?.registerDate}
          variant={ member?.registerDate ? 'filled' : 'default' }
          yearsRange={{ from: 1900, to: 2021 }}
          onChange={(registerDate) => {
            if (registerDate) {
              setMember({ ...member, registerDate });
            } else {
              setMember({ ...member, registerDate: new Date });
            }
          }}
        />

      </Box>

      <Affix position={{ bottom: 50, right: 150 }}>
        <Button
          color={!disabled ? 'green' : 'blue'}
          leftIcon={
            !disabled
              ? <FaSave size={20} />
              : <MdEdit size={20} />
          }
          mr='md'
          onClick={() => {
            setDisabled(!disabled);
            if(!disabled) {
              updateMember(member);
            }
          }}
        >
          { disabled ? 'Editar' : 'Guardar'}
        </Button>
        {
          !disabled &&
          <Button
            color='red'
            leftIcon={<MdOutlineCancel size={20} />}
            onClick={() => {
              if (!disabled) {
                setMember(memberDetail || {} as IMember);
                setDisabled(!disabled);
              }
            }}
          >
            Cancelar
          </Button>
        }
      </Affix>
    </Center>
  );
};
