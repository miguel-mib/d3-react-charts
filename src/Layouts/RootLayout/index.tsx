import { Outlet, NavLink, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="h-screen w-screen overflow-y-auto bg-white">
      <nav className="sticky left-0 top-0 flex h-16 w-full items-center justify-start bg-base-100 px-6">
        <Link
          to="/"
          className="cursor-pointer rounded-md p-2 text-2xl font-medium text-primary transition-transform hover:bg-base-200 active:scale-90 active:bg-base-300"
        >
          D3 React Charts
        </Link>
        <ul className="ml-auto flex items-center justify-center">
          <li className="cursor-pointer rounded-md p-2 font-medium transition-transform hover:bg-base-200 active:scale-90 active:bg-base-300">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="cursor-pointer rounded-md p-2 font-medium transition-transform hover:bg-base-200 active:scale-90 active:bg-base-300">
            <NavLink to="/bar">Bar</NavLink>
          </li>
        </ul>
      </nav>
      <main className="h-full w-full">
        <Outlet />
      </main>
    </div>
  );
}
