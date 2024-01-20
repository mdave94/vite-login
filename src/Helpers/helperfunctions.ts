//returns true if everything is ok
export const emailIsOk = (email: string) => {
  if (!email) return false;

  if (isLongenough(email) && email.includes("@") && email.includes(".")) {
    return true;
  } else {
    return false;
  }
};

const isLongenough = (text: string) => {
  if (text.length >= 3) return true;
};

export const passwordIsOk = (pass: string) => {
  if (!pass) {
    return false;
  }

  if (isLongenough(pass)) {
    return true;
  } else {
    return false;
  }
};
