import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

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

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            enableSubmit: false,
        };
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        this.setState({ isLoggedIn: true });
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value }, this.validateForm);
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value }, this.validateForm);
    }

    validateForm = () => {
        const { email, password } = this.state;
        const enableSubmit = email.length > 0 && password.length > 0;
        this.setState({ enableSubmit: enableSubmit });
    };

    render() {
        const { email, password, enableSubmit } = this.state;
        return (
            <>
                <BodySectionWithMarginBottom title='Log in to continue'>
                    <div className={`Login ${css(styles.Login)}`}>
                        <p>Login to access the full dashboard</p>
                        <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
                            <div className={`label ${css(styles.label)}`}>
                                <label htmlFor='email' >Email: </label>
                                <input
                                    className={css(styles.input)}
                                    type='email'
                                    name='email'
                                    id='email'
                                    autoComplete='email'
                                    value={email}
                                    onChange={this.handleEmailChange}
                                />
                                </div>
                            <div className={`label ${css(styles.label)}`}>
                                <label htmlFor='password' >Password: </label>
                                <input
                                    className={css(styles.input)}
                                    type='password'
                                    name='password'
                                    id='password'
                                    autoComplete='current-password'
                                    value={password}
                                    onChange={this.handlePasswordChange}
                                />
                            </div>
                            <input
                                type='submit'
                                value='OK'
                                className={`button ${css(styles.button)}`}
                                disabled={!enableSubmit}
                            />
                        </form>
                    </div>
                </BodySectionWithMarginBottom>
            </>
        );
    }
}

export default Login;
