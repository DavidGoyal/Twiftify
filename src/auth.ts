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
				token = Object.assign({}, token, {
					access_token: account.access_token,
				});
			}
			return token;
		},
		async session({ session, token }) {
			if (session) {
				session = Object.assign({}, session, {
					access_token: token.access_token,
				});
				console.log(session);
			}
			return session;
		},
	},
});
