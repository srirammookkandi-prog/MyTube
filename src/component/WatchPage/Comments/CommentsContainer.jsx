
import { CommentData } from '../../../utility/CommentMockData';
import CommentList from './CommentList';
const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <CommentList comments={CommentData} />
        </div>
    )
}

export default CommentsContainer;
