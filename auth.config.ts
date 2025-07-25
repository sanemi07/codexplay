import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import type {nextAuthConfig} from "./auth.config";
export default{
    providers:[
        github({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        google({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        })

    ]
}