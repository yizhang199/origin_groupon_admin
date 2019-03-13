import React from "react";

import StoreList from "./StoreList";
import CreateStore from "./CreateStore";
import UpdateStore from "./UpdateStore";

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mode: "none" };
  }
  setMode = value => {
    this.setState({ mode: value });
  };
  renderForm = () => {
    switch (this.state.mode) {
      case "none":
        return null;
      case "create":
        return <CreateStore />;
      case "update":
        return <UpdateStore />;
    }
  };
  render() {
    return (
      <div className="store">
        <StoreList setMode={this.setMode} />
        {this.renderForm()}
      </div>
    );
  }
}

export default Store;