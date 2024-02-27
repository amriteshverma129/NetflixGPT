//REGEX
export const TEXT_REGEX = /[0-9!@#$%^&*(),.?":{}|<>]/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const OTP_REGEX = /^\d{6}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/;
export const FIRSTNAME_EMPTY_ERROR = "First name cannot be empty";
export const FIRSTNAME_SPECIAL_DIGIT_CHAR_ERROR =
  "First name cannot contain special character";
export const LASTNAME_EMPTY_ERROR = "Last name cannot be empty";
export const LASTNAME_SPECIAL_DIGIT_CHAR_ERROR =
  "Last name cannot contain digit or special character.";
export const EMAIL_ADDRESS_EMPTY_ERROR = "Please provide your Email Address.";
export const ENTER_VALID_EMAIL_ADDRESS = "Please provide valid Email Address.";
export const PHONE_MUMBER_EMPTY_ERROR = "Please provide your Phone Number";
export const PLEASE_EANTER_VERIFICATION_CODE =
  "Please enter verification code.";
export const ENTER_6DIGIT_ERROR = "Please enter 6 digit.";
export const PASSWORD_EMPTY_ERROR = "Please enter your password.";
export const PASSWORD_DEFAULT_ERROR_MSG =
  "Password should have at least 8 characters, one number, one uppercase, one lowercase and one special character.";
export const FIRSTNAME_ID = "firstName";
export const LASTNAME_ID = "lastName";
export const EMAIL_ID = "email";
export const PHONE_ID = "phone";
export const OTP_ID = "otp";
export const PASSWORD_ID = "password";
export const BLANK = "";

export const validateFirstName = (value, setError, error) => {
  if (value === "")
    setError({ ...error, firstNameErrorMessage: FIRSTNAME_EMPTY_ERROR });
  else if (TEXT_REGEX.test(value))
    setError({
      ...error,
      firstNameErrorMessage: FIRSTNAME_SPECIAL_DIGIT_CHAR_ERROR,
    });
  else setError({ ...error, firstNameErrorMessage: "" });
};

export const validateLastName = (value, setError, error) => {
  if (value === "")
    setError({ ...error, lastNameErrorMessage: LASTNAME_EMPTY_ERROR });
  else if (TEXT_REGEX.test(value))
    setError({
      ...error,
      lastNameErrorMessage: LASTNAME_SPECIAL_DIGIT_CHAR_ERROR,
    });
  else setError({ ...error, lastNameErrorMessage: "" });
};

export const validateEmail = (value, setError, error) => {
  if (value === "") {
    setError({ ...error, emailErrorMessage: EMAIL_ADDRESS_EMPTY_ERROR });
  } else if (!value.match(EMAIL_REGEX))
    setError({ ...error, emailErrorMessage: ENTER_VALID_EMAIL_ADDRESS });
  else setError({ ...error, emailErrorMessage: "" });
};

export const validatePhone = (value, setError, error) => {
  if (value === "")
    setError({ ...error, phoneErrorMessage: PHONE_MUMBER_EMPTY_ERROR });
  else setError({ ...error, phoneErrorMessage: "" });
};

export const validateOTP = (value, setError, error) => {
  if (value === "")
    setError({ ...error, otpErrorMessage: PLEASE_EANTER_VERIFICATION_CODE });
  else if (!value.match(OTP_REGEX))
    setError({ ...error, otpErrorMessage: ENTER_6DIGIT_ERROR });
  else setError({ ...error, otpErrorMessage: "" });
};

export const validatePassword2 = (value, setError, error) => {
  if (value === "")
    setError({ ...error, passwordErrorMessage: PASSWORD_EMPTY_ERROR });
  else if (!value.match(PASSWORD_REGEX))
    setError({
      ...error,
      passwordErrorMessage: PASSWORD_DEFAULT_ERROR_MSG,
    });
  else setError({ ...error, passwordErrorMessage: "" });
};

export const validateChange = (name, value, setError, error) => {
  if (name === FIRSTNAME_ID) {
    validateFirstName(value, setError, error);
  } else if (name === LASTNAME_ID) {
    validateLastName(value, setError, error);
  } else if (name === EMAIL_ID) {
    validateEmail(value, setError, error);
  } else if (name === PHONE_ID) {
    validatePhone(value, setError, error);
  } else if (name === OTP_ID) {
    validateOTP(value, setError, error);
  } else if (name === PASSWORD_ID) {
    validatePassword2(value, setError, error);
  }
};
