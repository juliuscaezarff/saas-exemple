import { Logo } from "../logo";

export default function Footer() {
  return (
    <section className=" py-4 ">
      <div className="max-w-[1720px] mx-auto py-5 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-500">
          © 2024 Todos os direitos reservados
        </div>
        <div className="my-2 md:my-0">
         <Logo className="h-10 w-10 bg-blue-500"/>
        </div>
        <div>
          <a href="/termos" className="text-sm text-gray-500 hover:underline">
            Termos de Serviço
          </a>
        </div>
      </div>
    </section>
  )
}