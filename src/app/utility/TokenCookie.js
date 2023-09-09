import { createToken } from "./JWTHelper";

export async function tokenCookie(email) {
    let token = await createToken(email);
    return {'Set-Cookie':`token=${token};Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict`};
}