import { HiMiniCheckBadge } from "react-icons/hi2";
import aboutImg from "../../src/assets/grocery-list.jpg";
import { BsBoxFill } from "react-icons/bs";
import { RiBox3Fill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 mt-25">
      <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow flex-1">
        <img src={aboutImg} alt="" className="object-cover h-full" />
      </div>
      <div className="flex-1">
        <h2 className="text-5xl font-bold text-black">
          Why Chose Our <span className="text-[#11ba82]">Organic Store?</span>
        </h2>
        <div className="flex gap-4 mt-8">
          <div className="p-3 mt-1 bg-[#11ba82]/20 w-fit h-fit rounded-xl">
            <HiMiniCheckBadge size={25} className="text-[#11ba82]" />
          </div>
          <div>
            <p className="font-semibold text-black text-xl">
              100% Satisfaction
            </p>
            <p className="text-black/70">
              Guaranteed missing items, poor quality, or delivery issues? We'll
              resolve everything quickly and professionally.
            </p>
          </div>
        </div>
        {/* =========== */}
        <div className="flex gap-4 mt-4">
          <div className="p-3.5 mt-1 bg-[#11ba82]/20 w-fit h-fit rounded-xl">
            <RiBox3Fill size={20} className="text-[#11ba82]" />
          </div>
          <div>
            <p className="font-semibold text-black text-xl">
              Always Fresh Product
            </p>
            <p className="text-black/70">
              Guaranteed missing items, poor quality, or delivery issues? We'll
              resolve everything quickly and professionally.
            </p>
          </div>
        </div>
        {/* =========== */}
        <div className="flex gap-4 mt-4">
          <div className="p-3.5 mt-1 bg-[#11ba82]/20 w-fit h-fit rounded-xl">
            <FaTruck size={20} className="text-[#11ba82]" />
          </div>
          <div>
            <p className="font-semibold text-black text-xl">Express Delivery</p>
            <p className="text-black/70">
              Average delivery time of 12 minutes within the city limits. Fresh
              food delivered fast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
