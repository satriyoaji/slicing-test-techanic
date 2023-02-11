import React from "react";
import 'tw-elements';
import "@fontsource/crimson-text";
import {Widgets, Explanation, Services, Partners, Talents} from "../../dump/aboutContent";

HomePage.propTypes = {};

function HomePage(props) {
    return (
        <>
            <div className="text-center relative overflow-hidden bg-no-repeat bg-cover about-header h-96">
                <div
                    className="absolute top-0 bottom-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor:"rgba(24, 41, 195, 0.6)"}}
                >
                    <div className="grid justify-items-start xl:grid-cols-2 grid-cols-1 xl:px-24 my-16 mx-8 px-16 gap-8">
                        <div className="flex justify-center items-center lg:order-last h-full">
                            <img
                                src="./techanic/header.png"
                                className="block xl:w-[560px] xl:h-[360px] md:w-1/2 h-auto"
                                alt="..."
                            />
                        </div>
                        <div className="grid justify-items-start h-full left-0 pl-0 ml-0">
                            <div className="text-white text-left xl:px-16 px-10">
                                <h3 className="text-xl pt-2 font-sans">WELCOME</h3>
                                <h1 style={{fontFamily: "Crimson Text"}} className="mt-4 text-5xl pt-2 font-crimson">Lorem ipsum dolor sit amet consectetur </h1>
                                <h5 className="mt-4 text-m pt-2 text-slate-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</h5>
                                <div>
                                    <button
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="xl:mt-10 mt-4 inline-block px-6 py-2.5 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 mx-auto py-12 container font-sans">
                <div>
                    <h3 className="font-semibold text-center text-lg mb-5 text-blue-700">PARTNERS</h3>
                    <h1 style={{fontFamily: "Crimson Text"}} className="font-semibold text-center text-5xl font-crimson mb-5">Lorem Ipsum Dolor</h1>
                    <h5 className="text-center text-xl mb-5">Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.</h5>
                </div>
                <div className="mt-12 grid xl:grid-cols-5 lg:grid-cols-2 gap-4 align-middle px-16 justify-content-evenly">
                    {
                        Partners.map((value, idx) => {
                            return (
                                <div className="flex justify-around" key={idx}>
                                    <img
                                        src={`./techanic/${value}`}
                                        alt={value}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-center">
                    <div className="basis-2 grid justify-items-center">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="xl:mt-10 mt-4 px-6 inline-block py-2.5 bg-black text-white font-medium leading-tight rounded shadow-md"
                        >Learn More
                        </button>
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 grid-cols-1 xl:px-12 my-16">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="./techanic/subheader1.svg"
                            className="block xl:w-[600px] xl:h-[400px] md:w-3/4 h-auto"
                            alt="..."
                        />
                    </div>
                    <div className="flex-col justify-start h-full left-0 pl-0 ml-0 text-left">
                        <div className="text-white xl:px-16 px-10">
                            <h1 style={{fontFamily: "Crimson Text"}} className="mt-4 text-5xl text-black font-semibold pt-2 font-crimson">Lorem ipsum dolor sit amet consectetur </h1>
                            <h5 className="mt-4 text-m pt-2 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</h5>
                            <div>
                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="xl:mt-10 mt-4 px-6 inline-block py-2.5 bg-black text-white font-medium leading-tight rounded shadow-md"
                                >Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-stretch xl:grid-cols-2 grid-cols-1 xl:px-12 my-16">
                    <div className="flex justify-center items-center h-full">
                        <img
                            src="./techanic/subheader2.svg"
                            className="block xl:w-[600px] xl:h-[400px] md:w-3/4 h-auto"
                            alt="..."
                        />
                    </div>
                    <div className="flex-col justify-start h-full left-0 pl-0 ml-0 lg:order-first">
                        <div className="text-white xl:px-16 px-10 text-left">
                            <h1 style={{fontFamily: "Crimson Text"}} className="mt-4 text-5xl text-black font-semibold pt-2 font-crimson">Lorem ipsum dolor sit amet consectetur </h1>
                            <h5 className="mt-4 text-m pt-2 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</h5>
                            <div>
                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="xl:mt-10 mt-4 px-6 inline-block py-2.5 bg-black text-white font-medium leading-tight rounded shadow-md"
                                >Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto py-12 container font-sans">
                <div className="mb-8 lg:px-0 px-4">
                    <h3 className="font-semibold text-center text-lg mb-5 text-blue-700">TEAM</h3>
                    <h1 style={{fontFamily: "Crimson Text"}} className="font-semibold text-center text-4xl mb-5">Our Talents</h1>
                    <h5 className="text-center text-lg">Lorem ipsum, dolor sit amet consectetur
                        Suscipit nemo hic quos, ab,</h5>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-16 lg:px-0 px-8">
                    {
                        Talents.map((value, idx) => {
                            return (
                                <div className="flex flex-col justify-center rounded-lg shadow-lg bg-white max-w-sm text-center" key={idx}>
                                    <div className="grid justify-items-center">
                                        <img className="rounded-t-lg"
                                             src={`./techanic/${value.img}`} alt=""/>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium font-semibold mb-2">{value.name}</h5>
                                        <p className="text-gray-700 text-base mb-4">
                                            {value.title}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="grid justify-items-center">
                    <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="xl:mt-10 mt-4 px-6 inline-block py-2.5 bg-black text-white font-medium leading-tight rounded shadow-md"
                    >View Team
                    </button>
                </div>
            </div>
        </>
    );
}

export default HomePage;
