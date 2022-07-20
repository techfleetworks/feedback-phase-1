/* eslint-disable quotes */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options: any = {
  providers: [
    GoogleProvider({
      // "!" = non-null assertion operator, tells typescript that even though it looks like a null, it is not null.
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    session: async (session: any, user: any) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    },
    jwt: async (token: any, user: any, account: any) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `$${process.env.BACKEND_HOST}auth/${account.provider}/callback?access_token=${account?.accessToken}`
        );
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return Promise.resolve(token);
    },
  },
};

const Auth = (req: any, res: any) => NextAuth(req, res, options);

export default Auth;
