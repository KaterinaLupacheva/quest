import type { V2_MetaFunction } from "@remix-run/node";
import Task from "~/components/Task";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold underline">Мишане - 10 лет</h1>
      <p className="text-2xl font-bold">(люмик-челлендж)</p>
      <div className="flex flex-row items-center justify-around grow">
        <Task idx={1} price={200} answer="10" />
        <Task idx={2} price={70} answer="20" />
        <Task idx={3} price={450} answer="5" />
        <Task idx={4} price={140} answer="50" />
        <Task idx={5} price={340} answer="15" />
      </div>
    </div>
  );
}
