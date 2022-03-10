export const validEmailRegex =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const getErrorMessageResponse = (response: any) => {
  if (typeof response?.errors.email === 'string') {
    return response?.errors.email;
  }
  // if (response?.message?.details[0]) {
  //   return response?.message?.details[0]?.message;
  // }
  return '';
};
