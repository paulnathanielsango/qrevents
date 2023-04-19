import Layout from "@components/components/Layout";
import Form from "@components/components/Forms/Form";
import Admin from "@components/components/Dashboard/Admin";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Layout>{session ? <Admin /> : <Form />}</Layout>
    </>
  );
}
