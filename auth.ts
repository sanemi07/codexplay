import nextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import authConfig from "./auth.config";
export const {auth,handler,signIn,signOut}=nextAuth({
    callbacks:{
       



    },
    secret:process.env.AUTH_SECRET,
    adapter:PrismaAdapter(db),
    session:{strategy:"jwt"},
    ...authConfig



 });