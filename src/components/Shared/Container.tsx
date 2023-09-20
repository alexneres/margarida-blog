import { HTMLAttributes, ReactNode } from 'react'
import { cn } from './utils'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('container mx-auto px-5', className)}>{children}</div>
  )
}
