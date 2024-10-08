import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="flex justify-center items-center sm:pt-28 md:pt-32 lg:pt-40 w-full bg-small-dots dark:bg-small-dots-dark bg-dots-pattern min-h-screen">
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full max-w-full xl:max-w-7xl">
        <Link
          href={'/auth'}
          className="flex items-center px-2 sm:px-3 md:px-4 py-1 mb-4 sm:mb-6 md:mb-8 transition ease-out dark:text-black hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-500 border rounded-full bg-[#FAFAFA] hover:bg-zinc-100 cursor-pointer text-xs sm:text-sm md:text-base"
        >
          <h1 className="px-4 sm:px-8 md:px-12 lg:px-16 py-2 flex items-center gap-2">
            Teste grátis agora mesmo
            <ArrowRightIcon />
          </h1>
        </Link>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <h1 className="dark:text-[#FAFAFA] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[69px] font-bold leading-tight mt-2 sm:mt-3 md:mt-4">
            Simplifique o Gerenciamento das Suas Sessões Online
          </h1>
          <p className="mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-400">
            Gerencie suas sessões e automatize lembretes para seus pacientes com
            facilidade. Otimize seu tempo e ofereça uma experiência de
            atendimento mais organizado
          </p>

          {/* <div className="flex items-center justify-center">
            <Button className="mt-6 sm:mt-4 md:mt-5 lg:mt-7 gap-2 sm:gap-3 md:gap-4 md:text-lg bg-blue-500 hover:bg-blue-600 text-lg sm:text-xl py-6 px-10 rounded-full">
              Comece agora <ArrowRightIcon />
            </Button>
          </div> */}
        </div>

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-10 sm:pt-12 md:pt-16 lg:pt-10">
          <Image
            src="/images/image-exemple.png"
            alt="exemplo de dashboard"
            width={1720}
            height={570}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
