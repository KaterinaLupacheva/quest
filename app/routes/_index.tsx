import type { V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";
import Challenge from "~/components/Challenge";
import Task from "~/components/Task";
import { tasks } from "~/components/tasks";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Mihas Quest" },
    { name: "description", content: "Birthday quest" },
  ];
};

export default function Index() {
  const [showTaskIdx, setShowTaskIdx] = useState(-1);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);

  const onSubmit = () => {
    const answer = tasks[showTaskIdx].answer;
    if (Number(inputValue) === answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold underline">Мишане - 10 лет</h1>
      <p className="text-2xl font-bold">(люмик-челлендж)</p>
      <div className="flex flex-row items-center justify-around grow">
        {tasks.map((task, idx) => (
          <Task
            idx={idx + 1}
            price={task.price}
            key={task.answer}
            onClick={() => {
              setShowTaskIdx(idx);
              setIsCorrect(undefined);
              setInputValue("");
            }}
          />
        ))}
      </div>
      {showTaskIdx !== -1 && (
        <Challenge
          challenge={tasks[showTaskIdx].challenge}
          onSubmit={onSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
      {isCorrect !== undefined ? (
        isCorrect ? (
          <p className="text-7xl text-green-600">V</p>
        ) : (
          <p className="text-7xl text-red-600">X</p>
        )
      ) : null}
    </div>
  );
}
