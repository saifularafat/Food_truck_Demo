import Link from "next/link";

const DashboardNav = () => {
  return (
    <div className="">
      <ul className="flex items-center gap-x-10 text-slate-800 border-b-2 border-slate-100">
        <li className="group flex cursor-pointer flex-col">
          <Link
            href="/dashboard/cateringRequests"
            className="hover:text-orange-500 text-xl font-semibold"
          >
            Catering Requests
          </Link>
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-gradient-to-tr from-orange-600 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex cursor-pointer flex-col">
          <Link
            href="/dashboard/myOrder"
            className="hover:text-orange-500 text-xl font-semibold"
          >
            My Order
          </Link>
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-gradient-to-tr from-orange-600 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex cursor-pointer flex-col">
          <Link
            href="/dashboard/favoritesMy"
            className="hover:text-orange-500 text-xl font-semibold"
          >
            My Favorites
          </Link>
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-gradient-to-tr from-orange-600 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex cursor-pointer flex-col">
          <Link
            href="/dashboard/truckReviews"
            className="hover:text-orange-500 text-xl font-semibold"
          >
            Truck Reviews
          </Link>
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-gradient-to-tr from-orange-600 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex cursor-pointer flex-col">
          <Link
            href="/dashboard/breweryReviews"
            className="hover:text-orange-500 text-xl font-semibold"
          >
            Brewery Reviews
          </Link>
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-gradient-to-tr from-orange-600 to-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNav;
