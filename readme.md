# React Emoji Textarea

Textarea with emoji prediction/selection.

### Installation

What things you need to install the software and how to install them

```
npm i react-emoji-textarea --save
```

### Example

![Alt Text](https://media.giphy.com/media/l7fCg0pPiAPTrH3GIf/giphy.gif)

### How to use

````
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
```