import { useDelay } from "@/hooks/useDelay";

export default async function Home() {
  await useDelay(2000);

  return (
    <>
      <main className=" w-full h-full pt-20">main</main>
    </>
  );
}
