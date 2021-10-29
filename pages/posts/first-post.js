import Head from "next/head";
import Layout from "../../components/layouts";

export default function firstPost() {
  return (
    <Layout>
      <h1>First Post</h1>
      <Head>
        <title>First Post</title>
      </Head>
    </Layout>
  );
}
