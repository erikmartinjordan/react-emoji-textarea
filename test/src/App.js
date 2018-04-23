import React, { Component } from 'react';
import EmojiTextarea from 'react-emoji-textarea';

class App extends Component {
  constructor(){
      super();
      this.state = {
          submitted: false,
          text: ""
      }
  }
  
  handleChange = (text) => this.setState({ text: text});
  handleSubmit = ()     => this.setState({ submitted: true});
    
  render() {   
            
    return (
      <div className = "App">
            <EmojiTextarea
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
            />
      </div>
    );
  }
}

export default App;
