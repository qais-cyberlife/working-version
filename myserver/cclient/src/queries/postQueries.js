import { gql } from '@apollo/client';

const GET_POSTS = gql`
    query getPosts {
        posts {
            id
            title
            publishedDate
            description
        }
    }
`;

const GET_POST = gql`
    query getPost($id: ID!) {
        post(id: $id) {
            id
            title
            author {
                name
                username
            }
            publishedDate
            description
        }
    }
`;

export { GET_POSTS, GET_POST };