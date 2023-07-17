/**
 * --------------------------------------------------------------------------
 * Button visually impaired (v1.0.0): util/cookie.js
 * Licensed under MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
 * --------------------------------------------------------------------------
 */

const setCookie = function (name = '', value = '') {
  console.log(`${name  } - ${  value}`);
  const now = new Date();
  let time = now.getTime();
  time += 24 * 60 * 60 * 1000;
  now.setTime(time);
  // document.cookie = `bvi_${name}=${value};path=/;expires=${now.toUTCString()};domain=${location.host}`;
  document.cookie = `bvi_${name}=${value};`;
  document.cookie = `path=/;`;
  document.cookie = `expires=${now.toUTCString()};`;
  document.cookie = `domain=${location.host}`;
};

const getCookie = function (name = '') {
  // console.log('Получаем куки - ' + name);
  name = `bvi_${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.indexOf(name) !== -1) {
      return cookie.substring(name.length, cookie.length);
    }
  }
};

const removeCookie = function (name = '') {
  // console.log('Удаляем куки');
  document.cookie = `bvi_${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=${location.host}`;
};

export {
  setCookie,
  getCookie,
  removeCookie,
};
