// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';

// function rand() {
//   return Math.round(Math.random() *20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const styles = theme => ({
//   paper: {
//     position: 'absolute',
//     width: theme.spacing.unit * 50,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing.unit * 4,
//     outline: 'none',
//   },
// });

// class AddAdmin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       open: false
//     };

//     handleOpen = () => {
//       this.setState({ open: true });
//     };

//     handleClose = () => {
//       this.setState({ open: false });
//     };
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

// export default AddAdmin;