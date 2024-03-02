import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

const PageTitle = ({ title }) => {
  return (
    <div className="flex items-center text-left text-sm font-medium text-slate-400 py-8">
      <Link href="/" className="pr-1">Home</Link>
      <FaAngleDoubleRight />
      <p className="pl-1 text-slate-900">{title}</p>
    </div>
  );
};

export default PageTitle;
