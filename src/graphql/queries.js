import gql from 'graphql-tag';

export const allBooksQuery = gql `
  query AllBooksQuery {
    books {
        name
        id
        genre
        author {
            name
        }
    }
  }
`;

export const allAuthorsQuery = gql `
  query AllAuthorsQuery {
    authors {
        name
        id
        age
    }
  }
`;

export const addBookMutation = gql `
    mutation AddBook($name: String!, $genre:String!, $author_id: ID!) {
        addBook(name: $name, genre: $genre, author_id: $author_id) {
            name
            id
        }
    }
`;

export const getBookQuery = gql `
    query BookQuery($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;