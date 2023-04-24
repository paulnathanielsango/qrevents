import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@util/mongodb";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { User } from "@util/types";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        passid: { label: "Password", type: "password" },
        passcode: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const client = await clientPromise;
        const db = client.db("admin");
        const access = db.collection("users");

        // const hashed = await bcrypt.hash("test", 10);
        // console.log("hashed", hashed);

        const validatePass = await access.findOne<User>({
          passid: credentials.passid,
        });

        if (!validatePass) {
          throw new Error("Could not find id!");
        }

        const validatePasscode = await bcrypt.compare(
          credentials.passcode,
          validatePass.passcode
        );

        if (!validatePasscode) {
          throw new Error("Could not log you in!");
        }

        return {
          id: validatePass.id,
          name: validatePass.passId,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
