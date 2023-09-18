import { HTMLAttributes } from 'react'
import { cn } from '../Shared/utils'
import Container from '../Shared/Container'
import Image from 'next/image'
import Link from 'next/link'

type ExampleProps = HTMLAttributes<HTMLElement>

export default function Header({ className }: ExampleProps) {
  return (
    <header
      className={cn('border-2 border-b-zinc-800 bg-zinc-50 p-5', className)}
    >
      <Container className="flex justify-between">
        <Link href={'/'}>
          <Image
            src={'/logo.svg'}
            width={50}
            height={50}
            alt="Margarida's logo"
            priority={true}
          />
        </Link>

        <span></span>
      </Container>
    </header>
  )
}
