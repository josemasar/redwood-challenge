const CardsIndex = () => {
  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        {/* <!--Card 1--> */}
        <div className=" w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="Mountain"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                Best Mountain Trails 2020
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              {/*  <img className="w-10 h-10 rounded-full mr-4" src="/ben.png" alt="Avatar of Writer"> */}
              <div className="text-sm">
                <p className="text-gray-900 leading-none">John Smith</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
        {/*  <!--Card 2--> */}
        <div className="w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="River"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                15 Rivers In Norway
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              {/*  <img className="w-10 h-10 rounded-full mr-4" src="/karen.png" alt="Avatar of Writer"> */}
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Karen Johnson</p>
                <p className="text-gray-600">Aug 10</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Card 3--> */}
        <div className="w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="Forest"
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                Members only
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                5 National Forests across the U.S.
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              {/*  <img className="w-10 h-10 rounded-full mr-4" src="/rafael.png" alt="Avatar of Writer"> */}
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Rafael Martin</p>
                <p className="text-gray-600">Aug 9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
        <div className="h-64 bg-cover hover:bg-gray"></div>
        <div className="mx-6 my-4 border-b border-gray-light">
          <div className="font-medium text-base text-gray-darker mb-4">
            Item name goes here
          </div>
          <p className="font-normal text-gray-dark text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className="font-normal text-gray-dark text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className="mx-6 my-4 flex">
          <div className="flex-grow">
            <span className="inline-block bg-red-light rounded-full p-1 pb-0 mr-2">
              <svg fill="white" width="16" height="16" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
              </svg>
            </span>
            <span className="inline-block bg-red-light rounded-full p-1 pb-0 mr-2">
              <svg fill="white" width="16" height="16" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
              </svg>
            </span>
          </div>
          <div className="flex-grow text-right">
            <svg
              className="mx-2"
              fill="gray-dark"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
            </svg>
            <svg
              className="mx-2"
              fill="gray-dark"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
            </svg>
            <svg
              className="ml-2"
              fill="gray-dark"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsIndex
