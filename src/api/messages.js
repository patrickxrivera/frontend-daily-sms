import axios from 'axios';

import { request } from './helpers';
import { formatTime } from 'components/Table/helpers';
import { MESSAGE_ENDPOINT, GET_MESSAGE_LIST_ENDPOINT } from 'utils/endpoints';

export const addMessage = (message) => {
  const endpoint = `${MESSAGE_ENDPOINT}/${message.user_id}`;
  const data = {
    ...message,
    send_time: formatTime(message.send_time)
  };

  return request('post', endpoint, data);
};

export const getMessagesFromDb = (userId) => {
  const endpoint = `${GET_MESSAGE_LIST_ENDPOINT}/${userId}`;
  return request('get', endpoint);
};

export const deleteMessage = (userId, messageId) => {
  const endpoint = `${MESSAGE_ENDPOINT}/${userId}/${messageId}`;
  return request('delete', endpoint);
};

export const updateMessage = (userId, messageId, data) => {
  const endpoint = `${MESSAGE_ENDPOINT}/${userId}/${messageId}`;
  return request('put', endpoint, data);
};
