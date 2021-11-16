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
        borderRadius: 10,
        padding: 25,
        maxWidth: '700px',
        height: '500px',
        marginTop: theme.spacing.xl,
      },
    };
  }
);
