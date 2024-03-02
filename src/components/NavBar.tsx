import Link from "next/link";
import NavProfile from "./NavProfile";

const NavBar = () => {
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/findTruck",
      title: "Find Truck",
    },
    {
      path: "/catering",
      title: "Catering",
    },
    {
      path: "/map",
      title: "Map",
    },
    {
      path: "/vendor",
      title: "Vendor",
    },
  ];
  return (
    <div className="px-[72px] max-w-screen-2xl mx-auto">
      <nav className="flex items-center justify-between px-4 py-2 bg-[#b7b2b2] text-white">
        <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <Link href="/">
            <h1 className="text-2xl font-medium font-sans text-[#FA393D]">
              StreetEats
              <span className="text-white pl-2">Hub</span>
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-6 text-white">
          {navLinks.map(({ path, title }) => (
            <Link href={path} key={path}>
              <li
                className="cursor-pointer  rounded-full px-5 py-2 text-white hover:bg-sky-600"
              >
                {title}
                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-gradient-to-tr from-sky-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
          ))}
        </ul>
        <div className="relative">
          <NavProfile path1="/dashboard/cateringRequests" title1="Dashboard" path2="/dashboard/cateringRequests" title2="My Profile"  path3="/dashboard/cateringRequests" title3="Profile Setting" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
