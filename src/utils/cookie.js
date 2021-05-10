const singletonEnforcer = Math.random().toString(36).substring(2);
class CookieHandler {
  static cookieHandlerInstance;

  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error("Cannot initialize Cookie single instance");
    }
  }

  static get instance() {
    if (!this.cookieHandlerInstance) {
      this.cookieHandlerInstance = new CookieHandler(singletonEnforcer);
    }

    return this.cookieHandlerInstance;
  }

  setCookie(name, value, minutesExpired) {
    const date = new Date();
    date.setMinutes(date.getMinutes() + minutesExpired);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  removeCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
  }

  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const partsPop = parts.pop();
      if (partsPop) return partsPop.split(";").shift();
    }
    return "";
  }

  checkCookie(name) {
    const user = this.getCookie(name);
    if (user !== "" && user !== null) {
      return true;
    }
    return false;
  }
}

export default CookieHandler.instance;
