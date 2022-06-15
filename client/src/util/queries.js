import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      _id
      lastLogin
      username
      email
    }
  }
`;

export const QUERY_COMMENT = gql`
  query Comment($commentId: ID!) {
    comment(id: $commentId) {
      _id
      commentAuthor
      commentText
      Date
    }
  }
`;
