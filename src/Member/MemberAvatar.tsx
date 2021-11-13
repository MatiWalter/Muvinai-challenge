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
    <Box sx={{ height: '200px' }}>
      <label htmlFor="icon-button-file" style={{ display: 'inline-block', height: 1 }}>
        <Input
          accept='image/jpeg, image/png'
          id="icon-button-file"
          sx={{
            display: 'none',
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
        <CustomOverlay />
      </label>
    </Box>
  );
};

const CustomOverlay = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        borderRadius: '100%',
        color: '#FFF',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '200px',
        justifyContent: 'center',
        opacity: 0,
        position: 'relative',
        top: '-200px',
        transition: '.3s ease',
        width: '200px',
        ':hover': {
          backgroundColor: 'rgb(22, 28, 36)',
          cursor: 'pointer',
          opacity: '.72'
        },
      }}
    >
      <BsCameraFill size={35} />
      Update photo
    </Box>
  );
};
