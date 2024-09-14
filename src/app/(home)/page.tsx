import { useDelay } from "@/hooks/useDelay";

export default async function Home() {
  await useDelay(2000);

  return <main className="h-full w-full">home</main>;
}
