import * as React from 'react';
import { Avatar, Box, Input } from '@mantine/core';
import { BsCameraFill } from 'react-icons/bs';

interface MemberAvatarProps {
  path?: string;
  alt?: string;
}

export const MemberAvatar = ({ path, alt }: MemberAvatarProps) => {

  const [avatar, setAvatar] = React.useState<string>(path || '');

  React.useCallback(() => {
    setAvatar(avatar);
  }, [avatar]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setAvatar(URL.createObjectURL(event.currentTarget.files[0]));
    }
  };

  return (
    <Box>
      <label htmlFor="icon-button-file" style={{ width: '0', height: '0' }}>
        <Input
          accept='image/jpeg, image/png'
          id="icon-button-file"
          sx={{
            display: 'none',
            width: '200px',
          }}
          type='file'
          onChange={handleImageChange}
        />
        <Avatar
          alt={alt}
          radius={100}
          size={200}
          src={avatar}
        />
        <Box
          sx={{
            borderRadius: '100%',
            color: '#FFF',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '200px',
            opacity: 0,
            position: 'absolute',
            top: '15px',
            transition: '.3s ease',
            width: '200px',
            ':hover': {
              backgroundColor: 'rgb(22, 28, 36)',
              cursor: 'pointer',
              opacity: '.72'
            }
          }}
        >
          <BsCameraFill size={35} />
          Update photo
        </Box>
      </label>
    </Box>
  );
};
