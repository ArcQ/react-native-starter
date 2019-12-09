/* @module */
import { networkError } from 'errors/Errors';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw networkError(response);
}

function formQuery(data) {
  const query = Object.keys(data)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');
  return `?${query}`;
}

export default function request(
  apiUrl,
  endpoint,
  body = {},
  requestOptions = {},
) {
  let query = '';

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'App-Version': process.env.REACT_APP_VERSION,
    },
    credentials: 'include',
    ...requestOptions,
  };

  if (options.method === 'GET' && body) {
    query = formQuery(body);
  } else if (options.method === 'POST' && body) {
    options.body = JSON.stringify(body);
  }

  const destination = `${apiUrl}/${endpoint}${query}`;

  return fetch(destination, options)
    .then(checkStatus)
    .then(response => response.json())
    .catch(fetchErr => ({ fetchErr }));
}
