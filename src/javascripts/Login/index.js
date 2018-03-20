import React, { PureComponent } from 'react';

class Login extends PureComponent {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    const { isLoggedIn } = this.state;
    console.log(isLoggedIn);

    return (
      <div className="c-keyvisual">
        <form className='l-form'>
          <span className="user"></span>
            <input
              className="c-input"
              type="text"
              id="user"
              placeholder="Username"
            />
          <span className="lock"></span>
            <input
              className="c-input"
              type="password"
              id="pass"
              placeholder="Password"
            />
            <button className="l-btn" onClick={this.handleLogin}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
