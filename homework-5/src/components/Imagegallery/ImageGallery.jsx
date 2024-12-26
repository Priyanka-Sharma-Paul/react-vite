import styles from "./ImageGallery.module.css";
import images from "../../data/images";
import { useState } from 'react';

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <p className={styles.galleryPara}>Click on an image!</p>
            <div className={styles.imageContainer}>
                {
                    images.map((url, index) => {
                        return (
                            <div key={index} className={styles.imageCard} onClick={() => handleClick(url)}>
                                <img src={url} />
                            </div>
                        )
                    })
                }

            </div>

            {selectedImage && (
                <div className={styles.selectedImage}>
                    <h2 className={styles.selectedHeading}>Selected Image</h2>
                    <img src={selectedImage} alt="Selected" className={styles.selectedImg} />
                </div>
            )}

        </div>

    )
};
export default ImageGallery;