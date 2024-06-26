import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWapper"; 
export default function Home() {
  return (
   <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center'>
    <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 px-2 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50
    '>
      <p className='text-sm font-semibold text-gray-700'>
        DocuAid is available now!
      </p>
    </div>
    <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-center">Chat with your document, use <span className="text-blue-500">DOCU-AId</span></h1>
    <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg px-6">Docu-AId uses AI to help you interact with your PDF files, all you need to do is upload and start the conversation</p>
   </MaxWidthWrapper>
  );
}
