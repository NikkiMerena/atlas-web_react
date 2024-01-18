import React from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';

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

function Header() {
    return (
            <header className="App-header">
                <img src={logo} className="atlas_logo" alt="logo" />
                <h1>School dashboard</h1>
            </header>
    );
}

export default Header;
