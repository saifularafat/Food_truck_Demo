import Image from "next/image";
import Link from "next/link";
import profile from "./../assets/user1.jpeg";

const NavProfile = ({ path1, title1, path2, title2, path3, title3 }) => {
  return (
    <div className=" cursor-pointer group">
      <div className="w-full mx-auto group-hover:block">
        <div className="relative group flex items-center gap-2">
          {/* {user?.displayName} */}
          <Image src={profile} alt="" className="w-11 h-11 rounded-full" />
        </div>
      </div>
      <div className="absolute hidden top-12 text-slate-500 bg-transparent z-50 px-4 py-1 w-44 text-right right-0 group-hover:block rounded overflow-hidden">
        <div className="border-0 border-b-[2px] border-slate-400 pb-3">
          <button className="space-y-1 text-right">
            <div className="pt-1">
              <Link
                href={path1}
                className="text-base font-medium  leading-none w-full rounded-md px-3 py-1 hover:bg-slate-200 transition-all duration-200 my-2"
              >
                {title1}
              </Link>
            </div>
            <div>
              <Link
                href={path2}
                className="text-base font-medium  leading-none w-full rounded-md px-3 py-1 hover:bg-slate-200 transition-all duration-200"
              >
                {title2}
              </Link>
            </div>
            <div>
              <Link
                href={path3}
                className="text-base font-medium  leading-none w-full rounded-md px-3 py-1 hover:bg-slate-200 transition-all duration-200"
              >
                {title3}
              </Link>
            </div>
          </button>
        </div>
        <div className="py-1">
          <Link
            href="signIn"
            className="text-sm font-medium  leading-none w-full rounded-md px-3 py-1 hover:bg-slate-200 transition-all duration-200"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
