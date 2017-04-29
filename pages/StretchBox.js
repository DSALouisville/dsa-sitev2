import React from 'react';

class StretchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {
        width: -1,
        height: -1,
      },
    };
  }

  render() {
    const { width, height } = this.state.dimensions;
    return (
      <Measure
        onMeasure={(dimensions) => {
          this.setState({dimensions});
        }}
      >
        <div>
          <style>{`
            display-style: block;
            `}
          </style>
          <span className={this.props.divClass} >
            {this.props.text}
          </span>
        </div>
      </Measure>
    )
  }
};

StretchBox.propTypes = {
  divClass: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default StretchBox;

