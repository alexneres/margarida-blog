import { HTMLAttributes } from 'react'
import { cn } from '../Shared/utils'
import Container from '../Shared/Container'
import Image from 'next/image'
import Link from 'next/link'

type HeaderProps = HTMLAttributes<HTMLElement>

export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn('bg-zinc-300  py-5', className)}>
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
