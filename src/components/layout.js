import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT,  } from '../events';
import LoginForm from './login_form';
const socketUrl = "http://192.168.42.75:3231"

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user: null,
    };
  }
  componentWillMount() {
    this.initSocket()
  }
  /* Connect to and initialize the socket */
  initSocket = () => {
    const socket = io(socketUrl)
    socket.on('connect', () => {
      console.log('Connected');
    });
    this.setState({ socket })
  }
  /* Sets the user property in state
   * @param user {id: number, name: string}
   */
  setUser = (user) => {
    const { socket } = this.state;
    socket.emmit(USER_CONNECTED, user);
    this.setState({ user });
  }
  /* Sets user prop to null */
  logout = () => {
    const { socket } = this.state;
    socket.emmit(LOGOUT);

    this.setState({ user: null });
  }
  render() {
    const { title } = this.props;
    const { socket } = this.state;
    return (
      <div className="container">
        <LoginForm socket={socket} setUser={this.setUser} />
      </div>
    );
  }
}

export default Layout;
