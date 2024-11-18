import Link from "next/link"

const Hero = () => {
  return (
    <div className="lg:p-10 lg:px-32 h-screen bg-white">
      <div className="flex flex-col items-center max-w-7xl mt-10">
        <h1 className="text-3xl lg:text-8xl lg:leading-tight font-semibold text-center mb-5">Simplify your Finances & Tasks with <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-transparent bg-clip-text font-bold">FinTasker.</span></h1>
        <p className="sm:text-lg md:text-xl mt-4 max-w-2xl text-center mb-6 text-zinc-500">Stay organized, track your progress, and take control of both your finances and tasks - so you can focus on what truly matters.</p>
        <Link href={'/register'} className="rounded-md bg-gradient-to-r from-blue-700 to-blue-400 px-4 py-2 text-lg text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2  transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70">Get started</Link>
      </div>
    </div>
  )
}

export default Hero

