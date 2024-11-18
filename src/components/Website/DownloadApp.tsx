import Image from "next/image"

const DownloadApp = () => {
  return (
    <div className="lg:mx-32 mx-6 py-6 lg:py-12">
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl h-[600px] grid grid-cols-2">
        <div className="flex flex-col p-12">
          <h2 className="text-4xl font-bold md:text-5xl text-white max-w-3xl leading-0">
            Get control of your finances and tasks
          </h2>
          <p className="text-blue-100 mt-4 max-w-3xl text-xl">Download FinTasker for iOS or Android and start organizing your most important things.</p>
        </div>
        <div className="flex justify-end p-12">
          <Image 
            src="/assets/mobile.png"
            alt="mobile"
            width={500}
            height={500}
            className="w-auto h-[500px]"
          />
        </div>
      </div>
    </div>
  )
}
export default DownloadApp