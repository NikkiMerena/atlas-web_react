import React from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({

    logo: {
        height: '12rem',
        pointerEvents: 'none',
    },

    headerMain: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    headerTitle: {
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        fontSize: '3.5rem',
        color: '#00003C',
        fontWeight: '800',
    },
    });

    class Header extends React.Component {
        static contextType = AppContext;

        render() {
            const { user } = this.context;

            return (
            <header className={css(styles.headerMain)}>
                <img src={logo} className={css(styles.logo)} alt="logo" />
                <h1 className={css(styles.headerTitle)}>
                School dashboard
            </h1>
                {user.isLoggedIn && (
                <div id="logoutSection">
                Welcome {user.email} (<a href="#" onClick={this.context.logOut}>logout</a>)
                </div>
            )}
            </header>
            );
        }
    }

    export default Header;
