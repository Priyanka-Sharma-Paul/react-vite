import styles from "./ImageGallery.module.css";
import images from "../../data/images";

const ImageGallery = () => {
    return (
        <div>
            
            <div className={styles.imageContainer}>
              {
                images.map((url, index) => {
                    return (
                        <div key={index} className={styles.imageCard}>
                            <img src={url}/>
                        </div>
                    )
                })
              }  

            </div>

        </div>

    )
};
export default ImageGallery;