# react-emoji-textarea

![react-emoji-textarea version](https://img.shields.io/npm/v/react-emoji-textarea)
![react-emoji-textarea license](https://img.shields.io/npm/l/react-emoji-textarea)

Textarea with emoji prediction/selection.

### Installation

```
npm i --save react-emoji-textarea
```

### Example

![react-emoji-textarea](https://media0.giphy.com/media/gLWVAGwIBpfg4sN99Y/giphy.gif)

### How to use

```javascript
import React, { useEffect, useState } from 'react';
import EmojiTextarea                  from 'react-emoji-textarea';

function App() {
    
    const [submit, setSubmit] = useState(false);
    const [text,   setText]   = useState('');

    return (
        <div className = 'App'>
            <EmojiTextarea
                setText   = {setText}
                setSubmit = {setSubmit}
            />
        </div>
    );
    
}

export default App;
```

## Author

[Erik Martín Jordán](https://erikmartinjordan.com)

## License

This component is open source and available under the MIT License.