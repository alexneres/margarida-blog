import { HTMLAttributes } from 'react'
import { cn } from '../Shared/utils'

type ExampleProps = HTMLAttributes<HTMLElement>

export default function Footer({ className }: ExampleProps) {
  return <footer className={cn('', className)}>Footer</footer>
}
