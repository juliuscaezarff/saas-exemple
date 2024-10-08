import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  const faqItems = [
    {
      question: "Como faço para criar uma conta?",
      answer: "Para criar uma conta, clique no botão 'Registrar' no canto superior direito da página inicial. Preencha o formulário com suas informações e clique em 'Criar conta'."
    },
    {
      question: "Qual é a política de devolução?",
      answer: "Nossa política de devolução permite que você retorne produtos não utilizados dentro de 30 dias após a compra. Entre em contato com nosso serviço ao cliente para iniciar o processo de devolução."
    },
    {
      question: "Vocês oferecem envio internacional?",
      answer: "Sim, oferecemos envio internacional para muitos países. As taxas de envio e o tempo de entrega variam dependendo do destino. Verifique as opções disponíveis durante o processo de checkout."
    },
    {
      question: "Como posso rastrear meu pedido?",
      answer: "Após o envio do seu pedido, você receberá um e-mail com um número de rastreamento. Use esse número em nossa página de rastreamento de pedidos ou no site da transportadora para acompanhar o status da entrega."
    },
    {
      question: "Vocês oferecem descontos para compras em grande quantidade?",
      answer: "Sim, oferecemos descontos para compras em grande quantidade. Entre em contato com nossa equipe de vendas para discutir suas necessidades e obter uma cotação personalizada."
    }
  ]

  return (
    <section className="relative max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-28">
  {/* Elemento de Blur posicionado atrás do Accordion */}
  <div className="absolute top-[150px] right-20 w-60 h-60 bg-blue-400 blur-3xl rounded-full opacity-80 z-0"></div>

  <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16 relative z-10">
    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
      <div className="lg:w-1/3 text-left mb-8 space-y-2 sm:space-y-3 md:space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mt-2 sm:mt-3 md:mt-4">
          Perguntas Frequentes
        </h2>
      </div>
      <div className="lg:w-2/3 relative z-10">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-muted rounded-lg overflow-hidden">
              <AccordionTrigger className="text-left text-sm xl:text-lg hover:bg-muted/50 transition-all px-6 py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-muted/20">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
</section>

  )
}