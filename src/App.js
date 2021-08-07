import React, { Component } from 'react';
import './App.css';
import Intro from './container/Intro/Intro';
import Login from './container/Login/login';
import Signup from './container/Login/SignUp/signup';
import Mainpage from './container/MainPage/mainpage';
import Choice from './container/Login/SignUp/choices';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  state = {
    token: '',
    userId: '',
    user: null,
    logged: false
  }
  // userdetails = async () => {
  //   let userdata = JSON.parse(localStorage.getItem('userData'));
  //   await this.setState({ token: userdata.token, userId: userdata.userId })
  // }
  async componentDidMount() {
    let userdata = JSON.parse(localStorage.getItem('userData'));
    if (userdata) {
      let loggedIn = !!(!!userdata.token && !!userdata.user._id);
      await this.setState({ token: userdata.token, userId: userdata.user._id, user: userdata.user, logged: loggedIn })
    }
  }
  userlogin = async () => {
    let userdata = JSON.parse(localStorage.getItem('userData'));
    if (userdata) {
      let loggedIn = !!(!!userdata.token && !!userdata.user._id);
      await this.setState({ token: userdata.token, userId: userdata.user._id, user: userdata.user, logged: loggedIn })
    }
  }
  render() {
    let route;
    // console.log(this.userdata, this.state.logged);
    if (this.state.logged) {
      route = (<Switch>
        <Route path="/main"><Mainpage token={this.state.token} user={this.state.userId} userdata={this.state.user} /></Route>
        <Redirect to="/main" />
      </Switch>
      )
    } else {
      route = (<Switch>
        <Route path="/sn" exact component={Signup} />
        <Route path="/sn/choice" exact component={Choice} />
        <Route path="/ln" exact>
          <Login submitted={this.userlogin} />
        </Route>
        <Route path="/" exact component={Intro} />
        <Redirect to="/" />
      </Switch>)
    }
    return (
      <div className="App">
        {route}
      </div>
    );
  }
}

export default App;