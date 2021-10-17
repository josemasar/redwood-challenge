import { Link, routes } from '@redwoodjs/router'

const IndexPage = () => {
  return (
    <>
      <div className="container mx-auto min-w-full h-28 bg-gray-800 opacity-95">
        <nav className="flex flex-row">
          <div className="container p-6 flex justify-start ">
            <p className="mt-2 ml-20 text-4xl font-bold text-white">Logo</p>
          </div>
          <div className="container flex justify-end">
            <Link to={routes.admin()}>
              <button className="btn-blue mr-8">Log in</button>
            </Link>
            <button className="btn-blue">Register</button>
          </div>
        </nav>
      </div>
      <div
        className="container mx-auto min-w-full min-h-full flex flex-auto justify-center
    bg-gradient-to-tl from-purple-600 via-indigo-400 to-green-500"
      >
        <h1 className="max-w-6xl mt-28 mb-28 text-7xl md:text-8xl font-black text-center p-40 align-middle">
          Rapidly control cost of industrial goods
        </h1>
      </div>
      <div className="container mx-auto mt-40">
        <h2 className="text-6xl font-bold text-center">Why Costbase?</h2>
        <h4 className="text-2xl text-center mt-12 font-medium opacity-75">
          The next world´s smartest solution to lower costs in high complex
          assembled products
        </h4>
      </div>
      <div className="bg-local bg-wave"></div>
    </>
  )
}

export default IndexPage
