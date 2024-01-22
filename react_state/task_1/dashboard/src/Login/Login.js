import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

    loginBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    loginParagraph: {
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        fontWeight: '400',
        fontSize: '1.3rem',
        margin: '4rem 2rem 1rem 4rem',
    },

    form: {
        display: 'flex',
        flexDirection: 'row', // Default to row layout
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        fontWeight: '400',
        fontSize: '1.3rem',
        margin: '1rem 2rem 1rem 4rem',

        '@media (max-width: 900px)': {
            flexDirection: 'column', // Change to column layout for smaller screens
            alignItems: 'flex-start',
        },
    },

    label: {
        paddingRight: '.5rem',
        '@media (max-width: 900px)': {
            paddingBottom: '.5rem', // Add bottom padding for labels on smaller screens
        }
    },

    input: {
        marginRight: '1rem',
        border: '1px solid #00003C',
        borderRadius: '8px',
        boxShadow: 'rgba(213, 217, 217, .5) 0 2px 5px 0',

        '@media (max-width: 900px)': {
            marginRight: '0', // Remove right margin on smaller screens
            marginBottom: '1rem', // Add bottom margin for inputs on smaller screens
        },
    },

    button: {
        backgroundColor: '#1ED2AF',
        border: '1px solid #00003C',
        borderRadius: '8px',
        padding: '.4rem',
        boxShadow: 'rgba(213, 217, 217, .5) 0 2px 5px 0',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
        ':focus': {
            borderColor: '#1ED2AF',
            outline: '2px solid #1ED2AF',
        },
        '@media (max-width: 900px)': {
            alignSelf: 'flex-start', // Align button  to start on smaller screens
        },
    },
});

function Login() {
    return (
    <div className={css(styles.loginBody)}>
        <p className={css(styles.loginParagraph)}>
            Login to access the full dashboard
        </p>
        <form className={css(styles.form)}>
            <label className={css(styles.label)} htmlFor="email">Email:</label>
            <input className={css(styles.input)} type="text" id="email" name="email"></input>
            <label className={css(styles.label)} htmlFor="password">Password:</label>
            <input className={css(styles.input)} type="password" id="password" name="password"></input>
            <button className={css(styles.button)} type="submit">OK</button>
        </form>
    </div>
    );
}

export default Login;
