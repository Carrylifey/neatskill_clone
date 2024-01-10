import React from "react";
import { Link } from "react-router-dom";
function Page() {
  return (
    <div>
      <div className="bg-black pt-5 mt flex flex-col h-full">
        <header className="flex w-[95%] m-auto">
          <a
            href="/"
            className="uppercase w-[112px] h-[43px] md:w-[186px] md:h-[71px] flex-shrink-0"
          >
            <img
              src="https://neatskills.online/componentsgraphics/common/navbar/navbar/neatskillslogosample.svg"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </a>
          <div className="hidden md:flex justify-center  w-full items-center text-white text-xs  lg:text-base mx-10 lg:mx-12 ">
            <ul className="text-white max-w-[407px] w-full flex justify-between">
              <p className="mr-1 text-md uppercase hover:border-b cursor-pointer">
                COURSE
              </p>
              <p className="mr-1 text-md uppercase hover:border-b cursor-pointer">
                ABOUT US
              </p>
              <p className="mr-1 text-md uppercase hover:border-b cursor-pointer">
                CONTACT
              </p>
            </ul>
          </div>
          <div className="flex justify-center items-center ">
            <Link to="/signin">
              <button
                type="button"
                className="bg-pink-500 transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg text-white font-Inter uppercase font-semibold rounded-md border-2 border-white  text-xs w-[77px] h-7 md:text-sm md:w-24 md:h-11 lg:text-xl lg:w-32 lg:h-14  "
              >
                Sign up
              </button>
            </Link>
            <Link to="/signin">
              <button
                type="button"
                className="bg-transparent transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg text-white font-Inter uppercase font-semibold   rounded-md border-2 border-white  text-xs w-[77px] h-7 ml-10 md:text-sm md:w-24 md:h-11 md:ml-6 lg:text-xl lg:w-32 lg:h-14 lg:ml-[52px] "
              >
                LOGIN
              </button>
            </Link>
          </div>
        </header>
        {/* main container */}
        <main className="">
          <section className="w-[90%] m-auto flex">
            {/* left section */}
            <div className="text-white">
              <h1 className="text-white text-[4.5rem] font-semibold font-railways">
                Lets Learn <br /> beyond the <br /> limits
              </h1>
              <p className="text-white text-center lg:mx-0 md:text-xl mt-7 lg:text-left px-2">
                Educational Programs that will help you start , grow and
                upskill. Book a demo class today !!
              </p>
              <div className="flex ">
                <button className=" text-xs md:text-xl transition duration-300 ease-in-out transform hover:scale-105 lg:text-2xl border md:border-2 h-[42px] md:h-[70px] mt-8 px-6 hover:bg-[#e1348b] flex items-center">
                  Start Learning
                </button>
                <button className=" text-xs transition duration-300 ease-in-out transform hover:scale-105 md:text-xl border md:border-2 h-[42px] md:h-[70px] mt-8 px-[9px] md:px-4 bg-[#e1348b] flex items-center ml-[4rem] ">
                  Watch Demo Session
                </button>
              </div>
            </div>
            {/* right section */}
            <div>
              <img
                className=""
                src="https://neatskills.online/_next/image?url=%2Fcomponentsgraphics%2Fcommon%2Fhomepage%2Fhome%2FGroup174.png&w=1920&q=75"
                alt=""
              />
            </div>
          </section>
        </main>
        {/* Courses Section */}
        <section className="bg-[#15161B] mt-[5rem] pb-[5rem]">
          {/* top section */}
          <div className="mt-[7rem] w-[95%] m-auto">
            <div className="text-white flex justify-between items-center text-center font-semibold  lg:text-4xl">
              <p className="hidden md:flex w-64 h-16 justify-center items-center font-bold mt-[5rem] text-[2.4rem]">
                Explore our <br /> Courses
              </p>
              <p className="w-[40%] pt-2 md:pt-0  text-sm lg:text-xl font-normal justify-between text-center flex items-center text-white mt-[5rem]">
                You dont need to have any prior knowledge to take our classes.
                You just need curiosity and the desire to learn.
              </p>
              <a
                className="hidden md:flex border-2 text-base md:text-lg w-64 h-16 justify-center items-center font-semibold mt-[5rem]"
                href="/beta/courseoverview"
              >
                Explore Courses
              </a>
            </div>
          </div>
          <div className="mt-[8rem] ml-[5rem]  shrink-0 rounded-2xl border-2  border-white shadow-lg bg-[#141518] py-[10px] px-[12px] h-[230px] md:h-[17rem] w-[250px] md:w-[355px]  md:p-5 flex flex-col  ">
            <div className="flex justify-between ">
              <img
                alt="f"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="md:w-[80px] md:h-[80px] w-[70px] h-[70px]  object-contain"
                src="https://neatskills.online/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fneatskills-launch.appspot.com%2Fo%2Fimages%252Fhat.png%3Falt%3Dmedia%26token%3Dff8d0e7b-dbbf-4a9a-a771-aafa24ca6f8c&w=256&q=75"
              />
              <div className="text-[10px] pt-3 md:pt-0 md:text-sm text-[#E1348B] ">
                <span className="mr-3"> Lessons</span>
                <span>Beginner</span>
              </div>
            </div>
            <a
              href="#"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            ></a>
            <div className="flex flex-col justify-between h-full overflow-hidden">
              <div>
                <h1 className="text-[#ffffff8c] text-[6px] md:text-[14px] md:text-sm font-medium">
                  COURSE
                </h1>
                <h1 className="text-white  md:text-2xl font-medium">
                  Christmas Update...
                </h1>
                <p className="font-raleway text-left text-white text-[10px] md:text-[0.8rem]  overflow-hidden overflow-ellipsis leading-normal tracking-wide md:line-clamp-3 line-clamp-2">
                  Christmas Update going on!
                </p>
              </div>
              <div className="flex justify-end pt-4 ">
                <a
                  type="button"
                  className="border-[#E1348B] hover:bg-[#E1348B] text-white border  border-pink text-xs  md:text-sm px-3 py-2 hover:bg-primary hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg"
                  href="/beta/coursedetail?title=Christmas+Update+going+on%21"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* why section */}
        <section className="flex flex-col justify-center items-center w-full py-[42px] md:py-28 md:p-7 mt-10 sm:px-2 bg-bs min-h-screen ">
          <div className="w-full flex flex-col max-w-[1440px]">
            <p className="float-left hidden sm:block font-ral text-[26px] sm:text-4xl lg:text-[55px] font-medium text-white px-9 text-center md:self-start lg:leading-[3.5rem]">
              Why learning with{" "}
              <span className="text-pink-600 whitespace-nowrap mr-2">
                Neat Skills
              </span>
              <br /> gives you a one up
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center mt-5 lg:mt-10">
            {/* left section */}
            <div className="mx-[84px] sm:mx-24 md:ml-10 md:mr-10 lg:mr-16 ">
              <img
                className="w-full object-containject-contain"
                src="https://neatskills.online/componentsgraphics/common/homepage/why/why.svg"
                alt=""
              />
            </div>
            {/* right section */}
            <div className=" flex flex-col justify-center w-full lg:min-w-[460px] lg:max-w-[460px] mt-[58px] lg:mt-auto ">
              <div className="  flex flex-col justify-center w-full lg:min-w-[460px] lg:max-w-[460px] mt-[58px] lg:mt-auto ">
                <p className="bg-gradient-to-r from-[#E1348B] to-[#E73D59] text-white p-4 md:p-6  rounded-r-3xl md:rounded-3xl w-7/12 md:w-3/4 md:mr-20 text-xs sm:text-sm md:text-base lg:text-xl">
                  Go beyond Pre-Recorded Courses with Neat Skills and clear your
                  doubts.
                </p>
                <p className="text-white bg-gradient-to-r from-[#E1348B] to-[#E73D59] p-4 md:p-6 mt-5 lg:mt-[78px]  rounded-l-3xl md:rounded-3xl w-8/12  md:w-3/4 md:ml-20   text-xs sm:text-sm md:text-base lg:text-xl self-end">
                  Our Online classes allows teacher and student to set their own
                  pace of learning and there is added flexibility in setting a
                  schedule that fits everyone.
                </p>
                <p className="text-white bg-gradient-to-r from-[#E1348B] to-[#E73D59] p-4 md:p-6 mt-5 lg:mt-[78px] rounded-r-3xl md:rounded-3xl w-9/12  md:w-3/4 md:mr-20   text-xs sm:text-sm md:text-base lg:text-xl">
                  Interactive problem-solving is more effective than watching
                  lectures. Reinforce your learning with interactive quizzes.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* mentor section */}
        <section className="mt-[5rem] flex justify-center">
          {/* top heading */}
          <div className="bg-[#1E1E1E] w-[90%] rounded-2xl px-5 py-9 md:pt-[110px] md:pb-[129px] max-w-[1440px]">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="text-2xl md:text-3xl flex flex-col items-center bg-bottom bg-contain bg-no-repeat">
                <h1 className="text-white">Meet Our</h1>
                <h1 className="text-white">Mentors</h1>
                <div className="bg-[#DA2C84] transform -rotate-2 w-full origin-bottom-right h-1 mt-[-10px] ml-[10px]"></div>
              </div>
              <div className="text-sm md:text-base md:w-1/2 pt-4 px-4 md:pl-8 text-white">
                Neat Skills offers the world’s best classes from the world’s
                best practitioners. It’s like having a mentor at your fingertips
                - no matter where you are
              </div>
            </div>
            {/* slider show */}
            <div className="mt-[5rem] text-white flex justify-around w-full">
              <div className="border-2 border-white w-[20%] ">
                <div className="bg-[] w-full  bg-no-repeat ">
                  <div className="top-0 left-0 h-full w-full object-cover">
                    <h4 className="pt-[20rem] text-center">Unknow</h4>
                    <p className="text-center">Poerty Expolaring</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-white w-[20%]">
                <div className="bg-[] w-full  bg-no-repeat ">
                  <div className="">
                    <h4 className="pt-[20rem] text-center">Unknow</h4>
                    <p className="text-center">Poerty Expolaring</p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-white w-[20%]">
                <div className="bg-[url] w-full  bg-no-repeat ">
                  <div className="">
                    <h4 className="pt-[20rem] text-center">Unknow</h4>
                    <p className="text-center">Poerty Expolaring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* skill community */}
        <div className="items-center justify-center min-h-screen bg-bs w-full md:px-16 grid md:grid-cols-2 max-w-[1440px] space-y-8">
          <div className="w-full py-4 px-4 text-white relative space-y-20 flex flex-col items-center">
            <div className="flex flex-col justify-center space-y-6 z-10 ">
              <h1 className="lg:text-3xl text-2xl font-medium md:text-start text-center uppercase md:flex hidde translate-x-[750px]">
                Join our Neat Skills Community
              </h1>
              <p className="font-normal md:text-lg flex flex-wrap justify-center items-start text-start translate-x-[750px]">
                Learn any skill (coding , AI/ML , art , business, stock market ,
                marketing , video editing and much more) at just one nominal
                monthly subscription cequivalent to your sim card plan
              </p>
            </div>
            <div className="bg-bs absolute top-0 left-0 w-full h-full -z-20 gtid"></div>
            <img
              className="absolute left-[193.9%] z-10 translate-y-[-100px] scale-[.9]"
              src="./Vector_33.svg"
              alt="main"
            />
            <img
              className="absolute bottom-24 scale-[2] -rotate-[15deg] -translate-x-[60%] left-0 w-1/2 z-10 lg:w-1/5"
              src="./Vector_32.svg"
              alt="main"
            />
            <div className="w-full md:px-16 grid md:grid-cols-2 max-w-[1440px] space-y-8">
              <div className="md:w-full h-full justify-center items-center flex"></div>
              <img
                className="rounded-2xl w-full z-20 scale-[2] "
                src="https://neatskills.online/_next/static/media/Studygirl.4b1c7aaf.svg"
                alt=""
              />
            </div>
          </div>

          <div className="text-white  pt-[20rem] w-[90%] m-auto">
            <div className="w-[90%] m-auto">
              <div className="flex justify-evenly">
                <div>
                  <div>
                    <div className="flex space-x-6 mt-[2rem]">
                      <img
                        alt="main"
                        loading="lazy"
                        width="15"
                        height="15"
                        decoding="async"
                        src="https://neatskills.online/_next/static/media/Bullet.0e97bc90.svg"
                      />
                      <h1 className="font-semibold text-xl">
                        Easily accessible
                      </h1>
                    </div>
                    <p className="flex flex-col ml-10 font-normal text-base">
                      Learn at the comfort of your home , with regular <br />{" "}
                      assessments and doubt sessions.
                    </p>
                  </div>
                  <div>
                    <div className="flex space-x-6 mt-[1.2rem]">
                      <img
                        alt="main"
                        loading="lazy"
                        width="15"
                        height="15"
                        decoding="async"
                        src="https://neatskills.online/_next/static/media/Bullet.0e97bc90.svg"
                      />
                      <h1 className="font-semibold text-xl">
                        Easily accessible
                      </h1>
                    </div>
                    <p className="flex flex-col ml-10 font-normal text-base">
                      Learn at the comfort of your home , with regular <br />{" "}
                      assessments and doubt sessions.
                    </p>
                  </div>
                  <div>
                    <div className="flex space-x-6 mt-[1.2rem]">
                      <img
                        alt="main"
                        loading="lazy"
                        width="15"
                        height="15"
                        decoding="async"
                        src="https://neatskills.online/_next/static/media/Bullet.0e97bc90.svg"
                      />
                      <h1 className="font-semibold text-xl">
                        Easily accessible
                      </h1>
                    </div>
                    <p className="flex flex-col ml-10 font-normal text-base">
                      Learn at the comfort of your home , with regular <br />
                      assessments and doubt sessions.
                    </p>
                    <div className="flex justify-center pt-5 pb-24">
                      <a href="/payment">
                        <button
                          className="border-2 transition duration-300 ease-in-out transform hover:scale-105 border-[#E1348B]
                             bg-[#000000] text-xl
                              md:text-2xl w-64 h-16 justify-center items-center font-medium rounded-md z-40 mt-10"
                        >
                          Subscribe Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* learning activites */}
      <section className="flex flex-col py-11 lg:py-[125px] w-full bg-bs justify-center items-center bg-black ">
        <div className="max-w-[1440px] space-y-4">
          <div className="flex w-full pl-[22px] sm:pl-16 lg:pl-[84px]">
            <p className="text-[15px] sm:text-xl md:text-2xl lg:text-[32px] self-start text-white text-center">
              {/* A number of available learning <br /> activities that will{" "} */}
              <span className="text-[#E1348B]">{/* shock you */}</span>
            </p>
          </div>
          <div className="">
            <img
              className="w-full object-contain"
              src="./Feature_page.svg"
              alt=""
              width="1000"
              height="1000"
            />
          </div>
        </div>
      </section>
      {/* certification section */}
      <div className="  text-white w-full flex justify-center bg-[#16171C] lg:min-h-screen">
        <div className=" max-w-[1440px] flex justify-center items-center w-full flex-col-reverse md:flex-row text-white md:px-[75px] mt-9 mb-[76px] md:my-14">
          <div className="px-[30px] md:px-0 md:pr-20  lg:py-8 md:w-1/2">
            {/* left side */}
            <div className="w-full mt-[5rem] flex   ">
              <div className="px-[30px] lg:py-8 md:w-1/2  w-full">
                <h4 className="text-2xl lg:text-4xl font-semibold flex justify-start w-[260%] ">
                  Stand out with a skill
                  <span className="text-pink-500 ml-3"> Certificate</span>
                </h4>
                <p className="text-[15px]  lg:text-2xl font-semibold text-[#DFDFDF] mt-4  w-[200%]">
                  Earn globally recognized certification and improve your
                  knowledge.
                </p>
                <div className="mt-16 md:mt-12 w-full flex justify-center md:justify-start">
                  <a href="/">
                    <button className="bg-transparent transition duration-300 ease-in-out transform hover:scale-105 text-white font-ral border-2 border-white  w-[173px] h-[52px] lg:w-[203px] lg:h-[75px] relative md:ml-[70px] lg:ml-[110px]">
                      Explore Courses
                      <img
                        alt="/"
                        loading="lazy"
                        width="66"
                        height="45"
                        decoding="async"
                        data-nimg="1"
                        className="absolute  w-[30px]  left-1/2 rotate-90 -top-4  -translate-y-full md:w-[50px]  md:-left-4 md:top-1/2 md:rotate-0 md:-translate-x-full  lg:w-[66px] lg:-left-8 "
                        src="./Group_162.png"
                      />
                    </button>
                  </a>
                </div>
              </div>
              {/* <div className="mb-9 md:mb-0 px-9  md:p-0 xl:pr-11 md:w-1/2">
                <img
                  alt="/"
                  className=""
                  loading="lazy"
                  width="1000"
                  height="1000"
                  decoding="async"
                  data-nimg="1"
                  src="https://neatskills.online/componentsgraphics/common/homepage/explorecourses/Certificate.svg"
                />
              </div> */}
            </div>
            {/* right side */}
          </div>
          <div className="mb-9 md:mb-0 px-9  md:p-0 xl:pr-11 md:w-1/2">
            <img
              alt="/"
              className=""
              loading="lazy"
              width="1000"
              height="1000"
              decoding="async"
              data-nimg="1"
              src="https://neatskills.online/componentsgraphics/common/homepage/explorecourses/Certificate.svg"
            />
          </div>
        </div>
      </div>
      {/* signup section */}
      <div className="bg-black flex flex-col justify-center items-center lg:px-[62px] md:px-12 md:min-h-screen py-12 md:py-36 lg:py-56">
        <section className="flex justify-center items-center">
          <div className="flex  justify-center items-center w-full max-w-[1280px]  bg-[#DA2C84] text-white rounded-3xl  py-2 px-5 md:py-4 md:px-16 ">
            {/* left side */}
            <div className="flex justify-center items-center w-full max-w-[1280px]  bg-[#DA2C84] text-white rounded-3xl  py-2 px-5 md:py-4 md:px-16 ">
              <div className="h-full grow space-y-3 sm:space-y-4  md:space-y-5 lg:space-y-7 pr-4 md:pr-16 ">
                <h1 className="text-sm sm:text-xl md:text-3xl lg:text-[40px] lg:leading-[132%]">
                  The great aim of education is not knowledge, but action.
                </h1>
                <div>
                  <a href="/beta/signup">
                    <button className="flex transition duration-300 ease-in-out transform hover:scale-105 items-center    sm:h-10 sm:w-28 md:h-12 md:w-40 lg:h-16 lg:w-[235px]  bg-black border border-white justify-center space-x-1 sm:space-x-2 md:space-x-4">
                      <p className="text-[12px] sm:text-xs md:text-base lg:text-2xl">
                        Sign Up
                      </p>
                      <img
                        src="./ArrowRight.svg"
                        className="w-[10px] sm:w-5 md:w-7 lg:w-[34px]"
                      />
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>
            {/* right side */}
            <div>
              <div className="w-full">
                <img
                  alt="image"
                  className=""
                  width={900}
                  src="https://neatskills.online/componentsgraphics/common/homepage/signup/5.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-black  flex flex-col items-center w-full">
        <div className="w-full max-w-[1440px] px-3 py-5  lg:px-7 lg:py-11 md:flex md:flex-row md:justify-between">
          <div className="w-full px-2 md:w-auto flex justify-between mb-[50px]">
            <a>
              <img className="object-contain w-[116px] md:w-48 lg:w-64 flex-shrink-0" />
            </a>
            <div className="md:hidden flex space-x-[12px] md:space-x-[24px] xl:space-x-[40px] text-white ">
              <a>{/* //svg */}</a>
              <a>{/* //svg */}</a>
              <a>{/* //svg */}</a>
              <a>{/* //svg */}</a>
              <a>{/* //svg */}</a>
            </div>
          </div>
          <div className="pl-5 grid  grid-cols-2 gap-x-14 gap-y-6 md:gap-x-[92px] md:gap-y-0 my-[50px] md:mt-[100px] md:mb-0 md:px-5 lg:px-10">
            <div className="whitespace-nowrap text-white space-y-[7px] md:xl:space-y-[25px]">
              <h4 className="font-ral text-sm md:text-lg xl:text-xl font-semibold  md:font-normal whitespace-nowrap "></h4>
              <div className="font-Inter space-y-[5px]  md:space-y-[14px] xl:space-y-[19px] pl-1">
                <a className="block transition duration-300 ease-in-out transform hover:scale-105 text-[#FFFFFFBA] font-normal text-[11px] md:text-xs xl:text-[15px] ">
                  {/* //svg */}
                </a>
                <a>{/* //svg */}</a>
                <a>{/* //svg */}</a>
                <a>{/* //svg */}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
