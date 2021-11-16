import { createStyles } from '@mantine/styles';

export default createStyles(

  () => {

    return {
      box: {
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
      },
    };
  }
);
