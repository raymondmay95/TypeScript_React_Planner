import Cookies from 'js-cookie';

export interface fetchProps {
  url: string;
  options?: {
    method: string
    headers?: {
      'Content-Type'?: string
      'XSRF-Token'?: string
    }
    body?: string
  }
}

const initialOptions:fetchProps['options'] = {
  method: "GET",
}

export const csrfFetch = async (url: fetchProps["url"], options: fetchProps["options"] = initialOptions) => {
  // set options.method to 'GET' if there is no method
  if (options && !options.method) {
    options.method = 'GET';
  }
    // set options.headers to an empty object if there is no headers
  if (options && !options.headers) {
    options.headers = {};
  }

    // if the options.method is not 'GET', then set the "Content-Type" header to
    // "application/json", and set the "XSRF-TOKEN" header to the value of the
    // "XSRF-TOKEN" cookie
    if (options.method.toUpperCase() !== 'GET') {
      if (options.headers) {
        options.headers['Content-Type'] =
        options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
      }
    }
  // call the default window's fetch with the url and the options passed in
  const res = await window.fetch(url, options);

  // if the response status code is 400 or above, then throw an error with the
    // error being the response
  if (res.status >= 400) throw res;

  // if the response status code is under 400, then return the response to the
    // next promise chain
  return res;
}
export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
  }
