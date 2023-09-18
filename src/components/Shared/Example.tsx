import { HTMLAttributes } from 'react'
import { cn } from './utils'

type ExampleProps = HTMLAttributes<HTMLDivElement>

export default function Example({ className }: ExampleProps) {
  return <div className={cn('', className)}>Example</div>
}
