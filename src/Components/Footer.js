import React from 'react'
// const Footer = () => {
//     const today = new Date();
//     return (
//         <footer>
//             <p>Copywrigt &copy; {today.getFullYear()}</p>
//         </footer>
//     )
// }

const Footer = () => {
  const today = new Date();
  return (
    <footer style={styles.footer}>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

const styles = {
  footer: {
    width: '100%',
    padding: '10px 15px',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    // backgroundColor: '#04001d',
  },
};


export default Footer
