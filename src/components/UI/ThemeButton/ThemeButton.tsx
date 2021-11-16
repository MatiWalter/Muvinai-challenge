import {
  MediaQuery,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';

import useStyles from './ThemeButton.styles';

export const ThemeButton = () => {

  const { white } = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const { classes: { button, darkButton, lightButton } } = useStyles();

  return (
    <UnstyledButton
      className={button}
      onClick={() => toggleColorScheme()}
    >
      {dark ? (
        <>
          <MediaQuery largerThan='xs' styles={{ display: 'none' }}>
            <Text mr='xs'>Light theme</Text>
          </MediaQuery>
          <div className={darkButton}>
            <BsSun size={20} />
          </div>

        </>
      ) : (
        <>
          <MediaQuery largerThan='xs' styles={{ display: 'none' }}>
            <Text mr='xs'>Dark theme</Text>
          </MediaQuery>
          <div className={lightButton}>
            <BsMoon color={white} size={20} />
          </div>
        </>
      )}
    </UnstyledButton>
  );
};
