import { checkCookieAuth } from "./app/utility/middlewareUtility";

export async function middleware(req) {
    if(req.nextUrl.pathname.startsWith("/dashboard")) {
        console.log("This is midleware");
        return checkCookieAuth(req);
    }
}