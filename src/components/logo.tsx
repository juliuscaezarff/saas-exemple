import { cn } from '@/lib/utils'
import { RocketIcon } from '@radix-ui/react-icons'

export type LogoProps<T = any> = {
  className?: string
} & T

export function Logo({ className }: LogoProps) {
  return (
    <div
      className={cn([
        'bg-primary h-6 w-6 flex items-center justify-center rounded-md',
        className
      ])}
    >
      <RocketIcon
        className='text-primary-foreground'
      />
    </div>
  )
}