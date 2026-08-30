import Comments from './Comments';

const CommentList = ({ comments }) => {
    return (
        comments.map((comment) =>
            <div>
                <Comments data={comment} />
                <div className='pl-5 ml-4  border border-l-black'>
                    <CommentList comments={comment.replies} />
                </div>
            </div>)
    )
}
export default CommentList
