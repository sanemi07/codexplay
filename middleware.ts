import NextAuth from "next-auth";
import authConfig from "./auth.config";
import next from "next";
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, protectedRoutes, publicRoutes } from "./routes";
const {auth}=NextAuth(authConfig);
export default auth((req)=>{
   const {nextUrl}=req;
   const isLoggedIn=!!req.auth;
   const isApiAuthRoute=nextUrl.pathname.startsWith(apiAuthPrefix)
   const isPublicRoute=publicRoutes.includes(nextUrl.pathname);
   const isAuthRoute=protectedRoutes.includes(nextUrl.pathname);
   if(isApiAuthRoute){
    return null;
   }
   if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
    }
    return null;
   }
   if(isPublicRoute&& !isLoggedIn){
    return Response.redirect(new URL('auth/sign-in', nextUrl));
   }
   return null;


})
export const config = {
  // copied from clerk
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};