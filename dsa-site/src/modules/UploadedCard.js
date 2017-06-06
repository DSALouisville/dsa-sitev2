import React from 'react';

class UploadedCard extends React.Component {
  render() {
    return (
      <div className="d-flex">
        <span>{`${this.props.file.url}`}</span>
        <img src={this.props.file.url} />
      </div>
    );
  }
}

export default UploadedCard;
