export const networkError = response => {
  const err = new Error(response.statusText);
  err.response = response;
  throw err;
};
