import Styles from "./Quote.module.css"
import quotes from "../../data/quotes";

const Quote = () =>{
    return (
        <>
        <div className={Styles.quoteList}>
            {
                quotes.map((quote, index) => {
                    return (
                        <div key={index} className={Styles.quoteContainer}>
                            <div className={Styles.quote}>{quote.quote}</div>
                            <div className={Styles.author}>{quote.author}</div>
                        </div>
                    )

                })
            }
            
        </div>
        </>
    )

}
export default Quote;
