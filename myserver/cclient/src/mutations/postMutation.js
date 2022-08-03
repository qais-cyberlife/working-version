import { gql } from '@apollo/client';

const ADD_POST = gql`
    mutation addPost($title: String!, $publishedDate: String!, $description: String!) {
        addPost (title: $title, publishedDate: $publishedDate, description: $description)
        {
            title
            publishedDate
            description
        }
    }
`



export { ADD_POST };