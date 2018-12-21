import React, { Component } from 'react';


class TextInput extends Component {

    render() {
        const { setTopText, setBottomText, topText, bottomText } = this.props;
        return (
            <div className="textInput">
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
        );
    }
}

export default TextInput;