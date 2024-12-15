import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className=" my-8 md:my-16">
      <div className="bg-white p-6 md:mx-auto">
        <svg className="w-[100px] mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="green"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
          />
        </svg>
        <div className="text-center mt-6">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p>Have a great day!</p>
          <div className="py-10 text-center">
            <Link
              to="/home"
              className="px-12 bg-buttonBgColor btn font-semibold py-3"
            >
               Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
