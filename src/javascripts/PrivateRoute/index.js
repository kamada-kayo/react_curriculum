import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

class PrivateRoute extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn, children } = this.props;

    return (
      <div>
        {isLoggedIn ?
          children
        :
          <Redirect to="/login" />
        }
      </div>
    );
    console.log(children);
  }
}

export default PrivateRoute;
