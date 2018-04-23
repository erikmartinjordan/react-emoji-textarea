import React, { Component } from 'react';
import Smiley from './icon-emotion-happy';
import Emojis from './Emojis';
import './EmojiTextarea.css';

class EmojiTextarea extends Component {
    
  constructor(){
      super();
      this.state = {
          comment: "",
          emojis: "",
          showEmojis: true
      }
  }
  handleText = (e) => {
     
      let text = e.target.value;
      let arr = text.split(" ");
      let last__word = arr[arr.length - 1].toLowerCase();
      let emojis__texting = Emojis.filter( emoji => ( emoji.tags_ES.indexOf(last__word) !== -1 || emoji.tags_EN.indexOf(last__word) !== -1 ));
      let emojis = emojis__texting.map( (value, key) => <span key = {key} id = {value.symbol} onClick = {this.handleEmoji}>{value.symbol}</span> );  
      
      this.setState({ 
          emojis: emojis,
          comment: text 
      }); 
      this.props.handleChange(text);      
  }
  handleEmoji = (e) => {
      
      let text = this.state.comment + e.target.id;
      this.setState({ comment: text });
      this.props.handleChange(text);
      
  }
  showEmoji = ()  => this.setState({ showEmojis: !this.state.showEmojis });
    
  render() {                      
       
    return (
      <div className="Emoji-Textarea">
            <textarea onChange = {this.handleText} value = {this.state.comment}></textarea>
            <button className="Emoji-Submit" onClick = {this.props.handleSubmit}>Submit</button>
            <div className = "Emoji">
                {this.state.showEmojis ? <div className = "Emoji-Grid"> {this.state.emojis} </div> : null}
                <div onClick = {this.showEmoji}>
                    <Smiley/>
                </div>
            </div>
      </div>
    );
  }
}

export default EmojiTextarea;
