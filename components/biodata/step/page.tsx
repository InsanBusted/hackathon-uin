import Image from 'next/image'
import React from 'react'

const Step = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl md:font-bold bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">Start Here!</h2>
        <Image
            src="/image/arrowDown.png"
            width={20}
            height={20}
            alt="arrow down"
        />
      </div>
      <div className="w-full flex flex-col p-8 bg-white">
        <div className="w-full flex justify-center items-center bg-linear-to-b from-[#63D9FA] to-[#F5F5F5] rounded-lg">
            <div className="flex flex-col items-center gap-3">
            <div className="rounded-full bg-linear-to-r from-[#130F26] to-[#64B5F6] px-1 py-1">1</div>
            <p className="bg-linear-to-r from-[#130F26] via-[#0A2F5A] to-[#64B5F6] bg-clip-text text-transparent">Fill In Your Data</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Step
