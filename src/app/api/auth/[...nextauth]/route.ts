import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "56-credentials",
            name: "56 Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    if (!credentials) {
                        return null;
                    }

                    // const { data } = await hasuraQuery({
                    //     email: credentials.email,
                    //     password: credentials.password,
                    // });
                    console.log('hello');
                    const data = {
                        users: [
                            {
                                id: "123", // Replace with actual Hasura user ID
                                name: "John Doe", // Replace with actual user name
                                email: credentials.email, // Replace with actual user email
                            },
                        ],
                    }
                    if (data.users.length > 0) {
                        return {
                            id: data.users[0].id,
                            name: data.users[0].name,
                            email: data.users[0].email,
                        };
                    } else {
                        return null;
                    }
                } catch (error) {
                    throw new Error(
                        JSON.stringify({ errors: "Authorize error", status: false })
                    );
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
    session: { strategy: "jwt" },
    callbacks: {
        async signIn(userDetail) {
            if (Object.keys(userDetail).length === 0) {
                return false;
            }
            return true;
        },
        async redirect({ baseUrl }) {
            return `${baseUrl}/homepage`;
        },
        async session({ session, token }) {
            if (session.user?.name) session.user.name = token.name;
            return session;
        },
        async jwt({ token, user }) {
            let newUser = { ...user } as any;
            if (newUser.first_name && newUser.last_name)
                token.name = `${newUser.first_name} ${newUser.last_name}`;
            return token;
        },
    },
});

export { handler as GET, handler as POST };
