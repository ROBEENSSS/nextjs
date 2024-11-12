import React from 'react';
import {commentsService} from "@/services/api.service";
import CommentsComponent from "@/components/CommentsComponent";

const CommentsPage = async () => {
    const allComments = await commentsService.getAllComments()
    return (
        <div>
            <ul>
                {allComments.map(comment => <li key={comment.id}>
                    <CommentsComponent comment={comment}/>
                </li>)}
            </ul>
        </div>
    );
};

export default CommentsPage;