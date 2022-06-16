import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password, username: $username) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($commentAuthor: String!, $commentText: String!) {
    addComment(commentAuthor: $commentAuthor, commentText: $commentText) {
      _id
      commentAuthor
      commentText
      Date
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation RemoveComment($removeCommentId: ID!) {
    removeComment(id: $removeCommentId) {
      _id
      commentAuthor
      commentText
      Date
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation UpdateComment($updateCommentId: ID!, $commentText: String!) {
    updateComment(id: $updateCommentId, commentText: $commentText) {
      _id
      commentAuthor
      commentText
      Date
    }
  }
`;
