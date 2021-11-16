import { createStyles } from '@mantine/styles';

export default createStyles(

  (
    theme
  ) => {

    const dark = theme.colorScheme === 'dark';

    return {
      header: {
        alignItems: 'center',
        backgroundColor: dark ? theme.colors.dark[7] : theme.white,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
      },
      box: {
        alignItems: 'center',
        display: 'flex',
        height: '100%'
      }
    };
  }
);
