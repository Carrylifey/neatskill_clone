import { useEffect, useState } from "react";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import Dashboard from "./DashBoard";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState(""); // Track email state
  const [password, setPassword] = useState("");
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        navigate("/dash");
      })
      .catch((error) => {
        console.error("Error during sign-in:", error.message);
        // Handle the error (e.g., display a message to the user)
      });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, [value]);

  return (
    <div className="text-whitemax-w-full md:h-screen grid justify-center md:grid-cols-2 text-center text-white md:overflow-hidden bg-black">
      {/* left container */}
      {value ? (
        <Dashboard />
      ) : (
        <>
          <div className="flex justify-center items-center place-content-center w-full mb-[100px]">
            <div className=" ">
              <img
                src="https://neatskills.online/componentsgraphics/common/navbar/navbar/neatskillslogosample.svg"
                alt="logo"
                className="h-[230px] object-contain md:p-10 w-[50%] m-auto relative z-10"
              />
              <img
                className="md:p-10 md:w-[60%] m-auto relative z-10 -mt-12  border-l-red-100"
                width={200}
                height={200}
                src="https://neatskills.online/_next/static/media/Group%202.c1a52ec1.svg"
                alt=""
              />
              <div>
                <p className="text-center">Start learning right away!</p>
              </div>
            </div>
          </div>
          {/* Right container */}
          <div>
            <div className="m-auto md:mt-auto md:w-[35vw] flex justify-center items-center w-full h-full ">
              <div className="rounded-[25px] p-4 w-full bg-[#1A1B1F] px-5  space-y-2 mt-10 grid place-content-center ">
                <h1 className="md:mt-[30px] md:text-2xl text-center">
                  Get Started with free!
                </h1>
                <p className=" text-white text-xs pb-5 text-center ">
                  Already have an account?
                  <span className="text-[#E1347D]">
                    <a href="/beta/login"> Log In </a>
                  </span>
                </p>
                <button
                  onClick={handleClick}
                  className=" flex w-[100%] hover:scale-110  hover:shadow-lg  py-2 md:text-sm text-xs  text-white items-center justify-center gap-2 xl:p-[2px] lg:p-[2px]  border-[1px]  border-white rounded-lg"
                >
                  <img
                    alt=""
                    loading="lazy"
                    width="39"
                    height="38"
                    decoding="async"
                    data-nimg="1"
                    className=" md:w-[30px]  sd:w-[20px]"
                    src="https://neatskills.online/_next/static/media/_Google.2f38dc6f.svg"
                  />
                  <span>Continue with Google</span>
                </button>
                <div className="flex w-[80%] m-auto items-center gap-1 text-white">
                  <div className="w-[48%] h-0 lg:border-[.5px]  md:border-[.3px] sd:border-[.07px] border-[#696969] "></div>
                  <h5 className="xl:text-[15px] lg:text-[12px] md:text-[10px] sd:text-[8px]">
                    or
                  </h5>
                  <div className="w-[48%] h-0 lg:border-[.5px]  md:border-[.3px] sd:border-[.07px] border-[#696969]"></div>
                </div>
                <div className=" md:pb-5 md:px-10">
                  <form method="post" action="#">
                    <p className="flex flex-start text-sm ml-2 mt-5">Email</p>
                    <div className="  flex rounded-[15px]  bg-[#ffffff05] items-center ">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        viewBox="0 0 1024 1024"
                        height="2.5vh"
                        width="2.5vh"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                      </svg>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="input  md:p-3 p-[10px] pr-10 cursor-pointer  focus:border-transparent focus:outline-none    rounded-lg  bg-transparent  w-[100%] text-sm "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <p className="flex flex-start text-sm ml-2 mt-6">
                      Password
                    </p>
                    <div className="   flex rounded-[15px]   mb-6 bg-[#ffffff05] items-center ">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                        height="2.5vh"
                        width="2.5vh"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                      </svg>
                      <input
                        required=""
                        type="password"
                        placeholder="Enter your password"
                        className="input  md:p-3 p-[10px] pr-10 cursor-pointer focus:border-transparent focus:outline-none  rounded-lg  bg-transparent  w-[100%] text-sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-[#E1348B] transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg md:w-[100%] w-[50%] p-2   rounded-[10px]"
                    >
                      Create Account
                    </button>
                    <p className=" cursor-pointer text-[10px] font-light pt-2 text-gray-500">
                      By signing up, I agree to Neat Skill’s Terms of Service
                      &amp; Privacy Policy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SignIn;
