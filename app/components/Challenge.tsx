import challenge2 from "./task2.png";

type ChallengeProps = {
  onSubmit: (inputValue: number) => void;
  challenge: string[] | string;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
};

export default function Answer({
  challenge,
  onSubmit,
  inputValue,
  setInputValue,
}: ChallengeProps) {
  return (
    <div className="flex flex-col items-start justify-center p-10 w-6/12">
      {Array.isArray(challenge) &&
        challenge.map((line, idx) => (
          <p className="mt-6 text-xl" key={idx}>
            {line}
          </p>
        ))}
      {!Array.isArray(challenge) && <img src={challenge2} alt="challenge2" />}
      <div className="flex flex-col items-center justify-center w-full">
        <h3 className="mt-5 text-2xl text-bold">Ответ</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-black"
        />
        <button
          onClick={() => onSubmit(Number(inputValue))}
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 mt-2"
        >
          OK
        </button>
      </div>
    </div>
  );
}
