import type { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const Layout: FC<LayoutProps> = () => {
  return <div>
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <Link to='/' className="font-bold">Github Search</Link>
      <span>
        <Link className="mr-2" to='/'>Home</Link>
        <Link to='/favourites'>Favourites</Link>
      </span>
    </nav>
  </div>
}
