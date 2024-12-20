import Comments from "../../data/comment";


const CommentsCard = () => {
    return (
        <div>
            {
                Comments.map((comment, index) => {
                    return (
                        <div key={index} className="comment-card">
                            <div>{comment.comment}</div>
                            <div>
                            <img src={comment.imageUrl} alt={`${comment.name}'s profile`} />
                            <div>
                                <span>{comment.name}</span>
                                <span>{comment.position}</span>
                                
                            </div>

                            </div>
                            

                           


                        </div>
                    )
                })
            }
        </div>
    );

};
export default CommentsCard;