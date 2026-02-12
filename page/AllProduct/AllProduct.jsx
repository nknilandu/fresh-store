import React from "react";
import veggies from "../../src/assets/product/images-donut.jpg"
import { IoMdAdd } from 'react-icons/io';

const AllProduct = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 text-black">
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
        <div>
          <p className="text-2xl font-bold text-black">Best Deal Today</p>
          <p className="text-lg text-black ">HandPicked Fresh Deal For You</p>
        </div>
        <div>
          {/* ========= search ========= */}
          <label className="input rounded-full bg-transparent border border-black/30">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
      {/* ======================= */}
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-between mt-8'>
      
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='p-3 bg-[#f3f8f2] rounded-2xl w-fit shadow hover:shadow-xl transition-all'>
                          <div className='h-[160px] w-full rounded-2xl overflow-hidden '>
                              <img src={veggies} alt="" className='object-cover'/>
                          </div>
                          <div>
                              <p className='text-xl text-black mt-2'>Organic Spinach</p>
                              <p className='text-black'>1 Bunch</p>
                              <div className='flex justify-between my-2'>
                                  <p className='text-3xl font-semibold text-black'>$15.50<span className='text-lg font-normal text-black/50'>/bunch</span></p>
                                  <div className='bg-[#10b981] p-2 rounded-full'>
                                      <IoMdAdd size={25} className='text-white'/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </div>

    </div>
  );
};

export default AllProduct;
