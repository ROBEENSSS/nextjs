import React from 'react';
import {commentsService} from "@/services/api.service";

type Params = {
    params: {id: string}
};

const CommentPage = async ({params}: Params) => {
    const comment = await commentsService.getCommentsById(params.id)
    return (
        <div>
            <ul>
                <li key={comment?.id}>
                    {comment?.id} {comment?.body}
                </li>
            </ul>
        </div>
    );
};

export default CommentPage;