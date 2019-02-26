import React from "react";
import { connect } from "react-redux";

class Payment extends React.Component {
  render() {
    return (
      <div className="component-detail-view-table">
        {JSON.stringify(this.props.reportDetails[0])}
      </div>
    );
  }
}

const mapStateToProps = ({ reportDetails }) => {
  return { reportDetails };
};

export default connect(mapStateToProps)(Payment);
