import React, { useState, useEffect } from 'react';
import Smiley                         from './icon-emotion-happy';
import Emojis                         from './Emojis';
import './EmojiTextarea.css';

const EmojiTextarea = ({setText, setSubmit}) => {
    
    const [comment, setComment]       = useState('');
    const [emojis, setEmojis]         = useState([]);
    const [showEmojis, setShowEmojis] = useState(true);

    const handleText = (e) => {
        
        let text     = e.target.value;
        let lastChar = text[text.length - 1];
        
        if(lastChar === ' '){
            
            let array    = text.split(' ');
            let lastWord = array[array.length - 2].toLowerCase();         
            let emojis   = Emojis.filter(emoji => emoji.tags_ES.indexOf(lastWord) !== -1 || emoji.tags_EN.indexOf(lastWord) !== -1).slice(0, 50);  
            
            setEmojis(emojis);
            
        }
        
        setComment(text);
        setText(text);  
        
    }
  
    const handleEmoji = (emoji) => {
        
        let text  = comment + emoji;
        
        setComment(text);
        setText(text);  
        
    }
    
    return (
        <div className = 'Emoji-Textarea'>
            <textarea onChange = {handleText} value = {comment}></textarea>
            <button className = 'Emoji-Submit' onClick = {() => setSubmit(true)}>Submit</button>
            <div className = 'Emoji'>
                { showEmojis 
                ? <div className = 'Emoji-Grid'> 
                    {emojis.map((value, key) => <span key = {key} onClick = {() => handleEmoji(value.symbol)}>{value.symbol}</span>)} 
                  </div> 
                : null
                }
                <div className = {showEmojis ? 'Emoji-On' : 'Emoji-Off'} onClick = {() => setShowEmojis(!showEmojis)}>
                    <Smiley/>
                </div>
            </div>
        </div>
    );
    
}

export default EmojiTextarea;