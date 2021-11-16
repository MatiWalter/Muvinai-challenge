import { createStyles } from '@mantine/styles';

export default createStyles(

  (
    theme
  ) => {

    const dark = theme.colorScheme === 'dark';

    return {
      container: {
        alignItems: 'center',
        backgroundColor: dark ? theme.colors.dark[7] : theme.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        boxShadow: dark ? 'none' : 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        display: 'flex',
        flexDirection: 'row',
        height: '700px',
        justifyContent: 'space-around',
        marginTop: theme.spacing.xl,
        maxWidth: '60vw',
        padding: 15,
      },
      center: {
        height: 650,
        width: 600,
      }
    };
  }
);
