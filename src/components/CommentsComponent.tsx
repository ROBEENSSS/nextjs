import React, {FC} from 'react';
import {IComment} from "../../models/comment";
import Link from "next/link";

interface IProps {
    comment: IComment
}

const CommentsComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <Link href={`/comments/${comment.id}`}>{comment.id} : {comment.name}</Link>
        </div>
    );
};

export default CommentsComponent;