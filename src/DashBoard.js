import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="bg-black text-white h-screen flex w-full ">
      <div className="flex w-full justify-center">
        {/* left section */}
        <section className="">
          <div className="flex justify-center">
            <img
              className="w-[70%]"
              src="https://neatskills.online/pagesgraphics/common/createcategory/Neatskills.svg"
              alt=""
            />
          </div>
          <div className="mt-[1rem]">
            <label className="ml-[1rem]">
              <input
                id="default-checkbox"
                type=""
                className="rounded form-checkbox h-3 w-3 text-gray-600 "
              />
              <span className=" cursor-pointer ml-3">Profile</span>
            </label>
          </div>
          <div className="mt-[1rem]">
            <label className="ml-[1rem]">
              <input
                id="default-checkbox"
                type=""
                className="rounded form-checkbox h-3 w-3 text-gray-600 "
              />
              <span className=" cursor-pointer ml-3">Home</span>
            </label>
          </div>
          <hr className="h-px  md:my-4 bg-gray-500 border-0 w-[90%] m-auto " />
          {/* courses */}
          <div className="mt-[1rem]">
            <label className="ml-[1rem]">
              <input
                id="default-checkbox"
                type=""
                className="rounded form-checkbox h-3 w-3 text-gray-600 "
              />
              <span className=" cursor-pointer ml-3">Courses</span>
            </label>
          </div>
          <div className="mt-[1rem]">
            <label className="ml-[1rem]">
              <input
                id="default-checkbox"
                type=""
                className="rounded form-checkbox h-3 w-3 text-gray-600 "
              />
              <span className=" cursor-pointer ml-3">Schedule</span>
            </label>
          </div>
          <div className="mt-[1rem]">
            <label className="ml-[1rem]">
              <input
                id="default-checkbox"
                type=""
                className="rounded form-checkbox h-3 w-3 text-gray-600 "
              />
              <span className=" cursor-pointer ml-3">Study Materail</span>
            </label>
          </div>
          <div className="mt-[1rem]">
            <label className="ml-[1rem]">
              <input
                id="default-checkbox"
                type=""
                className="rounded form-checkbox h-3 w-3 text-gray-600 "
              />
              <span className=" cursor-pointer ml-3">Assigment</span>
            </label>
          </div>
          <hr className="h-px  md:my-4 bg-gray-500 border-0 w-[90%] m-auto " />
          <div className="mt-[1rem]">
            <label className="ml-[1rem]">
              <input
                id="default-checkbox"
                type=""
                className="rounded form-checkbox h-3 w-3 text-gray-600 "
              />
              <span className=" cursor-pointer ml-3">Chat</span>
            </label>
          </div>
          {/* Discord Community */}
          <div className=" w-[85%] m-auto font-semibold text-white bg-[#373A41] flex flex-col mt-9 rounded-xl">
            <div className=" px-8 py-2 ">
              <h1 className="md:text-xl  font-Inter">
                <div className="md:block hidden">
                  Discord <br /> Community
                </div>
                <div className="md:hidden"> Discord Community</div>
              </h1>
              <a
                className="inline-flex items-center md:mt-10 mt-5 h-10 px-5 text-indigo-100 transition-colors duration-150 bg-[#E1348B] rounded-lg focus:shadow-outline "
                href="https://discord.gg/q7ARXUQcbx"
              >
                <span>Join</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* logout */}
          <div className="w-[85%] m-auto text-white flex-row mt-2 md:mt-5 md:block hidden">
            <Link to="/">
              <button
                onClick={handleLogout}
                className=" bg-[#373A41]  flex  justify-center  items-center w-full  rounded   pt-2.5 pb-2 text-xs font-medium uppercase leading-normal "
              >
                <span>Log Out </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-2xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
                  <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                </svg>
              </button>
            </Link>
          </div>
          {/* Setting */}
          <div className="w-[85%] m-auto text-white flex-row mt-2 md:mt-5 md:block hidden">
            <button className=" bg-[#373A41]  flex  justify-center items-center w-full rounded pt-2.5 pb-2 text-xs font-medium uppercase leading-normal gap-x-2 ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                className="text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"></path>
              </svg>
              <span className="">Settings </span>
            </button>
          </div>
        </section>
        {/* right section */}
        <section className="bg-[#2E3036] md:rounded-l-[50px] w-full">
          <div className="w-[90%] m-auto">
            <div className="flex justify-between mt-[2rem]">
              <div>
                <h3 className="text-[25px] font-railways"></h3>
              </div>
              <div>
                <div className="bg-contain rounded-full w-10 h-10 "></div>
              </div>
            </div>
          </div>
          <hr className="h-px  md:my-4 bg-gray-500 border-0 w-[100%] m-auto " />
          <div className="flex">
            {/* left side */}
            <div></div>
            {/* right side */}
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
