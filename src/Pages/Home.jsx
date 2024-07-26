import React, { useContext, useEffect } from "react";
import Headers from "../Component/Headers";
import { context } from "../main";
import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Home() {
  const { userdata } = useContext(context);

  const buddylist = [
    {
      id: 1,
      name: "Alice Smith",
      email: "alice.smith@example.com",
      phone: "(555) 123-4567",
      isActive: true,
      location: {
        state: "Illinois",
        city: "Springfield",
      },
      experienceLevel: "Intermediate",
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "(555) 234-5678",
      isActive: false,
      location: {
        state: "Illinois",
        city: "Metropolis",
      },
      experienceLevel: "Advanced",
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol.davis@example.com",
      phone: "(555) 345-6789",
      isActive: true,
      location: {
        state: "Illinois",
        city: "Smallville",
      },
      experienceLevel: "Beginner",
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "(555) 456-7890",
      isActive: true,
      location: {
        state: "Illinois",
        city: "Gotham",
      },
      experienceLevel: "Expert",
    },
    {
      id: 5,
      name: "Eve Martin",
      email: "eve.martin@example.com",
      phone: "(555) 567-8901",
      isActive: false,
      location: {
        state: "Illinois",
        city: "Star City",
      },
      experienceLevel: "Intermediate",
    },
    {
      id: 6,
      name: "Frank Moore",
      email: "frank.moore@example.com",
      phone: "(555) 678-9012",
      isActive: true,
      location: {
        state: "Illinois",
        city: "Coast City",
      },
      experienceLevel: "Advanced",
    },
    {
      id: 7,
      name: "Grace Taylor",
      email: "grace.taylor@example.com",
      phone: "(555) 789-0123",
      isActive: false,
      location: {
        state: "Illinois",
        city: "Central City",
      },
      experienceLevel: "Beginner",
    },
    {
      id: 8,
      name: "Hank Anderson",
      email: "hank.anderson@example.com",
      phone: "(555) 890-1234",
      isActive: true,
      location: {
        state: "Illinois",
        city: "Keystone",
      },
      experienceLevel: "Expert",
    },
    {
      id: 9,
      name: "Ivy Thomas",
      email: "ivy.thomas@example.com",
      phone: "(555) 901-2345",
      isActive: true,
      location: {
        state: "Illinois",
        city: "Fawcett City",
      },
      experienceLevel: "Intermediate",
    },
    {
      id: 10,
      name: "Jack Lee",
      email: "jack.lee@example.com",
      phone: "(555) 012-3456",
      isActive: false,
      location: {
        state: "Illinois",
        city: "Blüdhaven",
      },
      experienceLevel: "Advanced",
    },
  ];

const tourplace = [
  {
    tourPlace: "Himalayan Hills",
    aboutPlace: "The Himalayan Hills are known for their stunning natural beauty and serene environment. A perfect destination for trekking and nature walks.",
    img: "https://loremflickr.com/800/600/mountain",
    items: ["Trekking gear", "Warm clothing", "Camera"]
  },
  {
    tourPlace: "Alps Mountain",
    aboutPlace: "The Alps are the highest and most extensive mountain range system in Europe. Famous for skiing and mountaineering.",
    img: "https://loremflickr.com/800/600/vehicle",
    items: ["Ski equipment", "Snow boots", "Warm jacket"]
  },
  {
    tourPlace: "Rocky Mountains",
    aboutPlace: "The Rocky Mountains stretch from Canada to the USA. They offer breathtaking views and numerous outdoor activities like hiking and rock climbing.",
    img: "https://loremflickr.com/800/600/hills",
    items: ["Hiking boots", "Climbing gear", "Map"]
  },
  {
    tourPlace: "Andes Mountains",
    aboutPlace: "The Andes is the longest continental mountain range in the world. It is known for its diverse wildlife and beautiful landscapes.",
    img: "https://loremflickr.com/800/600/tour",
    items: ["Backpack", "Sunscreen", "Binoculars"]
  },
  {
    tourPlace: "Appalachian Mountains",
    aboutPlace: "The Appalachian Mountains are known for their picturesque scenery and rich history. Ideal for hiking and exploring nature.",
    img: "https://loremflickr.com/800/600/cat",
    items: ["Hiking poles", "Water bottle", "Trail snacks"]
  }
]

 

  return (
    <div>
      {/* <p className='text-3xl text-[green] font-bold'>Home page </p>
      <p>Welome to Home page {userdata?.name}</p> */}
      {/* Carousel  */}
      <div className="flex justify-center mt-10">
        <Carousel
          transition={{ duration: 3 }}
          className="rounded-xl h-fit md:h-[50vh] w-[95%] overflow-hidden "
        >
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className=" w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className=" w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className=" w-full object-cover"
          />
        </Carousel>
      </div>
      {/* search bar carousel */}
      <div className="relative w-full max-w-xl mx-auto bg-white rounded-full mt-10">
        <form action="">
          <input
            placeholder="e.g. kolkata"
            className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-[#39a4c1]-200 focus:border-[#39a4c1]-200"
            type="text"
            name="query"
            id="query"
          />
          <button
            type="submit"
            className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-[#39a4c1] sm:px-6 sm:text-base sm:font-medium hover:bg-[#39a4c1]-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            <svg
              className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        
        </form>
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 w-[95%] mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5"
      >
        {buddylist.map((data) => (
          <li
            key={data.id}
            className="col-span-1  flex flex-col divide-y divide-gray-200 rounded-lg bg-[white]-500 text-center border-[#2c9dbc] shadow-md shadow-[#39a4c1] dark:bg-[#39a4c1] dark:border-[#39a4c1]"
          >
            <div className="flex flex-1 flex-col p-8">
              <img
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full border-2 border-[#28a9dc] "
                src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=yQ-kKmUAAAAJ&citpid=1"
                alt=""
              />
              <span
                className="h-4 w-4 rounded-lg absolute shadow-md shadow-[#9a9a9a]"
                style={{ backgroundColor: data.isActive ? "green" : "red" }}
              ></span>
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {data.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">{data.experienceLevel}</dd>
                <dt className="sr-only">Location</dt>
                <dd className="mt-3 ">
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 me-3">
                    {data.location.city}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200 ">
                <div className="flex w-0 flex-1">
                  <Link
                    to="#"
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    
                    Message
                  </Link>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <Link
                    to="#"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
    
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* locations  */}
      <h1 className="text-center text-3xl mt-10">Locations</h1>

      <ul className="list grid grid-cols-1 gap-6 w-[95%] mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5" >
      {
        tourplace.map((place,index)=>
      <li key={index}
        className="p-5 col-span-1 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
        href="#"
      >
        
        <img
          src={place.img}
          className="shadow rounded-lg overflow-hidden border"
        />
        <div className="mt-5">
          <h4 className="font-bold text-xl">{place.tourPlace}</h4>
          <p className="mt-2 text-gray-600">
            {place.aboutPlace}
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              See map
            </button>
          </div>
        </div>
      </li>
 )
}
        

      </ul>
    </div>
  );
}

export default Home;
