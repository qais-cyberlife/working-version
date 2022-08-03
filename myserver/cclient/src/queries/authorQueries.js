import { gql } from '@apollo/client';

const GET_AUTHORS = gql`
    query getAuthors {
        authors {
            id
            name
            username
        }
    }
`;

export { GET_AUTHORS };