import React from 'react';
import ReactDOM from 'react-dom';

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: "",
    }
  }
  scaler(width) {
    if (window.innerWidth < 700){
      return "scale-2";
    }
    return "";
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    return (
      <div>
        <div className={this.state.scale}>
          <div className="louisville">
            <img src="/static/logo.png"></img><br/>
            <span className="cityname">
              <span className="louis">
                LOUIS<br/>
              </span>
              <span className="ville">
                VILLE<br/>
              </span>
            </span>
          </div>
          <br/>
          <div className="dsa">
            DSA
          </div>
          <div className="words">
            <span className="dem">
              Democratic<br/>
            </span>
            <span className="soc">
              Socialists<br/>
            </span>
            <span className="amer">
              of America<br/>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Logo;
