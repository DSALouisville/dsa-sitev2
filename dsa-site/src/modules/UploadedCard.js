import React from 'react';
import '../UploadedCard.css';

class UploadedCard extends React.Component {
  render() {
    return (
      <div className="d-flex uploaded-card">
        <span className="font-italic p-2">{`${this.props.file.key}`}</span>
        <img className="p-2" src={this.props.file.url} />
      </div>
    );
  }
}

export default UploadedCard;
