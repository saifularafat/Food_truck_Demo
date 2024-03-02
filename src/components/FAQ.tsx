"user client";
import Image from "next/image";
import faq from "./../assets/faq.png";

const FAQ = () => {
  return (
    <div className="md:py-16 py-8 mx-[72px] overflow-hidden">
      <div className=" text-center">
        <h1 className="text-5xl font-extrabold text-[#1C050E] pb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-base font-normal">
          Find answers to commonly asked questions about StreetEats Hub.
        </p>
      </div>
      <div className=" md:flex items-center justify-center gap-x-10 py-16 mx-auto">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-b-2 border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              <h2>How can I find food trucks near me?</h2>
            </div>
            <div className="collapse-content">
              <p className="text-base font-normal">
                Finding food trucks near you is easy with StreetEats Hub. Simply
                visit our website and click on the 'Locations' tab in the
                navigation menu. You'll be able to view a map with real-time
                location updates of participating food trucks. Never miss out on
                your favorite eats again!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-b-2 border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              <h2>How can I request a food truck for an event?</h2>
            </div>
            <div className="collapse-content">
              <p className="text-base font-normal">
                Finding food trucks near you is easy with StreetEats Hub. Simply
                visit our website and click on the 'Locations' tab in the
                navigation menu. You'll be able to view a map with real-time
                location updates of participating food trucks. Never miss out on
                your favorite eats again!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-b-2 border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              <h2>How can I add a new food truck to the platform??</h2>
            </div>
            <div className="collapse-content">
              <p className="text-base font-normal">
                Finding food trucks near you is easy with StreetEats Hub. Simply
                visit our website and click on the 'Locations' tab in the
                navigation menu. You'll be able to view a map with real-time
                location updates of participating food trucks. Never miss out on
                your favorite eats again!
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              <h2>How can I contact StreetEats Hub?</h2>
            </div>
            <div className="collapse-content">
              <p className="text-base font-normal">
                Finding food trucks near you is easy with StreetEats Hub. Simply
                visit our website and click on the 'Locations' tab in the
                navigation menu. You'll be able to view a map with real-time
                location updates of participating food trucks. Never miss out on
                your favorite eats again!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image src={faq} alt="FAQ Photo" className="w-[630px] h-[612px]" />
        </div>
      </div>
    </div>
  );
};
export default FAQ;
