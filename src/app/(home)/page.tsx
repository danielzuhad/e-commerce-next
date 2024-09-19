"use client";

import { trpc } from "../server/client";

export default function Home() {
  const data = trpc.getData.useQuery();

  return (
    <>
      <main className=" w-full h-full pt-20">
        <p>test</p>
        {data.data?.data}
      </main>
    </>
  );
}
