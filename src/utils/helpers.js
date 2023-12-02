export function validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regex.test(String(email).toLowerCase());
  }