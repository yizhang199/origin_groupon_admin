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
        return <CreateStore setMode={this.setMode} />;
      case "update":
        return <UpdateStore setMode={this.setMode} />;
      default:
        return null;
    }
  };
  render() {
    return (
      <div className="store">
        <StoreList
          setMode={this.setMode}
          style={
            this.state.mode === "none" ? { width: `100%` } : { width: `50%` }
          }
        />
        {this.renderForm()}
      </div>
    );
  }
}

export default Store;
