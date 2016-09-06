import React from 'react';

class App extends React.Component {

  render() {
    let txt = this.props.txt;
    return (
      <div>
        {txt}
      </div>
    )
  }


}

export default App;

