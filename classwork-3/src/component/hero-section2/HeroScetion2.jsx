 import Styles from "./HeroScetion2.module.css"
 
 
 const HeroScetion2 = () => {
    return (
        <>
        <div  className={Styles.HeroScetion2Container}>
        <div  className={Styles.HeroScetion2ImgContainer}>
            <img src=""></img>
        </div>
        <div className={Styles.HeroScetion2TextContainer}>
            <h1 className={Styles.HeroScetion2Text1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
            <p className={Styles.HeroScetion2Text2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
        </div>
        <button>Get in Touch</button> 

        </div>
        
        </>
    )

};
export default HeroScetion2;