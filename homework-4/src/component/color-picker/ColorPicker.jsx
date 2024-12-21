import Styles from "./ColorPicker.module.css"


const ColorPicker = (props) => {

    const handleColorChange = (colorCode) => {

        navigator.clipboard
            .writeText(colorCode)
            .then(() => alert(`Color code ${colorCode} copied!`))
            .catch((err) => console.error("Failed to copy color code:", err));
    };

    return (
        <>
            <div className={Styles.colorList}>
                {
                    props.colors.map((color, index) => {
                        return (
                            <div key={index} className={Styles.colorCard} onClick={() => handleColorChange(color.code)}>
                                <div className={Styles.color} style={{ backgroundColor: color.code }}></div>
                                <div className={Styles.colorData}>
                                    <div className={Styles.colorCode}>{color.code}</div>
                                    <div className={Styles.colorName} style={{ color: color.code }}>{color.name}</div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
export default ColorPicker;