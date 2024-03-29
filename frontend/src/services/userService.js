import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl.apiUrl + "/signup";

export function register(user) {
  return http.post(apiEndpoint, {
    name: user.name,
    email: user.email,
    password: user.password,
  });
}
