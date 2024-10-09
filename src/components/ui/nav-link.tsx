import { cn } from '@/lib/utils'
import Link from 'next/link'

type NavLinkProps<T = any> = {
  href: string
  active?: boolean
  children: React.ReactNode
  className?: string
} & T

export function NavLink({ children, className, href, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn([
        'flex items-center text-sm font-semibold rounded-md px-3 py-2',
        active && 'bg-secondary',
        className
      ])}
    >
      {children}
    </Link>
  )
}