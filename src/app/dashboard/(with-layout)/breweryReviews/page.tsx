import Link from "next/link";

const BreweryReviews = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center py-14">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-950">
            No reviews yet
          </h2>
          <p className="text-lg font-normal pt-6">
            Write your first review to see it here
          </p>
          <div className="pt-9">
            <Link
              href=""
              className="py-3 px-6 rounded-md bg-orange-500 hover:bg-orange-300 text-xl font-bold text-white transition-all duration-200"
            >
              Explore Food Trucks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreweryReviews;
