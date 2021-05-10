export const setItem = (name, value) => {
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(name, value);
};

export const removeItem = (name) => {
  localStorage.removeItem(name);
};

export const getItem = (name) => {
  let data = localStorage.getItem(name);
  try {
    data = JSON.parse(data);
  } catch (e) {
    return "";
  }
  return data;
};

export const checkItem = (name) => {
  const user = this.getItem(name);
  if (user !== "" && user !== null) {
    return true;
  }
  return false;
};
