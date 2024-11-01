import { string, object } from "yup";

async function signUpDataValidation(data) {
  const schema = object({
    username: string().lowercase().required(),
    email: string().email().required(),
    password: string().min(3).required(),
  });

  try {
    const validData = await schema.validate(data);
    return { validData, error: null };
  } catch (error) {
    return { validData: null, error: error.message };
  }
}

async function loginDataValidation(data) {
  const schema = object({
    email: string().email().required(),
    password: string().min(3).required(),
  });

  try {
    const validData = await schema.validate(data);
    return { validData, error: null };
  } catch (error) {
    return { validData: null, error: error.message };
  }
}

export { signUpDataValidation, loginDataValidation };
