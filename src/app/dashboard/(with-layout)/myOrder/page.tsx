import Link from "next/link";

const MyOrder = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center py-14">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-950">You haven't placed any orders yet.</h2>
          <p className="text-lg font-normal pt-4">Did you know you can search for trucks</p>
          <p className="text-lg font-normal ">currently offering Truckster ordering?</p>
          <div className="pt-7">
            <Link href="" className="py-3 px-6 rounded-md bg-orange-500 hover:bg-orange-300 text-xl font-bold text-white transition-all duration-200">
              Explore Food Trucks & Order
            </Link>
          </div>
        </div>
      </div>
      {/* <h3>MY Order</h3>  Project_Food_Truck*/}
    </div>
  );
};

export default MyOrder;
