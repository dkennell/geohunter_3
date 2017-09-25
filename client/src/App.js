import React from "react";
import { connect } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import UserList from "./components/user/UserList";
import UserDetail from "./components/user/UserDetail";
import CacheDetail from "./components/cache/CacheDetail";
import CacheList from "./components/cache/CacheList";
import Home from "./components/main/Home";
import LoggedIn from "./components/main/LoggedIn";
import Signup from "./components/main/forms/Signup";
import CreateCache from "./components/main/forms/CreateCache";
import MyNav from "./components/main/MyNav";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <LoggedIn />
          <MyNav />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/users" render={() => <UserList />} />
              <Route path="/users/:id" component={UserDetail} />
              <Route
                exact
                path="/caches"
                render={() => <CacheList caches={this.props.caches} />}
              />
              <Route exact path="/caches/new" component={CreateCache} />
              <Route path="/caches/:id" component={CacheDetail} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    caches: state.caches
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: () => {
      console.log("in apps dispatch");
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
