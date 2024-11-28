import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Twitter({
			clientId: process.env.AUTH_TWITTER_ID,
			clientSecret: process.env.AUTH_TWITTER_SECRET,
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			session.user.token = token.accessToken as string;
			return session;
		},
	},
});
