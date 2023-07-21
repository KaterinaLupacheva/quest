type TaskProps = React.HTMLProps<HTMLDivElement> & {
  idx: number;
  price: number;
};

export default function Task({ price, idx, onClick }: TaskProps) {
  return (
    <div
      className="flex flex-col items-center justify-center mx-8 mt-10 hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="w-60 h-60 flex flex-col justify-evenly max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white text-center">
        <h2 className="text-4xl font-bold">{idx}</h2>
        <p className="underline text-2xl">испытание</p>
        <p className="text-bold text-xl text-sky-400">{`${price} люмиков`}</p>
      </div>
    </div>
  );
}
