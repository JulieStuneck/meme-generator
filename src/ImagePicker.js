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
                    <img src="Images/Bird.jpg" alt="bird" className="selectedPic" onClick={selectImage} />
                    <img src="Images/Cat.jpg" alt="cat" className="selectedPic" onClick={selectImage} />
                    <img src="Images/Dog.jpg" alt="dog" className="selectedPic" onClick={selectImage} />
                    <img src="Images/Girl.jpg" alt="girl" className="selectedPic" onClick={selectImage} />
                </div>
            </div>
        );
    }
}

export default ImagePicker;