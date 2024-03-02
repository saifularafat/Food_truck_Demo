import Image from "next/image";
import empty from "./../assets/image.webp";
const CateringEventEmpty = () => {
  return (
    <div className="flex items-center justify-center w-full bg-white py-8">
      <div className="w-full mx-auto text-center">
        <Image src={empty} alt="Catering Event Empty" className=" mx-auto"/>
        <h2 className="text-xl font-semibold ">You have no upcoming catering events</h2>
        <p className="text-base font-medium">Submit a new request to get started</p>
      </div>
    </div>
  );
};

export default CateringEventEmpty;
