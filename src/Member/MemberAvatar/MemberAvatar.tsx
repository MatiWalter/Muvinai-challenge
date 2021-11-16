import * as React from 'react';
import { Avatar, Box, Input } from '@mantine/core';
import { BsCameraFill } from 'react-icons/bs';

import useStyles from './MemberAvatar.styles';

interface MemberAvatarProps {
  path?: string;
  alt?: string;
}

export const MemberAvatar = ({ path, alt }: MemberAvatarProps) => {

  const [avatar, setAvatar] = React.useState<string>(path || '');

  React.useEffect(() => {
    setAvatar(path || '');
  }, [path]);

  React.useEffect(() => {
    setAvatar(avatar);
  }, [avatar]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setAvatar(URL.createObjectURL(event.currentTarget.files[0]));
    }
  };

  return (
    <Box ml='md' sx={{ height: '200px' }}>
      <label htmlFor="avatar-file" style={{ display: 'inline-block', height: 1 }}>
        <Input
          accept='image/jpeg, image/png'
          id="avatar-file"
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

  const { classes: { box } }= useStyles();

  return (
    <Box className={box}>
      <BsCameraFill size={35} />
      Subir foto
    </Box>
  );
};
