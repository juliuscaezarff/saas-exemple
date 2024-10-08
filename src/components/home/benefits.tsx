import Image from 'next/image'

export default function Benefits() {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16">
      <div className='max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16'>
      <div className="border-b border-border text-left mb-8 space-y-2 sm:space-y-3 md:space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mt-2 sm:mt-3 md:mt-4">
          Features
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg dark:text-gray-400 w-full sm:w-[746px] h-[100px]">
          Tola makes it easy for SMBs to pay suppliers, send invoices, get access to working capital and gain control over business cash flow in one place.
        </p>
      </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center xl:flex-nowrap">
        {[
          {
            title: 'Accounts payable',
            description: 'Manage, pay and reconcile business bills',
            icon: '/icon1.svg',
            bgColor: 'bg-[#BFB4FD]'
          },
          {
            title: 'Accounts receivable',
            description: 'Track and collect incoming payments',
            icon: '/icon2.svg',
            bgColor: 'bg-[#FE914D]'
          },
          {
            title: 'Expense management',
            description: 'Monitor and control business expenses',
            icon: '/icon3.svg',
            bgColor: 'bg-[#FEBD4D]'
          },
          {
            title: 'Financial reporting',
            description: 'Generate detailed financial reports',
            icon: '/icon4.svg',
            bgColor: 'bg-[#BAB478]'
          }
        ].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[550px] xl:w-[400px] h-auto bg-blue-primary flex items-center p-4 gap-4 mb-4"
          >
            <div
              className={`flex items-center justify-center ${item.bgColor} rounded-[8px] w-8 h-8`}
            >
              <Image
                src={item.icon}
                alt="icone"
                width={20}
                height={20}
                className=""
              />
            </div>
            <div className="w-full">
              <h2 className="font-sans text-lg sm:text-xl">{item.title}</h2>
              <p className="font-sans text-sm sm:text-lg font-normal text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
