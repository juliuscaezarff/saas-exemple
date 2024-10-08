import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function Component() {
  return (
    <section className="max-w-[1720px] mx-auto px-4 py-8 pt-28">
      <div className="flex flex-col items-center text-center mb-8 space-y-2 sm:space-y-3 md:space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mt-2 sm:mt-3 md:mt-4">
          Preços
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg dark:text-gray-400 w-full sm:w-[746px] h-[100px]">
          Comece gratuitamente e organize suas sessões com facilidade. Quando
          precisar de mais recursos, nossa versão Pro oferece funcionalidades
          avançadas para otimizar ainda mais o seu atendimento.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Plano Padrão */}
        <Card className="w-full md:w-[394px] md:h-[412px] flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg xl:text-2xl">Free</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-3xl font-bold mb-2">
              R$0.00
              <span className="text-sm font-normal text-muted-foreground">
                /mês
              </span>
            </p>
            <ul className="space-y-1 text-sm xl:text-lg">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Até 5 membros na equipe
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                10GB de armazenamento
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Suporte básico
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full py-6" variant="outline">
              Escolher Padrão
            </Button>
          </CardFooter>
        </Card>

        {/* Plano Premium com borda colorida */}
        <Card className="w-full md:w-[394px] flex flex-col border-2 border-blue-400 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg xl:text-2xl">Pro</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-3xl font-bold mb-2">
              R$79
              <span className="text-sm font-normal text-muted-foreground">
                /mês
              </span>
            </p>
            <ul className="space-y-1 text-sm  xl:text-lg">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Membros ilimitados
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                100GB de armazenamento
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Suporte prioritário 24/7
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Análises avançadas
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full py-6 bg-blue-500 hover:bg-blue-600">Escolher Premium</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
