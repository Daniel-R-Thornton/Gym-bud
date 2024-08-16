import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div className="dark:bg-gray-800 dark:text-white p-2 flex gap-2">
          <Link
            to="/"
            className="dark:hover:bg-gray-700 dark:focus-visible:bg-gray-700 font-semibold rounded-md px-2 py-1 transition-colors duration-200 ease-in-out [&.active]:bg-gray-700"
          ></Link>
          <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>{" "}
            <Link
              to="/about"
              className="dark:hover:bg-gray-700 dark:focus-visible:bg-gray-700 font-semibold rounded-md px-2 py-1 transition-colors duration-200 ease-in-out [&.active]:bg-gray-700"
            ></Link>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </div>
          <hr className="dark:border-gray-600 mt-2" />
          <hr />
          <Outlet />
        </div>
      </>
    );
  },
});
