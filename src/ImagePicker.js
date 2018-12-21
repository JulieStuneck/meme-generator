import React, { Component } from 'react';
import './ImagePicker.css';
// import Images from '../Images';

class ImagePicker extends Component {
    render() {
        const { selectImage } = this.props;
        return (
            <div className="imagePicker">
                <h2>Select a picture:</h2>
                <div className="imageChoices">
                    <img src="/Images/Bird.jpeg" alt="bird" onClick={selectImage} />
                    <img src="Images/Cat.jpg" alt="cat" onClick={selectImage} />
                    <img src="/Images/Dog.jpeg" alt="dog" onClick={selectImage} />
                    <img src="/Images/Girl.jpg" alt="girl" onClick={selectImage} />
                </div>
            </div>
        );
    }
}

export default ImagePicker;