import { useSession } from "next-auth/react";
import Layout from "@components/Layout";
import Records from "@components/Dashboard/Records";
import Form from "@components/Forms/Form";
import Header from "@components/Header";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Layout>{session ? <Header tabNum={1} /> : <Form />}</Layout>
    </>
  );
}
