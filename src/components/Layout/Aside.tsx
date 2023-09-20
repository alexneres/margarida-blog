import { HTMLAttributes } from 'react'
import { cn } from '../Shared/utils'
import Link from 'next/link'

type AsideProps = HTMLAttributes<HTMLElement>

export default function Aside({ className }: AsideProps) {
  return (
    <aside
      className={cn(
        'flex w-full flex-col md:items-center  lg:block lg:w-96 ',
        className,
      )}
    >
      <h4 className="text-base">
        This Margarida Blog was created using Next.js 13 and Sanity CMS, and you
        can find the source code on my
        <Link href={'https://github.com/alexneres'} className="font-semibold">
          {' '}
          GitHub.
        </Link>
      </h4>
    </aside>
  )
}
