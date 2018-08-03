import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Indigo from './indigo';


class Blue extends React.Component {
  render() {
    return (
      <div>
        <h2 className="blue"></h2>
        <NavLink to='/blue/indigo'>Add Indigo</NavLink>
        <NavLink exact to='/blue'>Blue Only</NavLink>

        <Route path='/blue' component={this.prototype}/>
        <Route path='/blue/indigo' component={Indigo}/>
      </div>
    );
  }
}

export default Blue;
