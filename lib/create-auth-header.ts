import { getSession } from "next-auth/react";

export async function createAuthHeader() {
  const session = await getSession();

  const headers = new Headers();
  // headers.append('Authorization', 'Bearer ' + session?.user.accessToken)
  headers.append("Content-Type", "application/json");

  return headers;
}
