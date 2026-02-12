import bannerImg from "../../src/assets/banner-image.png"

export default function Banner() {
  return (
    <div>
        <div className=" w-full bg-[#e0f3e9] rounded-2xl flex flex-col md:flex-row overflow-hidden py-10">
            
            <div className=" flex-1  flex justify-center items-center ml-12">
              <div className="space-y-3 ">
                  <p className="text-sm bg-[#f1fcf6] text-[#10b981] w-fit px-4 py-1 rounded-2xl font-semibold">LIMITED TIME OFFER</p>
               <p className="text-6xl font-bold text-black"> Fruits: <span className="text-[#10b981]">25% Off</span> Today!</p>
               <p className="text-xl text-black/70">Shop & save with fresh daily deals. We deliver organic, high-quality fruits and vegetables right to your doorstep.</p>
                <button className="btn bg-[#10b981] border-0 rounded-full px-5">Shop Now</button>
              </div>
            </div>

            <div className="h-full flex-1 flex justify-center items-center">
                <img src={bannerImg} alt="image" className="w-11/12"/>
            </div>
            

        </div>
        

    </div>
  );
}
