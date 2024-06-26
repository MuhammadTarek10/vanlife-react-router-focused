import { redirect } from "react-router-dom";

function mutateResponse(path) {
  let response = redirect(path);
  response.body = true;
  return response;
}

export { mutateResponse as redirect };
