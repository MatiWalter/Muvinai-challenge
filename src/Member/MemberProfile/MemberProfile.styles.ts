import { createStyles } from '@mantine/styles';

export default createStyles(

  (
    theme
  ) => {

    const dark = theme.colorScheme === 'dark';

    return {
      container: {
        backgroundColor: dark ? theme.colors.dark[7] : theme.white,
        boxShadow: dark ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        display: 'flex',
        borderRadius: 10,
        flexDirection: 'row',
        height: '700px',
        justifyContent: 'space-evenly',
        maxWidth: '85vw',
        marginTop: theme.spacing.xl,
        padding: 15,
      },
    };
  }
);
