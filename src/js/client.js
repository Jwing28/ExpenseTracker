import React from 'react';
import ReactDOM from 'react-dom';

var Main = React.createClass({
  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  onCowClick: function(evt) {
    this.setState({
      clicks: this.state.clicks + 1
    });
  },

  render: function() {
    return (
      <div>
        <div>Clicks: {this.state.clicks}</div>
        <button onClick={this.onCowClick}>Click ME</button>
      </div>
    );
  }
});


const app = document.getElementById('app');
ReactDOM.render(<Main />, app);

