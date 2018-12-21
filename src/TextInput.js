import React, { Component } from 'react';
import "./TextInput.css"

class TextInput extends Component {

    render() {
        const { setTopText, setBottomText, topText, bottomText } = this.props;
        return (
            <div className="textInput">
                <h2>Add Text:</h2>
                <div className="inputRow"> 
                    <input
                        type="text"
                        value={topText}
                        onChange={setTopText}
                        placeholder="Enter Top Text Here"
                    />

                    <input
                        type="text"
                        value={bottomText}
                        onChange={setBottomText}
                        placeholder="Enter Bottom Text Here"
                    />
                </div>
            </div>
        );
    }
}

export default TextInput;