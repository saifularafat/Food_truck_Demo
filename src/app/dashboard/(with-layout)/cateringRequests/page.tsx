import CateringEventEmpty from "@/components/CateringEventEmpty";

const CateringRequests = () => {
  return (
    <div className="border-gray-100 pb-5">
      <div className="overflow-x-auto">
        <table className="min-w-[100%] border mx-auto">
          <thead>
            <tr className="bg-slate-50 text-slate-900">
              <th className="py-4 px-6 text-base font-bold text-left border-b uppercase">
                OCCASION NAME
              </th>
              <th className="py-4 px-6 text-base font-bold text-left border-b uppercase">
                EVENT DATE
              </th>
              <th className="py-4 px-6 text-base font-bold border-b uppercase text-end">
                HIRED STATUS
              </th>
              <th className="py-4 px-6 text-base font-bold border-b uppercase text-end">CITY</th>
              <th className="py-4 px-6 text-base font-bold border-b uppercase text-end">
                DATE REQUESTED
              </th>
            </tr>
          </thead>
          {/* <tbody>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
              <td className="py-4 px-6 border-b text-xl font-medium">
                Dual Speaker
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium">$99.99</td>
              <td className="py-4 px-6 border-b text-end">
                <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
                  Details
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
              <td className="py-4 px-6 border-b text-xl font-medium">
                Samsung s22
              </td>
              <td className="py-4 px-6 border-b text-lg font-medium">
                $599.99
              </td>
              <td className="py-4 px-6 border-b text-end">
                <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
                  Details
                </button>
              </td>
            </tr>
          </tbody> */}
        </table>
      </div>
      <CateringEventEmpty />
    </div>
  );
};

export default CateringRequests;
