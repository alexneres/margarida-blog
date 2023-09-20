import { HTMLAttributes } from 'react'
import { cn } from '../Shared/utils'

type ExampleProps = HTMLAttributes<HTMLElement>

export default function Footer({ className }: ExampleProps) {
  return <footer className={cn('w-full py-10 lg:py-24', className)}></footer>
}
