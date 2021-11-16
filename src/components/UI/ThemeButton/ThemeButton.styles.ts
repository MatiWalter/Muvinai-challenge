import { createStyles } from '@mantine/styles';

export default createStyles(

  (
    theme
  ) => {

    const dark = theme.colorScheme === 'dark';

    return {
      button: {
        alignItems: 'center',
        backgroundColor: dark ? theme.colors.dark[9] : theme.colors.gray[1],
        borderRadius: 50,
        display: 'flex',
        height: 40,
        marginRight: 15,
        padding: 15,
      },
      darkButton: {
        backgroundColor: theme.colors.yellow[5],
        borderRadius: 100,
        height: 20,
        padding: 5,
        width: 20,
      },
      lightButton: {
        backgroundColor: theme.colors.blue[8],
        borderRadius: 100,
        height: 20,
        padding: 5,
        width: 20,
      },
    };
  }
);
