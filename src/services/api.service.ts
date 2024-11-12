import {IUser} from "../../models/user";
import {IPost} from "../../models/post";
import {IComment} from "../../models/comment";

const base: string = 'https://jsonplaceholder.typicode.com';
const {userBaseUrl, postBaseUrl, commentsBaseUrl, allItems, singleItems} = {
    userBaseUrl: '/users',
    postBaseUrl: '/posts',
    commentsBaseUrl: '/comments',
    allItems: (url: string) => base + url,
    singleItems: (id: string | number, url: string) => base + url + '/' + id,
}


const usersService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const users = await fetch(allItems(userBaseUrl))
            .then(value => value.json());
        return users;
    },
    getUserById: async (id: string | number): Promise<IUser | null> => {
        const user = await fetch(singleItems(id, userBaseUrl))
            .then(value => value.json());
        return user;
    },

}

const postsService = {
    getAllposts: async (): Promise<IPost[]> => {
        const posts = await fetch(allItems(postBaseUrl))
            .then(value => value.json());
        return posts;
    },
    getPostsById: async (id: string | number): Promise<IPost | null> => {
        const post = await fetch(singleItems(id, postBaseUrl))
            .then(value => value.json());
        return post;
    },
}

const commentsService = {
    getAllComments: async (): Promise<IComment[]> => {
        const comments = await fetch(allItems(commentsBaseUrl))
            .then(value => value.json());
        return comments;
    },
    getCommentsById: async (id: string | number): Promise<IComment | null> => {
        const comment = await fetch(singleItems(id, commentsBaseUrl))
            .then(value => value.json());
        return comment;
    },

}

export {
    usersService, postsService, commentsService
}