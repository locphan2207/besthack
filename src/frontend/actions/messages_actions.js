import * as MessagesApiUtil from "../util/messages_api_util";

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const fetchMessages = () => dispatch =>
  MessagesApiUtil.fetchMessages()
    .then(payload => dispatch(receiveAllMessages(payload)))
    .fail((xhr, status, errorThrown) => {
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    });


// export const createMessage = (authorName, body) => dispatch =>
//   MessagesApiUtil.createMessage(authorName, body)
//     .then(payload => dispatch(receiveMessage(payload)))
//     .fail((xhr, status, errorThrown) => {
//       console.log("Error: " + errorThrown);
//       console.log("Status: " + status);
//       console.dir(xhr);
//     });

// export const createMessage = (authorName, body) => dispatch =>
//   MessagesApiUtil.createMessage(authorName, body)
//     .then(() => dispatch(receiveMessage({author_name: authorName, body: body})))

export const createMessage = (authorName, body) => dispatch =>
  MessagesApiUtil.createMessage(authorName, body)

const receiveAllMessages = payload => ({
  type: RECEIVE_ALL_MESSAGES,
  payload
});

export const receiveMessage = payload => ({
  type: RECEIVE_MESSAGE,
  payload
});