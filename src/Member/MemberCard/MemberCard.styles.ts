import { createStyles } from '@mantine/styles';

export default createStyles(

  (
    theme
  ) => {

    return {
      container: {
        alignItems: 'center',
        display: 'flex',
        padding: 15,
        height: '300px',
      },
      boxColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      boxRow: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
      },
      anchor: {
        alignItems: 'center',
        display: 'flex',
      },
      group: {
        alignItems: 'start',
        flexDirection: 'column',
        marginLeft: theme.spacing.md,
        width: '250px'
      }
    };
  }
);
