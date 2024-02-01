import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { AppContext, defaultUser } from './AppContext';

const styles = StyleSheet.create({

  header: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    borderBottom: '5px solid #00003C',
  },

  body: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    padding: '1rem',
    minHeight: 'calc(100vh - 190px)',
  },

  footer: {
    borderTop: '5px solid #00003C',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut,
      logIn: this.logIn,
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({ user: defaultUser });
  };

  // Function to handle displayDrawer state
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

  // componentDidMount() {
  // document.addEventListener('keydown', this.handleKeydown);
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  // componentWillUnmount() {
  //  document.removeEventListener('keydown', this.handleKeydown);
  // }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.state.logOut();
    }
  }

  render() {
    const { displayDrawer, user, } = this.state;
    return (
      <AppContext.Provider value={this.state}>
        <div className={`App-header ${css(styles.header)}`} data-testid="app-header">
          <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer} />
          <Header />
          </div>
        <div className={`App-body ${css(styles.body)}`}>
          {user.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <BodySection title='News from the School'>
            <p>Nikki got her Dream Job!</p>
          </BodySection>
        </div>
        <Footer className={`App-footer ${css(styles.footer)}`} />
        </AppContext.Provider>
    );
  }
}

// App.propTypes = {

// };

// App.defaultProps = {

// };

export default App;
