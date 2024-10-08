import { Button } from "../ui/button";

export default function Join() {
  return (
    <section className="w-full h-[720px] bg-[#fce3e0] flex flex-col items-center pt-5 relative pb-24 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/join.png')", width: '100%', height: '130%' }}></div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black z-10">Um novo jeito de gerenciar sessões</h1>
      <Button className="mt-4 bg-blue-500 hover:bg-blue-600 z-10 text-base py-6 px-10 rounded-full">Login</Button>
    </section>
  )
}