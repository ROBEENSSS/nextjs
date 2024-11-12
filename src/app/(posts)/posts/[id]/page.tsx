import React from 'react';
import {postsService} from "@/services/api.service";

type Params = {
    params: { id: string }
};

const PostPage = async ({params}: Params) => {
    const post = await postsService.getPostsById(params.id)
    return (
        <div>
            <ul>
                <li key={post?.id}>
                    {post?.id} : {post?.body}
                </li>
            </ul>
        </div>
    );
};

export default PostPage;
