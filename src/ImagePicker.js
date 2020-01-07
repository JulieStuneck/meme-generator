import React, { Component } from 'react';
import './ImagePicker.css';
// import Images from '../Images';

class ImagePicker extends Component {
    render() {
        const { selectImage } = this.props;
        //const {showSelected} = this.props;

        let className = '';

       /* if (this.props.selectImage) {
            className = 'selectedPic';
        } else {
            className = '';
        }*/

        this.props.selectImage ? className = 'selectedPic' : className = '';
        !this.props.selectImage ? className = 'selectedPic' : className = '';
        
        return (
            <div className="imagePicker">
                <h2>Select a picture:</h2>
                <div className="imageChoices">
                    <img src="Images/Bird.jpg" alt="bird" className={className} onClick={selectImage} />
                    <img src="Images/Cat.jpg" alt="cat" className={className} onClick={selectImage} />
                    <img src="Images/Dog.jpg" alt="dog" className={className} onClick={selectImage} />
                    <img src="Images/Girl.jpg" alt="girl" className={className} onClick={selectImage} />
                </div>
            </div>
        );
    }
}

export default ImagePicker;