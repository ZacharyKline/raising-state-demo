import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Block1 from './components/Block1';
import Block2 from './components/Block2';
import Block3 from './components/Block3';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  clickerButton = (event) => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    
    return (
			<div className="App">
				<h1>Raising State</h1>
				<button onClick={this.clickerButton}>Click Me</button>
				<h3>{this.state.count}</h3>
				<Block1 count={this.state.count} />
				<Block2 count={this.state.count} />
				<Block3 count={this.state.count} />
			</div>
		);
}
}

export default App;
