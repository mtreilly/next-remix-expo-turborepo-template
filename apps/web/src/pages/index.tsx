import type { NextPage } from "next";
import Head from "next/head";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center w-screen min-h-screen p-4 overflow-y-scroll">
        <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h2>
        <p className="text-2xl text-gray-700">This stack uses</p>
        <div className="flex items-center justify-center w-full pt-6 text-2xl text-blue-500">{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}</div>
      </div>
    </>
  );
};

export default Home;
