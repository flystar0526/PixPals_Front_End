import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";
import type { User } from "../store/slices/userSlice"

interface LoginForm {
  name?: string,
  email: string,
  password: string,
}

export const getJwtToken = (): string | null => {
  return localStorage.getItem("jwtToken");
}

export const setJwtToken = (jwt: string): void => {
  localStorage.setItem("jwtToken", jwt);
}

export const getUser = (): User => {
  const user: string | null = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return {
    id: "",
    name: "",
    email: "",
  };
}

export const saveUser = (user: User): void => {
  localStorage.setItem("user", JSON.stringify(user));
}

export const login = async(form: LoginForm) => {
  try {
    const response: AxiosResponse = await axios.post("/api/user/login", {
      email: form.email,
      password: form.password,
    })
    return response.data;
  } catch(error) {
    handleError(error, "帳號或密碼錯誤");
  }
}

export const register = async(form: LoginForm) => {
  try {
    const response: AxiosResponse = await axios.post("/api/user/register", {
      name: form.name,
      email: form.email,
      password: form.password
    })
    return response.data;
  } catch (error) {
    handleError(error, "帳號已存在");
  }
}

const handleError = (error: unknown, message: string) => {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    switch (status) {
      case 404:
        throw new Error(message);
      case 500:
        throw new Error("系統發生錯誤，請稍後再試");
    }
  } else {
    console.error(error);
    throw new Error("系統發生錯誤，請稍後再試");
  }
}
