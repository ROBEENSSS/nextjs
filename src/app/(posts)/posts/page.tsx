import React from 'react';
import {postsService} from "@/services/api.service";
import PostComponent from "@/components/PostComponent";

const PostsPage = async () => {
    const allPosts = await postsService.getAllposts();
    return (
        <div>
            <ul>
                {allPosts.map(post => <li key={post.id}>
                    <PostComponent post={post}/>
                </li>)}
            </ul>
        </div>
    );
};

export default PostsPage;