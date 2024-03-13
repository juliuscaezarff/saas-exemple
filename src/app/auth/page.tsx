import { Logo } from '@/components/logo'
import { AuthForm } from './_components/auth-form'

export default function Page() {
  return (
    <main className='flex flex-col items-center justify-center h-screen gap-7'>
      <Logo className='h-10 w-10'/>
      <AuthForm />
    </main>
  )
}
