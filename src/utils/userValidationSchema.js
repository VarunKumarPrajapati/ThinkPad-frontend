import { string, object } from "yup";

async function signUpDataValidation(data) {
  const schema = object({
    username: string().lowercase().required(),
    email: string().email().required(),
    password: string().min(3).required(),
  });

  try {
    const validData = await schema.validate(data);
    return { validData };
  } catch (error) {
    return { validData: null, [error.path]: error.message };
  }
}

async function loginDataValidation(data) {
  const schema = object({
    email: string().email().required(),
    password: string().min(3).required(),
  });

  try {
    const validData = await schema.validate(data);
    return { validData };
  } catch (error) {
    return { validData: null, [error.path]: error.message };
  }
}

async function forgotPasswordDataValidation(email) {
  const schema = object({
    email: string().email().required(),
  });

  try {
    const validData = await schema.validate(email);
    return { validData };
  } catch (error) {
    return { validData: null, [error.path]: error.message };
  }
}

export {
  signUpDataValidation,
  loginDataValidation,
  forgotPasswordDataValidation,
};
