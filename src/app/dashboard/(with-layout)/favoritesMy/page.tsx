import Link from "next/link";

const FavoritesMy = () => {
  return (
    <div>
      <div className=" py-12 px-5">
        <h4 className="text-3xl font-bold">Food trucks (0)</h4>
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-2xl font-semibold pb-8">
              Nothing saved just yet
            </h1>
            <p className="text-lg font-normal">
              Save your first food truck to see it here
            </p>
            <div className="py-6">
              <Link
                href=""
                className="py-2 px-4 bg-orange-500 hover:bg-orange-300 text-white tracking-wide font-medium rounded-md"
              >
                Explore Food Truck
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-12 px-5">
        <h4 className="text-3xl font-bold">Breweries (0)</h4>
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-2xl font-semibold pb-8">
              Nothing saved just yet
            </h1>
            <p className="text-lg font-normal">
              Save your first food truck to see it here
            </p>
            <div className="py-6">
              <Link
                href=""
                className="py-2 px-4 bg-orange-500 hover:bg-orange-300 text-white tracking-wide font-medium rounded-md"
              >
                Explore Food Truck
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesMy;
