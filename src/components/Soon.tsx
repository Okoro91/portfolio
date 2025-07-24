interface SoonProps {
  title: string;
}

const Soon = ({ title }: SoonProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] py-12 px-4 bg-gray-100 rounded-lg shadow-inner text-gray-600">
      <div className="flex items-center space-x-4 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-10 h-10 text-purple-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <h1 className="text-4xl font-extrabold text-gray-800"> {title}</h1>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-10 h-10 text-purple-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5 15.75 12l-7.5 7.5"
          />
        </svg>
      </div>
      <p className="text-xl md:text-2xl font-semibold text-purple-600 mt-2 animate-pulse">
        Coming Soon!
      </p>
      <p className="text-md text-gray-500 mt-2">
        Working on this section. Stay tuned for updates!
      </p>
      <p className="text-sm text-gray-400 mt-1">
        Check back later for more details.
      </p>
    </div>
  );
};

export default Soon;
