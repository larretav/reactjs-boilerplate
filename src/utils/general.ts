
export const sleep = (seconds: number = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const isValidJSON = (value: string) => {
  try {
    JSON.parse(value);
    return true;
  } catch (e) {
    return false;
  }
}
