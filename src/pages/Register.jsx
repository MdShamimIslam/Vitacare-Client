import signupImg from "../assets/images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import uplaodImageCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadLabel, setUploadLabel] = useState("Upload Photo");
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMess, setErrorMess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const validatePassword = (password) => {
    if (password.length < 6) {
      setErrorMess("Password must be at least six characters");
    } else if (!/[A-Z]/.test(password)) {
      setErrorMess("Password must have at least one uppercase character");
    } else if (!/[a-z]/.test(password)) {
      setErrorMess("Password must have at least one lowercase character");
    } else if (!/[0-9]/.test(password)) {
      setErrorMess("Password must have at least one digit");
    } else if (!/[#?!@$%^&*-]/.test(password)) {
      setErrorMess("Password must have at least one special character");
    } else {
      setErrorMess("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
  };

  const handeFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    setIsUploading(true);
    setUploadLabel("Uploading...");
    try {
      const data = await uplaodImageCloudinary(file);
      setPreviewURL(data?.url);
      setSelectedFile(data?.url);
      setFormData({ ...formData, photo: data?.url });
      setUploadLabel("Uploaded Image");
    } catch (error) {
      toast.error("Image upload failed.");
      setUploadLabel("Upload Photo");
    } finally {
      setIsUploading(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0 mt-[-50px]">
       <Helmet>
        <title>VitaCare | Register</title>
      </Helmet>
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}
          <div className="hidden lg:block rounded-l-lg">
            <figure className="rounded-l-lg mt-16">
              <img src={signupImg} className="rounded-md" alt="" />
            </figure>
          </div>
          {/* sign up form */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-2 py-3 border-b border-solid border-[#0066ff61]
                    focus:outline-none focus:border-b-primaryColor text-[16px] leading-7
                      text-headingColor placeholder:text-textColor rounded-md 
                    "
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-2 py-3 border-b border-solid border-[#0066ff61]
                    focus:outline-none focus:border-b-primaryColor text-[16px] leading-7
                      text-headingColor placeholder:text-textColor rounded-md 
                    "
                  required
                />
              </div>
              <div className="mb-5 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-2 py-3 border-b border-solid border-[#0066ff61]
                    focus:outline-none focus:border-b-primaryColor text-[16px] leading-7
                      text-headingColor placeholder:text-textColor rounded-md 
                    "
                  required
                />
                <span
                  className="absolute top-4 right-2 text-slate-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                {errorMess && (
                  <p className="text-red-500 text-sm mt-2">{errorMess}</p>
                )}
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold tetx-[16px] leading-7">
                  Are you a:
                  <select
                    value={formData.role}
                    onChange={handleInputChange}
                    name="role"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label className="text-headingColor font-bold tetx-[16px] leading-7">
                  Gender:
                  <select
                    value={formData.gender}
                    onChange={handleInputChange}
                    name="gender"
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure
                    className=" rounded-full border-2 border-solid border-primaryColor 
                flex items-center justify-center "
                  >
                    <img
                      className="md:w-[50px] md:h-[50px] w-[48px] h-[48px] object-cover rounded-full"
                      src={previewURL}
                      alt=""
                    />
                  </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    onChange={handeFileInputChange}
                    name="photo"
                    id="customFile"
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center
                     px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
                      bg-[#0066ff46] text-headingColor font-semibold rounded-lg
                       truncate cursor-pointer"
                  >
                   {uploadLabel}
                  </label>
                </div>
              </div>
              <div className="mt-7">
                <button
                  disabled={loading || isUploading }
                  className={`w-full  bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 ${
                    (loading || isUploading) && "opacity-50 cursor-not-allowed"
                  }`}
                  type="submit"
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-primaryColor font-semibold ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
