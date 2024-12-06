import { Link } from "react-router-dom";
import notFound from "../../assets/images/notFound.png";

const ErrorPage = () => {
  return (
    <div className="flex justify-center my-16">
      <div>
        <img src={notFound} className="w-full" alt="" />
        <h1 className="text-4xl font-bold text-center text-red-500">
          Page Not Found
        </h1>
        <Link to="/home" className="flex justify-center">
          <button className="btn">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
