import { PropsWithChildren } from 'react'

import { auth } from '@/services/auth'

import { MainSidebar } from './_components/main-sidebar'
import { ThemeProvider } from '../_components/theme-provider'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth()

  return (
    <div className="grid grid-cols-[16rem_1fr] ">
      <MainSidebar user={session?.user} />

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  )
}
