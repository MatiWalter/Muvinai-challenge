import {
  MediaQuery,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';

export const ThemeButton = () => {

  const { colors, white } = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <UnstyledButton
      sx={{
        alignItems: 'center',
        backgroundColor: dark ? colors.dark[9] : colors.gray[1],
        borderRadius: 50,
        display: 'flex',
        height: 40,
        marginRight: 15,
        padding: 15,
      }}
      onClick={() => toggleColorScheme()}
    >
      {dark ? (
        <>
          <MediaQuery largerThan='xs' styles={{ display: 'none' }}>
            <Text mr='xs'>Light theme</Text>
          </MediaQuery>
          <div
            style={{
              backgroundColor: colors.yellow[5],
              borderRadius: 100,
              height: 20,
              padding: 5,
              width: 20,
            }}
          >
            <BsSun size={20} />
          </div>

        </>
      ) : (
        <>
          <MediaQuery largerThan='xs' styles={{ display: 'none' }}>
            <Text mr='xs'>Dark theme</Text>
          </MediaQuery>
          <div
            style={{
              backgroundColor: colors.blue[8],
              borderRadius: 100,
              height: 20,
              padding: 5,
              width: 20,
            }}
          >
            <BsMoon color={white} size={20} />
          </div>
        </>
      )}
    </UnstyledButton>
  );
};
