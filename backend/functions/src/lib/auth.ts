import * as admin from "firebase-admin";

export const checkAuth = async (authorization : string) => {
  // Check if bearer exists
  if (!authorization || !authorization.startsWith("Bearer"))
    return false;

  // Check if field has two values
  const splitToken = authorization.split("Bearer ");
  if (splitToken.length !== 2)
    return false;

  const token = splitToken[1];

  try {
    await admin.auth().verifyIdToken(token);
    return true;
  } catch (err) {
    return false;
  }
}