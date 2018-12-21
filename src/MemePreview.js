import React, { Component } from 'react';
import "./MemePreview.css";

class MemePreview extends Component {
    render() {
        const { image, topText, bottomText } = this.props;
        return (
            <div className="memePreview">
                <img src={image} alt="" />
                <div className="textTop">
                    {topText}
                </div>
                <div className="textBottom">
                    {bottomText}
                </div>
            </div>
        );
    }
}

export default MemePreview;