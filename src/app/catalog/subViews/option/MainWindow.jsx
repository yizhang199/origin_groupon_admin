import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import OptionList from "./OptionList";
import { history } from "../../../../_helpers";
import CreateOption from "./CreateOption";
import UpdateOption from "./UpdateOption";

class OptionManageMainWindow extends React.Component {
  render() {
    return (
      <div className="component-option-manage-main-window">
        <OptionList />
        <Router history={history}>
          <Switch>
            <Route path="/options/create" component={CreateOption} />
            <Route path="/options/update" component={UpdateOption} />
            <Route exact path="/options" component={CreateOption} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default OptionManageMainWindow;
