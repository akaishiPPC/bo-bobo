import React from "react";
import {　BrowserRouter as Router,　Switch,　Route} from "react-router-dom";
import Prepare from "./components/Prepare";
// import Home from "./components/Home";
// import Congrats from "./components/Congrats";
// import Again from "./components/Again";
// import Nomatch from "./components/Nomatch";
import './App.scss';

function App(props) {

  return (
    <>
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/congrats">
              <Congrats titlename="正解！" />
            </Route>
            <Route exact path="/again" component={Again}>
              <Again titlename="残念！" />
            </Route> */}
            <Route exact path="/">
              <Prepare titlename="準備中" />
            </Route>
            {/* <Route path="*">
              <Nomatch titlename="404" />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
