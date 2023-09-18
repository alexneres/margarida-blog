import Container from '@/components/Shared/Container'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Container>
        <h2>Page Not Found</h2>
        <Link href="/">Return Home</Link>
      </Container>
    </main>
  )
}
