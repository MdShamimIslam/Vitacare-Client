const Error = ({ errorMessage }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h3 className="text-red-700 text-[20px] leading-[30px] font-semibold">
        {errorMessage && "There was an error. Please try again right url."}
      </h3>
    </div>
  );
};

export default Error;
